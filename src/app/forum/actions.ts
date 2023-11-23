'use server';
import { db } from '@/lib/firebase';
import { Post } from '@/lib/modals';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function createPost(post: Post) {
  await addDoc(collection(db, 'forum'), {
    ...post,
    createdAt: serverTimestamp(),
  });
}
