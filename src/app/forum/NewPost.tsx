'use client';
import { Button, Textarea, User } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { createPost } from './actions';
import { useState } from 'react';

export default function NewPost() {
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async () => {
    if (!session?.user) return;

    try {
      setPosting(true);
      if (content && content.trim().length > 0) {
        await createPost({
          content,
          userId: session?.user?.id,
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
    <section className='flex flex-col items-end'>
      <Textarea
        className=''
        variant='bordered'
        labelPlacement='outside'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        label='New Topic'
        placeholder='What do you want to discuss about?'
      />
      <Button onClick={handleSubmit} isLoading={posting}>
        Post
      </Button>
    </section>
  );
}
