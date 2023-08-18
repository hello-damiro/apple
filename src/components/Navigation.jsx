import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '@/context/breakpointContext';
import { useNav, useNavUpdate } from '@/context/NavContext';
import { Button } from './ui/button';
import { MdChevronLeft } from 'react-icons/md';
import { menuData } from '../data/menu';
import { cn } from '@/lib/utils';

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
    if (setNav && breakpoint === 'lg') {
      setNav(true);
      setSelectedMenu(id);
    }
  };

  const handleMenuOut = () => {
    setNav(false);
    setSelectedMenu(0);
    setSubmenu(false);
  };

  const handleChevron = () => {
    setSelectedMenu(0);
    setNav(true);
    setSubmenu(false);
  };

  const animation = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.1 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.1 } },
  };

  return (
    <div className='text-xs' onMouseLeave={handleMenuOut}>
      {/* BACK BUTTON */}
      <AnimatePresence mode='wait'>
        <motion.button
          key={submenu}
          variants={animation}
          initial='initial'
          animate='animate'
          exit='exit'
          size='icon'
          onClick={handleChevron}
          className={cn(
            textColor,
            bgColor,
            submenu ? 'flex' : 'hidden',
            'absolute top-0 left-2 z-50 w-12 h-12 items-center justify-center bg-transparent'
          )}
        >
          <MdChevronLeft size={30} />
        </motion.button>
      </AnimatePresence>

      {/* MAIN MENU */}
      <nav
        className={cn(
          showNav && !submenu ? 'absolute top-20 left-2' : 'hidden',
          'lg:relative lg:top-0 lg:left-0 lg:block z-10'
        )}
      >
        <ul className='flex flex-col lg:flex-row gap-2 lg:gap-2.5 lg:pl-7'>
          {data.map((menuItem) => (
            <li key={menuItem.id}>
              {breakpoint === 'lg' ? (
                <Link
                  href={menuItem.href}
                  onMouseOver={() => handleMenuOver(menuItem.id)}
                  onClick={handleMenuOut}
                  className={cn(
                    hoverColor,
                    textColor,
                    'px-2.5 py-1.5 w-max text-left text-2xl font-medium lg:font-light lg:text-xs'
                  )}
                >
                  {menuItem.title}
                </Link>
              ) : (
                <Button
                  variant='bare'
                  onClick={() => breakpoint !== 'lg' && handleMenuClick(menuItem.id)}
                  className={cn(
                    hoverColor,
                    textColor,
                    'px-2.5 py-1.5 w-max text-left text-2xl font-medium lg:font-light lg:text-xs'
                  )}
                >
                  {menuItem.title}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* SUB MENU */}
      <div className={cn('absolute top-0 left-0 w-full', bgColor, breakpoint !== 'lg' && showNav && 'min-h-screen')}>
        <div className={cn('container max-w-5xl w-full')}>
          {data.map(
            (menuItem) =>
              menuItem.id === selectedMenu && (
                // TODO: EXIt ANIMATION
                <motion.div key={menuItem.id} variants={animation} initial='initial' animate='animate' exit='exit'>
                  <NavigationSheet id={menuItem.id} menu={data} theme={theme} />
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

function NavigationSheet({ id, menu, theme = '' }) {
  const textColor = theme === 'dark' ? 'text-gray-md' : 'text-gray-xd';
  const hoverColor = theme === 'dark' ? 'hover:text-background' : 'hover:text-foreground';

  const selectedMenu = menu.find((menuItem) => menuItem.id === id);
  if (!selectedMenu) return null;

  return (
    <nav className={cn('flex flex-col lg:flex-row gap-12 px-6 pt-20 pb-16', textColor)}>
      {selectedMenu.content.map((section, index) => (
        <div key={index}>
          <h4 className='pb-4 font-light text-gray-rg'>{section.name}</h4>
          <div className={cn('flex flex-col', index === 0 ? 'pr-16  space-y-2' : 'pr-0 space-y-2')}>
            {section.collection.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href}
                className={cn(hoverColor, index === 0 ? 'font-medium text-2xl' : 'font-semibold text-xs')}
              >
                {item.link}
              </Link>
            ))}
          </div>
          {section.morelink1 !== undefined && <h4 className='font-semibold pt-6'>{section.morelink1}</h4>}
          {section.morelink2 !== undefined && <h4 className='font-semibold pt-2'>{section.morelink2}</h4>}
        </div>
      ))}
    </nav>
  );
}
