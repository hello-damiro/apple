'use client';

import classNames from 'classnames';
import ButtonHamburger from './ButtonHamburger';
import ButtonBag from './ButtonBag';
import Navigation from './Navigation';
import { BsApple } from 'react-icons/bs';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useBreakpoint } from '@/context/breakpointContext';
import { useThemeUpdate } from '@/context/ThemeContext';
import { useNav } from '@/context/NavContext';
import { useEffect } from 'react';

export default function Header({ theme = '', stickyHead = false, paddedTop = true }) {
  const showNav = useNav();
  const breakpoint = useBreakpoint();
  const setTheme = useThemeUpdate();

  const bgColor = theme === 'dark' ? 'bg-gray-bk' : 'bg-gray-lt';
  const bgColor80 = theme === 'dark' ? 'bg-brand-black/80' : 'bg-gray-lt/80';
  const bgColor30 = theme === 'dark' ? 'bg-gray-bk/30' : 'bg-gray-lt/30';
  const textColor = theme === 'dark' ? 'text-gray-lt' : 'text-gray-bk';
  const setStickyHead = stickyHead ? 'fixed' : 'relative -mb-12';

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <header>
      <div
        className={classNames(
          bgColor80,
          setStickyHead,
          'z-30 w-full backdrop-blur-md',
          `${showNav && breakpoint !== 'lg' ? 'relative' : 'fixed'}`
        )}
      >
        <div className='container max-w-5xl w-full h-12 px-6 flex flex-row gap-5 items-center justify-between'>
          <div className={classNames(textColor, 'lg:z-30')}>
            <BsApple size={16} />
          </div>
          <Navigation theme={theme} />
          <div className='flex flex-row gap-5 items-center lg:z-30'>
            <div className={textColor}>
              <HiOutlineMagnifyingGlass size={16} />
            </div>
            <ButtonBag count={3} theme={theme} />
            <ButtonHamburger theme={theme} />
          </div>
        </div>
      </div>
      {/* BLUR BACKGROUND */}
      <div
        className={classNames(
          bgColor30,
          `${!showNav && 'hidden'}`,
          'fixed z-10 top-0 min-h-screen w-full backdrop-blur-md'
        )}
      />
      <div className={classNames('relative h-12 w-full', bgColor)} />
    </header>
  );
}
