'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './ui/button';
import ButtonHamburger from './ButtonHamburger';
import ButtonBag from './ButtonBag';
import Navigation from './Navigation';
import { BsApple } from 'react-icons/bs';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useBreakpoint } from '@/context/breakpointContext';
import { useStickyhead } from '@/context/StickyheadContext';
import { useTheme } from '@/context/ThemeContext';
import { useNav } from '@/context/NavContext';

export default function Header({ paddedTop = true }) {
  const showNav = useNav();
  const breakpoint = useBreakpoint();
  const theme = useTheme();
  const stickyHead = useStickyhead();

  const bgColor = theme === 'dark' ? 'bg-brand-black' : 'bg-brand-white';
  const bgColor80 = theme === 'dark' ? 'bg-brand-black/80' : 'bg-gray-lt/80';
  const bgColor30 = theme === 'dark' ? 'bg-gray-bk/30' : 'bg-gray-lt/30';
  const textColor = theme === 'dark' ? 'text-gray-lt' : 'text-gray-bk';

  const preText = ''; // 'Education Store Home | Exit';

  return (
    <header>
      <div
        className={cn(
          bgColor80,
          showNav && breakpoint !== 'lg' ? 'relative' : stickyHead ? 'fixed' : 'relative -mb-12',
          'z-30 w-full backdrop-blur-md'
        )}
      >
        {/* PRE HEADER */}
        <div
          className={cn('z-50 w-full bg-brand-gray/5 font-light', (preText === '' || breakpoint !== 'lg') && 'hidden')}
        >
          <div className='container max-w-5xl mx-auto px-6 py-3 text-xs'>{preText}</div>
        </div>

        {/* MAIN HEADER */}
        <div className='container max-w-5xl w-full h-12 px-6 flex flex-row gap-5 items-center justify-between'>
          <Button size='icon' variant='bare' href='/' className={cn(textColor, 'lg:z-30 -ml-1.5')} asChild>
            <Link href='/'>
              <BsApple size={16} />
            </Link>
          </Button>
          <Navigation theme={theme} />
          <div className='flex flex-row space-x-4 items-center lg:z-30'>
            <Button size='icon' variant='bare' className={cn(textColor)} asChild>
              <HiOutlineMagnifyingGlass size={16} />
            </Button>
            <ButtonBag count={3} theme={theme} />
            <ButtonHamburger theme={theme} />
          </div>
        </div>
      </div>

      {/* BLUR BACKGROUND */}
      <div className={cn(bgColor30, !showNav && 'hidden', 'fixed z-10 top-0 min-h-screen w-full backdrop-blur-lg')} />
      {/* EXTRA PADDING TOP */}
      <div className={cn('relative h-12 w-full', bgColor)} />
    </header>
  );
}
