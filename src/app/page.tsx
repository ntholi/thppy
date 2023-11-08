import { Button, ButtonGroup } from '@nextui-org/button';
import { IconBrandFacebook } from '@tabler/icons-react';
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
      <div className='absolute right-2 top-24 bg-sky-600/60 p-8 text-white max-md:left-2 md:right-10'>
        <h1 className='text-2xl'>Technology Based HIV Program for the Youth</h1>
        <p className='mt-3 text-sm'>
          In time we will put the proper slogan/tagline of THPPY here
        </p>
        <div className='mt-10 flex justify-center gap-2 md:justify-start'>
          <button className='w-44 rounded-sm bg-red-600/90 py-2'>
            <h3>Forum</h3>
            <p className='text-xs'>Let&apos;s Converse</p>
          </button>
          <button className='w-44 rounded-sm bg-black/50 py-2'>
            <h3>Messages</h3>
            <p className='text-xs'>Private Messages</p>
          </button>
        </div>
      </div>
      <div className='absolute -bottom-20 w-full'>
        <nav className='mx-auto flex justify-center gap-16 bg-sky-600/95 p-8 text-white lg:w-[45vw]'>
          <SocialLink
            icon={<IconBrandFacebook />}
            href='https://www.facebook.com/THEREALTHPPY'
            label='Facebook'
          />
          <SocialLink
            icon={<IconBrandInstagram />}
            href='https://www.instagram.com/therealthppy'
            label='Twitter'
          />
          <SocialLink
            icon={<IconBrandTwitter />}
            href='https://twitter.com/therealthppy'
            label='Instagram'
          />
          <SocialLink
            icon={<IconBrandYoutube />}
            href='https://www.youtube.com/channel/UCDmUEN0IH_3ZA1xAP95HrCw'
            label='Youtube'
          />
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
  <Link
    href={href}
    target='_blank'
    className='group flex flex-col items-center justify-center'
  >
    {React.cloneElement(icon as React.ReactElement, {
      size: '3.5rem',
      className: 'border rounded-full p-3 group-hover:bg-white/10',
    })}
    <p className='mt-1'>{label}</p>
  </Link>
);
