import { useRef, useState, useEffect, Fragment } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function Slider({ scrollWidth, padding = 16, children, className }) {
  const ref = useRef(null);
  const distance = scrollWidth + padding;

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
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className={cn('relative', className)}
    >
      {/* SLIDER */}
      <div
        ref={ref}
        className='relative w-full overflow-x-auto snap-x snap-mandatory py-4 no-scrollbar bg-gray-lt scroll-smooth'
      >
        <div className='max-w-5xl mx-auto overflow-visible'>
          <div className='flex flex-nowrap pl-6 w-full gap-6 '>{children}</div>
        </div>
      </div>

      {/* BUTTON - LEFT */}
      <Button
        size='icon'
        onClick={() => scroll(distance * -1)}
        className={cn(
          'absolute w-12 h-12 top-1/2 left-4 -translate-y-1/2 rounded-full p-2 bg-gray-bk/30 shadow-none transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none',
          !canScrollLeft && 'opacity-0 scale-50 pointer-events-none delay-0'
        )}
      >
        <MdChevronLeft size={'24px'} color='white' />
      </Button>

      {/* BUTTON - RIGHT */}
      <Button
        size='icon'
        onClick={() => scroll(distance)}
        className={cn(
          'absolute w-12 h-12 top-1/2 right-4 -translate-y-1/2 rounded-full p-2 bg-gray-bk/30 shadow-none transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none',
          !canScrollRight && 'opacity-0 scale-50 pointer-events-none delay-0'
        )}
      >
        <MdChevronRight size={'24px'} color='white' />
      </Button>
    </div>
  );
}
