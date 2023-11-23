import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { ServiceAccount, cert } from 'firebase-admin/app';
import { FirestoreAdapter } from '@auth/firebase-adapter';

export const googleCredentials: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined,
};

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert(googleCredentials),
  }),
  callbacks: {
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = user.id;
        // session.user.role = user.role;
      }
      return session;
    },
  },
} as AuthOptions;
