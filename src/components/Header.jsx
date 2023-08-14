import { BsApple } from 'react-icons/bs';
import { HiOutlineShoppingBag, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import ButtonHamburger from './ButtonHamburger';
import ButtonBag from './ButtonBag';

export default function Header({ theme }) {
  const textColor = theme === 'dark' ? 'text-brand-black' : 'text-brand-white';
  const bgColor = theme === 'dark' ? 'bg-brand-white' : 'bg-brand-black';

  return (
    <header className='w-full'>
      <div className='container max-w-5xl mx-auto h-12 bg-red-500/20 px-4 lg:px-6 text-xs flex justify-between items-center'>
        <BsApple size={16} />
        <div className='flex gap-5 lg:gap-6 items-center'>
          <HiOutlineMagnifyingGlass size={16} />
          <ButtonBag count='2' />
          <ButtonHamburger theme='dark' />
        </div>
      </div>
    </header>
  );
}
