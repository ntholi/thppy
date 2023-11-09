import React from 'react';
import NewPost from './NewPost';

export default function ForumPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='mt-24 h-60 rounded-sm bg-white p-3 shadow-md md:mx-auto md:w-[60vw]'>
        <section>
          <NewPost />
        </section>
      </main>
    </div>
  );
}
