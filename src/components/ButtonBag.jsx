import { twMerge as merge } from 'tailwind-merge';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Button } from './ui/button';

export default function ButtonBag({ theme = '', count = 0 }) {
  return (
    <Button size='icon' variant='bare' className='-z-[1]'>
      {/* ICON */}
      <div className={merge('relative text-brand-black', theme === 'dark' && 'text-brand-white')}>
        <HiOutlineShoppingBag size={16} />
      </div>

      {/* COUNT */}
      <div
        className={merge(
          'absolute w-4 h-4 rounded-full flex items-center justify-center mt-4 ml-2.5 text-[0.5rem] bg-brand-black text-brand-white',
          theme === 'dark' && 'bg-brand-white',
          theme === 'dark' && 'text-brand-black',
          (typeof count !== 'number' || count === 0) && 'hidden'
        )}
      >
        {count}
      </div>
    </Button>
  );
}
