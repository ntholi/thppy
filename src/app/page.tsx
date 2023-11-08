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
      <div className='absolute bg-sky-600/60 text-white p-8 top-24 right-10'>
        <h1 className='text-2xl'>Technology Based HIV Program for the Youth</h1>
        <p className='text-sm mt-3'>
          In time we will put the proper slogan/tagline of THPPY here
        </p>
        <div className='mt-10 flex gap-2'>
          <button className='py-2 w-44 bg-red-600/90 rounded-sm'>
            <h3>Forum</h3>
            <p className='text-xs'>Let&apos;s Converse</p>
          </button>
          <button className='py-2 w-44 bg-black/50 rounded-sm'>
            <h3>Messages</h3>
            <p className='text-xs'>Private Messages</p>
          </button>
        </div>
      </div>
      <div className='absolute -bottom-20 w-full'>
        <nav className='bg-sky-600/95 w-[45vw] mx-auto p-8 flex justify-center gap-16 text-white'>
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
    className='flex justify-center items-center flex-col group'
  >
    {React.cloneElement(icon as React.ReactElement, {
      size: '3.5rem',
      className: 'border rounded-full p-3 group-hover:bg-white/10',
    })}
    <p className='mt-1'>{label}</p>
  </Link>
);
