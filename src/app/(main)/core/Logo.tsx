'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/' className='flex items-center'>
      <Image
        className='h-8 w-auto sm:h-10'
        width={60}
        height={60}
        src='/images/logo.png'
        alt='Logo'
      />
      <p className='font-bold text-inherit'>THPPY</p>
    </Link>
  );
}
