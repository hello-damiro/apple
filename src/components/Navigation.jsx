'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useBreakpoint } from '@/context/breakpointContext';
import { useNav, useNavUpdate } from '@/context/NavContext';
import { Button } from './ui/button';
import { MdChevronLeft } from 'react-icons/md';
import { menuData } from '../data/menu';
import classNames from 'classnames';
import NavigationSheet from './NavigationSheet';

const data = menuData;

export default function Navigation({ theme = '' }) {
  const bgColor = theme === 'dark' ? 'bg-gray-bk' : 'bg-brand-white';
  const textColor = theme === 'dark' ? 'text-gray-lt' : 'text-gray-xd';
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
    if (setNav) {
      setNav(false);
      setSelectedMenu(0);
      setSubmenu(false);
    }
  };

  const handleChevron = () => {
    if (setNav) {
      setSelectedMenu(0);
      setNav(true);
      setSubmenu(false);
    }
  };

  return (
    <div className='text-xs' onMouseLeave={hideNav}>
      <div
        onClick={handleChevron}
        className={classNames(
          textColor,
          bgColor,
          `${showNav && submenu ? 'block' : 'hidden'}`,
          'absolute top-0 left-1 z-50 w-12 h-12 items-center flex justify-center cursor-pointer'
        )}
      >
        <MdChevronLeft size='30px' />
      </div>
      <div
        className={classNames(
          `${showNav && !submenu ? 'absolute top-20 left-2' : 'hidden'}`,
          'lg:relative lg:top-0 lg:left-0 lg:block z-10'
        )}
      >
        <div className={classNames('flex flex-col lg:flex-row gap-2 lg:gap-2.5')}>
          {data.map((menuItem) => (
            <Button
              key={menuItem.id}
              onClick={() => handleMenuClick(menuItem.id)}
              onMouseOver={() => handleMenuOver(menuItem.id)}
              className={classNames(
                hoverColor,
                textColor,
                'px-2.5 py-1.5 w-max text-left text-2xl font-medium lg:font-light lg:text-xs border-none shadow-none bg-transparent hover:bg-transparent'
              )}
            >
              <Link href={`${breakpoint === 'lg' ? menuItem.href : ''}`}>{menuItem.title}</Link>
            </Button>
          ))}
        </div>
      </div>
      <div
        className={classNames(
          `${!showNav && 'hidden'}`,
          'absolute top-0 left-0 pt-14 w-full min-h-screen lg:min-h-full',
          bgColor
        )}
      >
        <div className='container max-w-5xl px-4 pl-5 pt-8 pb-16 w-full'>
          <div className='flex flex-col gap-2'>
            <NavigationSheet id={selectedMenu} menu={data} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
