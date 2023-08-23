import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { MdChevronLeft, MdChevronRight, MdPauseCircle, MdPlayCircle } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { movieData } from '@/data/movies';
import Picture from './Picture';
import useMeasure from 'react-use-measure';
import { Button } from './ui/button';
import TimedFunctionExecutor from './TimedFunctionExecutor';
import Link from 'next/link';

const movies = movieData;

export default function CarouselMovies({ infinite = true, dots = true }) {
  let [paused, setPaused] = useState(true);
  let [count, setCount] = useState(0);
  let [refImage, { width, height, left }] = useMeasure();

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

  const handleDotButtonClick = (index) => {
    const modulo = count % movies.length;
    if (modulo > index) {
      const offset = modulo - index;
      setCount(count - offset);
    } else {
      const offset = index - modulo;
      setCount(count + offset);
    }
  };

  let animatedValue = useSpring(count, { stiffness: 50, damping: 12, duration: 1000 });

  useEffect(() => {
    animatedValue.set(count);
  }, [animatedValue, count]);

  return (
    <div className='relative pb-4 overflow-hidden'>
      {/* CAROUSEL */}
      <div
        ref={refImage}
        className={cn(
          'flex mx-auto aspect-[1/2] md:aspect-[16/9] max-w-[280px] md:max-w-2xl lg:max-w-[1000px] 2xl:max-w-7xl'
        )}
      >
        <div className={'relative w-full'}>
          {movies.map((movie) => (
            <Link key={movie.id} href='/'>
              <Movie
                motionValue={animatedValue}
                id={movie.id}
                srcImage={width > 280 ? movie.src : movie.mob}
                infinite={infinite}
                width={width}
                smBreakpoint={380}
                title={movie.title}
                genre={movie.genre}
                tagline={movie.tagline}
                alt={movie.tagline}
                inView={((count % movies.length) + movies.length) % movies.length === movie.id}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* LEFT & RIGHT BUTTONS */}
      <button
        onClick={handleLeftButtonClick}
        className='absolute top-1/2 -translate-y-1/2 -mt-5 bg-transparent flex items-center justify-center'
        style={{ height: height, width: left - 8 }}
      >
        <MdChevronLeft className='h-10 w-10 text-brand-black md:hidden block' />
      </button>

      <button
        onClick={handleRightButtonClick}
        className='absolute top-1/2 -translate-y-1/2 -mt-5 right-0 bg-transparent flex items-center justify-center'
        style={{ height: height, width: left - 8 }}
      >
        <MdChevronRight className='h-10 w-10 text-brand-black md:hidden block' />
      </button>

      {/* DOTS */}
      {dots && (
        <div className='w-full flex justify-center pt-4 my-0 gap-4'>
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotButtonClick(index)}
              className={cn(
                'w-2 h-2 rounded-full bg-gray-rg',
                ((count % movies.length) + movies.length) % movies.length === index && 'w-6 bg-brand-black',
                'transition-all duration-300'
              )}
            />
          ))}
        </div>
      )}

      {/* AUTOPLAY */}
      <Button
        onClick={() => setPaused((prev) => !prev)}
        className={'absolute bg-brand-black p-0 m-0 w-6 h-6 rounded-full -translate-y-2/3 right-6'}
      >
        {paused ? <MdPlayCircle size={24} /> : <MdPauseCircle size={24} />}
        <TimedFunctionExecutor
          delayMs={3000}
          targetFunction={() => setCount((prev) => prev + 1)}
          isPaused={paused}
          infiniteLoop
        />
      </Button>
    </div>
  );
}

function Movie({ srcImage, alt, id, motionValue, infinite, width, genre, tagline, inView }) {
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
          'relative overflow-hidden mx-2 rounded-md shadow-gray-md',
          'opacity-30 scale-100 transition-all duration-700',
          inView && 'opacity-100'
        )}
      >
        <Picture src={srcImage} alt={alt} style={{ width: '100%', height: '100%' }} />
      </div>

      <div
        className={cn(
          'absolute flex top-1/2 -translate-y-1/2 w-full h-full justify-start items-end',
          'text-sm md:text-md lg:text-lg text-brand-white py-6 px-8'
        )}
      >
        <div
          className={cn(
            'flex flex-col-reverse md:flex-row gap-3 items-center justify-center md:justify-start',
            'w-full md:w-5/6 lg:w-full text-center text-shadow py-0 opacity-0 ',
            'px-2 md:px-2 lg:px-6 2xl:px-14 transition-all duration-700 delay-700',
            inView && 'py-2 md:py-2 lg:py-8 2xl:py-14 opacity-100'
          )}
        >
          <Button
            className={cn(
              'mr-0 md:mr-4 rounded-full font-semibold whitespace-nowrap',
              'text-gray-bk bg-brand-white hover:bg-gray-lt shadow-md'
            )}
          >
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
