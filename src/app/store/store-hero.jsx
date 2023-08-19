import { Button } from '@/components/ui/button';
import { MdChevronRight } from 'react-icons/md';

export default function StoreHero() {
  return (
    <>
      <h1 className='text-4xl md:text-[2.8rem] font-semibold tracking-tight leading-tight max-w-3xl'>
        Store.{' '}
        <span className='text-gray-dk'>
          The best way to buy <br className='hidden sm:block' />
          the products you love.
        </span>
      </h1>
      <div className='pl-1 flex flex-col sm:flex-row lg:flex-col gap-16 lg:gap-0 items-left pt-2'>
        <div className='text-sm flex items-center gap-3'>
          <div className='w-9 h-9 rounded-full bg-gray-500'></div>
          <div className='pt-2'>
            <p>Need shopping help?</p>
            <Button variant='link' href={'/'} className='text-brand-blue p-0 -mt-1'>
              Ask a Specialist <MdChevronRight />
            </Button>
          </div>
        </div>
        <div className='text-sm flex items-center gap-3'>
          <div className='w-9 h-9 rounded-full bg-gray-500'></div>
          <div className='pt-2'>
            <p>Visit an Apple Store</p>
            <Button variant='link' href={'/'} className='text-brand-blue p-0 -mt-1'>
              Find one near you <MdChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
