import { Post } from '@/lib/modals';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import React from 'react';

type Props = {
  post: Post;
};
export default function PostDisplay({ post }: Props) {
  return (
    <div className='my-5 grid grid-cols-12 bg-white p-3'>
      <div className='col-span-2'>x</div>
      <div className='col-span-10'>{post.content}</div>
    </div>
  );
}
