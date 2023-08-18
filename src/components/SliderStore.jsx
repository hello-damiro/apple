import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { storeData } from '@/data/store';

const store = storeData;

export default function SliderStore({ width }) {
  const ref = useRef(null);
  const distance = width + 16;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // Determine if there amount of content to be scrolled
        setCanScrollLeft(ref.current.scrollLeft > 0);
        setCanScrollRight(ref.current.scrollLeft + ref.current.clientWidth < ref.current.scrollWidth - 1);
      }
    };

    if (ref.current) {
      handleScroll(); // Initial calculation
      ref.current.addEventListener('scroll', handleScroll);
      return () => {
        ref.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [ref.current]);

  const scroll = (offset) => {
    if (ref.current) {
      ref.current.scrollLeft += offset;
    }
  };

  return (
    <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} className='relative'>
      {/* SLIDER */}
      <div
        ref={ref}
        className='relative w-full overflow-x-auto snap-x snap-mandatory no-scrollbar bg-gray-lt scroll-smooth'
      >
        <div className='container max-w-5xl mx-auto overflow-visible'>
          <div className='flex flex-nowrap pl-6 py-6'>
            {store.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className='flex flex-col gap-3 pr-4 mr-3 items-center snap-always snap-end'
                >
                  <div className={cn(`w-[${width}px]`)}>
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
        size='icon'
        onClick={() => scroll(distance * -1)}
        className={cn(
          'absolute w-12 h-12 top-1/2 left-4 -translate-y-1/2 rounded-full p-2 bg-gray-bk/80 shadow-none transition-all duration-300 delay-300',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
          !canScrollLeft && 'opacity-0 scale-50 pointer-events-none'
        )}
      >
        <MdChevronLeft size={'24px'} color='white' />
      </Button>

      {/* BUTTON - RIGHT */}
      <Button
        size='icon'
        onClick={() => scroll(distance)}
        className={cn(
          'absolute w-12 h-12 top-1/2 right-4 -translate-y-1/2 rounded-full p-2 bg-gray-bk/50 shadow-none transition-all duration-300 delay-300',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
          !canScrollRight && 'opacity-0 scale-50 pointer-events-none'
        )}
      >
        <MdChevronRight size={'24px'} color='white' />
      </Button>
    </div>
  );
}
