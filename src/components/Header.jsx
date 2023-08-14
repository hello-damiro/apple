import { BsApple } from 'react-icons/bs';
import { HiOutlineShoppingBag, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Hamburger from './Hamburger';

export default function Header() {
  return (
    <div className='w-full'>
      <div className='container max-w-5xl mx-auto h-12 bg-red-500/20 px-4 lg:px-6 text-xs flex justify-between items-center'>
        <BsApple size={16} />
        <div className='flex gap-5 lg:gap-6 items-center'>
          <HiOutlineMagnifyingGlass size={16} />
          <HiOutlineShoppingBag size={16} />
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
