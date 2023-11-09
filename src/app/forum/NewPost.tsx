'use client';
import { Button, Textarea, User } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { createPost } from './actions';
import { useState } from 'react';

export default function NewPost() {
  const [content, setContent] = useState('');
  const { data: session } = useSession();

  const handleSubmit = async () => {
    if (!session?.user) return;

    if (content && content.trim().length > 0) {
      createPost({
        content,
        userId: session?.user?.id,
      });
    }
  };

  return (
    <section className='flex flex-col items-end'>
      <Textarea
        className=''
        variant='bordered'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        label='New Topic'
        placeholder='What do you want to discuss about?'
      />
      <Button onClick={handleSubmit}>Post</Button>
    </section>
  );
}
