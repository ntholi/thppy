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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Link } from '@nextui-org/link';
import Logo from './Logo';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Avatar } from '@nextui-org/avatar';
import { IconLogout, IconLogout2, IconStepOut } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';

export default function AppNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const menuItems = [
    'Home',
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
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem isActive>
          <Link color='foreground' href='/'>
            Home
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
          {session ? (
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  size='sm'
                  src={session.user?.image || undefined}
                  name={session.user?.name || undefined}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Account'>
                <DropdownItem
                  key='logout'
                  onClick={() => {
                    signOut();
                  }}
                  startContent={<IconLogout2 size={20} />}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link href='/api/auth/signin'>Register</Link>
          )}
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
