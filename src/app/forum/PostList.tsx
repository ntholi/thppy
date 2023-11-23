'use client';
import { db } from '@/lib/firebase';
import { Post } from '@/lib/modals';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import React, { useEffect } from 'react';

export default function PostList() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  useEffect(() => {
    const q = query(collection(db, 'forum'), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (doc) => {
      const posts: Post[] = [];
      doc.forEach((post) => {
        posts.push({
          id: post.id,
          ...post.data(),
        } as Post);
      });
      setPosts(posts);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <div key={post.id}>{post.content}</div>;
      })}
    </div>
  );
}
