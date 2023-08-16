'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useBreakpoint } from '@/context/breakpointContext';
import { useNav, useNavUpdate } from '@/context/NavContext';
import { Button } from './ui/button';
import { MdChevronLeft } from 'react-icons/md';
import { menuData } from '../data/menu';
import { twMerge as merge } from 'tailwind-merge';
import NavigationSheet from './NavigationSheet';

const data = menuData;

export default function Navigation({ theme = '' }) {
  const bgColor = theme === 'dark' ? 'bg-gray-bk' : 'bg-brand-white';
  const textColor = theme === 'dark' ? 'text-gray-md' : 'text-gray-xd';
  const hoverColor = theme === 'dark' ? 'hover:text-brand-white' : 'hover:text-brand-black';

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [submenu, setSubmenu] = useState(false);

  const showNav = useNav();
  const setNav = useNavUpdate();
  const breakpoint = useBreakpoint();

  const handleMenuClick = (id) => {
    setSelectedMenu(id);
    setSubmenu(true);
  };

  const handleMenuOver = (id) => {
    if (breakpoint === 'lg' && setNav) {
      setNav(true);
      setSelectedMenu(id);
    }
  };

  const hideNav = () => {
    setNav(false);
    setSelectedMenu(0);
    setSubmenu(false);
  };

  const handleChevron = () => {
    setSelectedMenu(0);
    setNav(true);
    setSubmenu(false);
  };

  return (
    <div className='text-xs' onMouseLeave={hideNav}>
      <Button
        size='icon'
        variant='bare'
        onClick={handleChevron}
        className={merge(
          textColor,
          bgColor,
          submenu ? 'flex' : 'hidden',
          'absolute top-0 left-2 z-50 w-12 h-12 items-center justify-center'
        )}
      >
        <MdChevronLeft size={30} />
      </Button>
      <div
        className={merge(
          showNav && !submenu ? 'absolute top-20 left-2' : 'hidden',
          'lg:relative lg:top-0 lg:left-0 lg:block z-10'
        )}
      >
        <nav className='flex flex-col lg:flex-row gap-2 lg:gap-2.5 lg:pl-7'>
          {data.map((menuItem) => (
            <Button
              key={menuItem.id}
              onClick={() => handleMenuClick(menuItem.id)}
              onMouseOver={() => handleMenuOver(menuItem.id)}
              variant='bare'
              className={merge(
                hoverColor,
                textColor,
                'px-2.5 py-1.5 w-max text-left text-2xl font-medium lg:font-light lg:text-xs border-none'
              )}
            >
              <Link href={`${breakpoint === 'lg' ? menuItem.href : ''}`}>{menuItem.title}</Link>
            </Button>
          ))}
        </nav>
      </div>
      <div
        className={merge(
          bgColor,
          !showNav && 'hidden',
          'absolute top-0 left-0 pt-14 w-full min-h-screen lg:min-h-full'
        )}
      >
        <div className='container max-w-5xl px-6 pt-8 pb-16 w-full'>
          <div className='flex flex-col gap-2'>
            <NavigationSheet id={selectedMenu} menu={data} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
