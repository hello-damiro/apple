'use client';

import classNames from 'classnames';
import { useNav, useNavUpdate } from '@/context/NavContext';

export default function Hamburger({ color = 'bg-foreground' }) {
  const showNav = useNav();
  const setNav = useNavUpdate();

  const handleNavClick = () => {
    if (setNav) {
      const toggleNav = !showNav;
      setNav(toggleNav);
    }
  };

  return (
    <div className='z-50 lg:hidden h-12 lg:h-11 w-4 lg:w-4 cursor-pointer' onClick={handleNavClick}>
      <div
        className={classNames(
          color,
          'relative min-h-1 h-[1.5px] w-full mt-5 transiton duration-200',
          `${showNav && 'rotate-45 translate-y-[3.5px]'}`
        )}
      />
      <div
        className={classNames(
          color,
          'relative min-h-1 h-[1.5px] w-full mt-1.5 transiton duration-200',
          `${showNav && '-rotate-45 -translate-y-1'}`
        )}
      />
    </div>
  );
}
