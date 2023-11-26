import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Input } from '@nextui-org/react';
import { getServerSession } from 'next-auth';
import React from 'react';
import Form from './Form';

export default async function Register() {
  const session = await getServerSession(authOptions);
  return (
    <main className='mx-auto pt-16 md:w-[60vw]'>
      <header className='mt-8 text-center'>
        <h1 className='mt-5 text-3xl'>Welcome {session?.user?.name}</h1>
        <p className='text-gray-500'>
          We need to know a little more about you before you can start using
          this platform.
        </p>
        <section className='mt-11 grid grid-cols-12'>
          <aside className='col-span-6 hidden md:block'>
            <img src='/images/user.svg' alt='User' />
          </aside>
          <article className='col-span-6 mt-7'>
            <Form user={session?.user} />
          </article>
        </section>
      </header>
    </main>
  );
}
