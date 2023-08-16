'use client';

import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useNav, useNavUpdate } from '@/context/NavContext';

export default function ButtonHamburger({ theme = '' }) {
  const iconColor = theme === 'dark' ? 'bg-brand-white' : 'bg-brand-black';

  const showNav = useNav();
  const setNav = useNavUpdate();

  const handleNavClick = () => {
    const toggleNav = !showNav;
    setNav(toggleNav);
  };

  return (
    <Button size='icon' variant='bare' onClick={handleNavClick} className={cn('z-50 lg:hidden h-6 w-6')}>
      <div
        className={cn(
          iconColor,
          'absolute min-h-1 h-[1px] w-4 translate-y-[3.5px] duration-200',
          showNav && 'rotate-45 translate-y-[0px]'
        )}
      />
      <div
        className={cn(
          iconColor,
          'absolute min-h-1 h-[1px] w-4 -translate-y-[3.5px] duration-200',
          showNav && '-rotate-45 -translate-y-[0px]'
        )}
      />
    </Button>
  );
}
