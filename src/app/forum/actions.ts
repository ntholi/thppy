'use server';
import { db } from '@/lib/firebase';
import { Post } from '@/lib/modals';
import { doc, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function createPost(post: Post) {
  const docRef = await addDoc(collection(db, 'cities'), {
    ...post,
    createdAt: serverTimestamp(),
  });
}
