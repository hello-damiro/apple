import classNames from 'classnames';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function ButtonBag({ theme = '', count = 0 }) {
  const textColor = theme === '' ? 'text-brand-white' : 'text-brand-blck';
  const iconColor = theme === '' ? 'text-brand-black' : 'text-brand-white';
  const bgColor = theme === '' ? 'bg-brand-black' : 'bg-brand-white';
  return (
    <div>
      <div className={classNames('relative', iconColor)}>
        <HiOutlineShoppingBag size={16} />
      </div>
      <div
        className={classNames(
          `${(count == '' || count == 0) && 'hidden'}`,
          'absolute w-4 aspect-square rounded-full text-xxs flex items-center justify-center',
          '-mt-2 ml-1 font-light',
          textColor,
          bgColor
        )}
      >
        {count}
      </div>
    </div>
  );
}
