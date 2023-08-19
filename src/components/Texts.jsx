import { BsApple } from 'react-icons/bs';
import { MdChevronRight, MdOutlineNorthEast } from 'react-icons/md';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function HeroTitle({ children, text }) {
  return (
    <h2 className='text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-semibold'>
      {text}
      {children}
    </h2>
  );
}

export function PromoTitle({ children, text, logo = false }) {
  return (
    <h2 className='text-3xl md:text-[2rem] font-semibold flex items-baseline gap-2'>
      <BsApple size={24} className={`${!logo && 'hidden'}`} />
      {text}
      {children}
    </h2>
  );
}

export function PreText({ children, text }) {
  return (
    <h3 className='text-sm md:text-base text-accent'>
      {text}
      {children}
    </h3>
  );
}

export function HeroSubText({ children, text }) {
  return (
    <h3 className='text-lg md:text-[1.4rem] lg:text-[1.6rem]'>
      {text}
      {children}
    </h3>
  );
}

export function PromoSubText({ children, text }) {
  return (
    <h3 className='text-lg md:text-[1rem] lg:text-[1.2rem]'>
      {text}
      {children}
    </h3>
  );
}

export function MoreText({ children, text }) {
  return (
    <h4 className='text-base text-gray-400'>
      {text}
      {children}
    </h4>
  );
}

export function LinkText({ text, icon = '' }) {
  return (
    <Button variant={'link'} className='text-md md:text-lg font-light text-accent'>
      {text}
      {icon === '' ? (
        <div className='-mr-2'>
          <MdChevronRight size={18} />
        </div>
      ) : (
        <div className='ml-0.5 -mr-1'>
          <MdOutlineNorthEast size={14} />
        </div>
      )}
    </Button>
  );
}

export function PillText({ href = '/', text, children }) {
  return (
    <Button
      href={href}
      className='bg-gray-md hover:bg-gray-dk text-gray-bk hover:text-gray-lt font-light rounded-full whitespace-nowrap shadow-none transition-all duration-300'
    >
      {text}
      {children}
    </Button>
  );
}

export function H3({ children, text, className }) {
  return (
    <h3 className={cn('text-xl md:text-2xl font-semibold leading-tight tracking-tight', className)}>
      {text}
      {children}
    </h3>
  );
}
