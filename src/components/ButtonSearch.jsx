import { cn } from '@/lib/utils';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { Button } from './ui/button';

export default function ButtonSearch({ theme = '', count = 0 }) {
  return (
    <Button size='icon' variant='bare' className='-z-[1]'>
      {/* ICON */}
      <div className={cn('relative text-brand-black', theme === 'dark' && 'text-brand-white')}>
        <HiOutlineMagnifyingGlass size={16} />
      </div>
    </Button>
  );
}
