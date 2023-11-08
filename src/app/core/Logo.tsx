'use client';
import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      className='h-8 w-auto sm:h-10'
      width={60}
      height={60}
      src='/images/logo.png'
      alt='Logo'
    />
  );
}
