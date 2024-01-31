'use client';
import React, { useState } from 'react';
import Logo from '@/public/logo.png';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const [DropDown, setDropDown] = useState(false);
  const { data: session, status } = useSession();
  console.log('Session', session);

  return (
    <div className='p-3 border-b bg-gray-100 dark:bg-slate-900'>
      <div className='flex flex-row justify-between items-center'>
        <div className=''>
          <img className='object-cover h-8 w-25' src={Logo.src} />
        </div>
        <div className='ml-auto w-1/2'>
          <form>
            <label
              htmlFor='default-search'
              className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
            >
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block focus-visible:outline-none  w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:bg-slate-900 dark:focus:border-slate-900'
                placeholder='Type to search...'
                required
              />
            </div>
          </form>
        </div>

        <div className='ml-auto flex items-center space-x-4'>
          <ThemeToggle />
          <div>
            <button
              onClick={() => {
                setDropDown(!DropDown);
              }}
            >
              <Avatar>
                <AvatarImage src='https://flowbite.com/docs/images/people/profile-picture-5.jpg' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
            <div
              id='userDropdown'
              className={cn(
                'z-10 absolute right-2 top-16  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-slate-800 dark:divide-gray-600',
                DropDown ? 'block' : 'hidden'
              )}
            >
              <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
                <div>{session?.user?.name}</div>
                <div className='font-medium truncate'>
                  {' '}
                  {session?.user?.email}{' '}
                </div>
              </div>
              <ul
                className='py-2 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='avatarButton'
              >
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div className='py-1'>
                <a
                  onClick={() => signOut()}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
