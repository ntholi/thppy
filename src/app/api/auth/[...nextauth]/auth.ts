import { Account, AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import { auth } from '@/lib/firebase';
import { adminAuth } from '@/lib/firebase-admin';
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const authOptions = {
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  // debug: process.env.NODE_ENV === 'development',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Enter email and password');
        }
        const { user } = await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password,
        );

        if (!user) {
          throw new Error('User not found');
        }
        return {
          id: user.uid,
          email: user.email,
          name: user.displayName,
          image: user.photoURL,
        } as any;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        if (account?.provider === 'google') {
          const credential = GoogleAuthProvider.credential(account.id_token);
          await signInWithCredential(auth, credential);
        }
        return true;
      } else {
        return false;
      }
    },

    async jwt({ token, account, profile, user }) {
      if (user && account) {
        const uid = await getFirebaseUserId(user, account);
        if (uid) {
          token.id = uid;
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
} as AuthOptions;

async function getFirebaseUserId(user: User, account: Account | null) {
  let firebaseUser;
  if (account?.provider === 'google') {
    firebaseUser = await adminAuth.getUserByProviderUid(
      'google.com',
      account.providerAccountId,
    );
  } else {
    firebaseUser = await adminAuth.getUserByEmail(user.email || '');
  }
  return firebaseUser.uid;
}
