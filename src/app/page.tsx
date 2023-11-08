import { Button, ButtonGroup } from '@nextui-org/button';
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className='relative'>
      <Image
        src='/images/happy-teen-unsplash.jpg'
        alt='THPPY'
        className='h-[75vh] w-full object-cover'
        width={1500}
        height={1500}
      />
      <div className='absolute bg-sky-600/60 text-white p-8 top-32 right-10'>
        <h1 className='text-2xl'>Technology Based HIV Program for the Youth</h1>
        <p className='text-sm mt-3'>
          In time we will put the proper slogan/tagline of THPPY here
        </p>
      </div>
      <div className='absolute -bottom-20 w-full'>
        <nav className='bg-sky-600/95 w-[45vw] mx-auto p-8 flex justify-center gap-16 text-white'>
          <SocialLink
            icon={<IconBrandFacebookFilled />}
            href='#'
            label='Facebook'
          />
          <SocialLink icon={<IconBrandInstagram />} href='#' label='Twitter' />
          <SocialLink icon={<IconBrandTwitter />} href='#' label='Instagram' />
          <SocialLink icon={<IconBrandYoutube />} href='#' label='Youtube' />
        </nav>
      </div>
    </main>
  );
}

const SocialLink = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <Link href={href} className='flex justify-center items-center flex-col'>
    {React.cloneElement(icon as React.ReactElement, {
      size: '3.5rem',
      className: 'border rounded-full p-3',
    })}
    <p className='mt-1'>{label}</p>
  </Link>
);
