'use client';
import { Button, Textarea, User } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function NewPost() {
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async () => {
    if (!session?.user) return;

    try {
      setPosting(true);
      if (content && content.trim().length > 0) {
        await addDoc(collection(db, 'forum'), {
          content,
          userId: session?.user?.id,
          userDisplayName: session.user.name ?? '',
          userPhotoURL: session?.user?.image ?? '',
          createdAt: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setContent('');
      setPosting(false);
    }
  };

  return (
    <section className='flex flex-col items-end bg-white p-3 shadow-md'>
      <Textarea
        variant='bordered'
        labelPlacement='outside'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        label='New Topic'
        placeholder='What do you want to discuss about?'
      />
      <Button
        onClick={handleSubmit}
        color='danger'
        isLoading={posting}
        className='mt-5'
      >
        Post
      </Button>
    </section>
  );
}
