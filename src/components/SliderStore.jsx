import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { storeData } from '@/data/store';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const store = storeData;

export default function SliderStore() {
  // const ref = useRef();
  const offset = 30;

  const scroll = (offset) => {
    // ref.current.scrollLeft += offset;
  };

  return (
    <div className='relative'>
      {/* SLIDER */}
      <div className='relative w-full overflow-x-auto snap-x snap-mandatory no-scrollbar bg-gray-lt'>
        <div className='container max-w-5xl mx-auto overflow-visible'>
          <div className='flex flex-nowrap pl-6 py-6'>
            {store.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className='flex flex-col gap-3 pr-4 mr-3 items-center snap-always snap-end'
                >
                  <div className='w-[120px]'>
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={0}
                      height={0}
                      className='w-full h-auto'
                      blurDataURL={item.src}
                      placeholder='blur'
                      unoptimized
                      priority
                    />
                  </div>
                  <Button variant='link' href={item.href} className='text-sm p-0'>
                    {item.title}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* BUTTON - LEFT */}
      <Button
        onClick={scroll(offset * -1)}
        className='absolute w-12 h-12 top-1/2 left-4 -translate-y-1/2 rounded-full p-2 bg-gray-bk/50 shadow-none'
        asChild
      >
        <MdChevronLeft size={'24px'} color='white' />
      </Button>

      {/* BUTTON - RIGHT */}
      <Button
        onClick={scroll(offset * 1)}
        className='absolute w-12 h-12 top-1/2 right-4 -translate-y-1/2 rounded-full p-2 bg-gray-bk/50 shadow-none'
        asChild
      >
        <MdChevronRight size={'24px'} color='white' />
      </Button>
    </div>
  );
}
