import { twMerge as merge } from 'tailwind-merge';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function ButtonBag({ theme = '', count = 0 }) {
  const textColor = theme === 'dark' ? 'text-brand-black' : 'text-brand-white';
  const iconColor = theme === 'dark' ? 'text-brand-white' : 'text-brand-black';
  const bgColor = theme === 'dark' ? 'bg-brand-white' : 'bg-brand-black';

  return (
    <div className='z-[-1]'>
      {/* ICON */}
      <div className={merge('relative', iconColor)}>
        <HiOutlineShoppingBag size={16} />
      </div>

      {/* COUNT */}
      <div
        className={merge(
          bgColor,
          textColor,
          (count == '' || count == 0) && 'hidden',
          'absolute w-4 aspect-square rounded-full text-xxs flex items-center justify-center -mt-2 ml-1.5'
        )}
      >
        {count}
      </div>
    </div>
  );
}
