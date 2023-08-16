'use client';

import { twMerge as merge } from 'tailwind-merge';
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
    <div onClick={handleNavClick} className={merge('z-50 lg:hidden h-12 lg:h-11 w-4 lg:w-4 cursor-pointer')}>
      <div
        className={merge(
          iconColor,
          showNav && 'rotate-45 translate-y-[3.5px]',
          'relative min-h-1 h-[1.5px] w-full mt-5 duration-200'
        )}
      />
      <div
        className={merge(
          iconColor,
          showNav && '-rotate-45 -translate-y-1',
          'relative min-h-1 h-[1.5px] w-full mt-1.5 duration-200'
        )}
      />
    </div>
  );
}
