'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import Logo from './Logo';
import { Button } from '@nextui-org/button';
import { useState } from 'react';

export default function AppNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Home',
    "Let's Converse",
    'Boot camps',
    'Service Providers',
    'Downloads',
    'About Us',
    'Log Out',
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='xl' className='absolute'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Logo />
          <p className='font-bold text-inherit'>THPPY</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <Link color='foreground' href='#'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Let&apos;s Converse
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Boot camps
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Service Providers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Downloads
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
