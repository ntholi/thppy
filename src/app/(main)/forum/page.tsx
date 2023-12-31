import React from 'react';
import NewPost from './NewPost';
import PostList from './PostList';

export default function ForumPage() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <main className='h-60 rounded-sm pt-16  md:mx-auto md:w-[60vw]'>
        <section className='pt-5'>
          <NewPost />
        </section>
        <section>
          <PostList />
        </section>
      </main>
    </div>
  );
}
