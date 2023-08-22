import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { MdChevronLeft, MdChevronRight, MdPlayArrow, MdPlayCircle } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { movieData } from '@/data/movies';
import Picture from './Picture';
import useMeasure from 'react-use-measure';
import { Button } from './ui/button';

const movies = movieData;

export default function Carousel({ infinite = false }) {
  let [count, setCount] = useState(0);
  let [ref, { width }] = useMeasure();

  const handleLeftButtonClick = () => {
    if (infinite) {
      setCount((prev) => {
        return prev - 1;
      });
    } else {
      setCount((prev) => {
        return prev - 1 < 0 ? movies.length - 1 : prev - 1;
      });
    }
  };

  const handleRightButtonClick = () => {
    if (infinite) {
      setCount((prev) => {
        return prev + 1;
      });
    } else {
      setCount((prev) => {
        return prev + 1 >= movies.length ? 0 : prev + 1;
      });
    }
  };

  let animatedValue = useSpring(count);
  useEffect(() => {
    console.log(count);
    animatedValue.set(count);
  }, [animatedValue, count]);

  return (
    <div className='relative py-1 overflow-hidden'>
      {/* CAROUSEL */}
      <div
        ref={ref}
        className={cn(
          'flex mx-auto aspect-[1/2] md:aspect-[16/9] max-w-[280px] md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl'
        )}
      >
        <div className={'relative w-full'}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              motionValue={animatedValue}
              id={movie.id}
              srcImage={width > 380 ? movie.src : movie.mob}
              infinite={infinite}
              width={width}
              smBreakpoint={380}
              title={movie.title}
              genre={movie.genre}
              tagline={movie.tagline}
              alt={movie.tagline}
            />
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <button
        onClick={handleLeftButtonClick}
        className='absolute top-1/2 -translate-y-1/2 rounded-full bg-brand-black ml-3'
      >
        <MdChevronLeft className='h-10 w-10 m-2 flex text-brand-white' />
      </button>
      <button
        onClick={handleRightButtonClick}
        className='absolute top-1/2 -translate-y-1/2 right-0 rounded-full bg-brand-black mr-3'
      >
        <MdChevronRight className='h-10 w-10 m-2 flex text-brand-white' />
      </button>
    </div>
  );
}

function Movie({ srcImage, alt, id, motionValue, infinite, width, title, genre, tagline }) {
  let x = useTransform(motionValue, (latest) => {
    let length = movies.length;
    let placeValue = latest % length;
    if (infinite) {
      let offset = (length + id - placeValue) % length;
      let memo = offset * width;
      if (offset > Math.floor(length / 2)) memo -= width * length;
      return memo;
    } else {
      let offset = id - latest;
      let memo = offset * width;
      return memo;
    }
  });

  return (
    <motion.span style={{ x: x }} className={cn('absolute inset-0 flex justify-center')}>
      <div
        className={cn(
          'm-2 overflow-hidden rounded-md shadow-gray-md shadow-sm hover:shadow-lg',
          // 'scale-100 hover:scale-[1.02]',
          'transition-all duration-700',
          'relative'
        )}
      >
        <Picture src={srcImage} alt={alt} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className='absolute flex top-1/2 -translate-y-1/2 w-full h-full text-sm md:text-lg px-8 justify-start items-end text-brand-white p-6'>
        <div className='flex flex-col-reverse md:flex-row gap-3 items-center justify-center md:justify-start text-center w-full md:w-4/5 lg:w-full p-4 md:p-6 lg:p-8 xl:p-14 text-shadow'>
          <Button className='mr-0 md:mr-4 rounded-full font-semibold text-gray-bk bg-brand-white hover:bg-gray-md whitespace-nowrap'>
            Stream now <MdPlayCircle size={24} className='pl-2' />
          </Button>
          <span className='text-ccenter md:text-left leading-6 mb-2 md:mb-0'>
            <span className='font-bold'>{genre}</span>
            <br className='md:hidden' />
            <span className='hidden md:inline-block px-2'>&#183;</span>
            {tagline}
          </span>
        </div>
      </div>
    </motion.span>
  );
}
