import { Post } from '@/lib/modals';
import { Avatar } from '@nextui-org/avatar';
import { Button, Textarea } from '@nextui-org/react';
import React from 'react';

type Props = {
  post: Post;
};
export default function PostDisplay({ post }: Props) {
  const [reply, setReply] = React.useState('');
  const [replying, setReplying] = React.useState(false);

  const handleReplay = () => {
    console.log('reply', reply);
  };

  return (
    <article className='my-5 grid grid-cols-9 rounded-md bg-white p-5'>
      <div className='col-span-2 flex justify-center sm:col-span-1'>
        <Avatar src={post.userPhotoURL} name={post.userDisplayName} size='lg' />
      </div>
      <div className='col-span-7 sm:col-span-8'>
        <h3 className='text-sm font-bold'>{post.userDisplayName}</h3>
        <p className='mt-2'>{post.content}</p>
        <section className='mt-5'>
          <Textarea placeholder='Reply...' />
          <footer className='flex justify-end'>
            <Button
              color='default'
              className='mt-3'
              size='sm'
              onClick={handleReplay}
              isLoading={replying}
            >
              Reply
            </Button>
          </footer>
        </section>
      </div>
    </article>
  );
}
