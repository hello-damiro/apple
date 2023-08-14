import classNames from 'classnames';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';

export default function Ribbon({ children, link, theme }) {
  const textColor = theme === 'dark' ? 'text-brand-white' : 'text-brand-black';
  const bgColor = theme === 'dark' ? 'bg-gray-bk' : 'bg-brand-white';

  return (
    <div className={classNames('w-full py-3 flex justify-center items-center text-sm font-light', textColor, bgColor)}>
      <div className='px-4 text-center'>
        {children}
        <Link href={'/iphone'} className='text-brand-blue pl-2 inline-block'>
          <div className='flex items-center'>
            {link}
            <MdChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
