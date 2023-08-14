import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';

export default function Ribbon({ children, link }) {
  return (
    <div className='w-full py-3 bg-gray-lt flex justify-center items-center text-sm font-light'>
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
