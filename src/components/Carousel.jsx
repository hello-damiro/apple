import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import usePrevious from '@/lib/usePrevious';
import AdaptiveImage from '@/lib/adaptiveImage';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { movieData } from '@/data/movies';

const movies = movieData;

export default function Carousel() {
  const width = 400;
  let [ref] = useMeasure();
  let [count, setCount] = useState(0);
  let prev = usePrevious(count);
  let direction = count > prev ? 1 : -1;

  let variants = {
    enter: ({ direction, width }) => ({ x: direction * width }),
    center: { x: 0, transition: { type: 'spring', stiffness: 30, duration: 0.4 } },
    exit: ({ direction, width }) => ({
      x: direction * -width,
      transition: { type: 'spring', stiffness: 30, duration: 0.4 },
    }),
  };

  const handleLeftButtonClick = () => {
    setCount(count - 1 < 0 ? movies.length - 1 : count - 1);
  };

  const handleRightButtonClick = () => {
    setCount(count + 1 >= movies.length ? 0 : count + 1);
  };

  const getMoviesInRange = () => {
    const range = 2;
    const totalMovies = movies.length;
    const startIndex = (count - range + totalMovies) % totalMovies;
    const endIndex = (count + range + totalMovies) % totalMovies;

    const idsInRange = [];

    if (endIndex >= startIndex) {
      for (let i = startIndex; i <= endIndex; i++) idsInRange.push(i);
    } else {
      for (let i = startIndex; i < totalMovies; i++) idsInRange.push(i);
      for (let i = 0; i <= endIndex; i++) idsInRange.push(i);
    }

    const moviesInRange = idsInRange.map((id) => movies[id]);

    return moviesInRange;
  };

  const moviesInRange = getMoviesInRange();

  return (
    <div className='relative w-full min-h-10 overflow-hidden'>
      <div className='relative w-full h-auto'>
        <div ref={ref} className='relative flex w-full h-full '>
          <div className='flex flex-row gap-6 w-full h-full items-center justify-between bg-green-300 px-6 text-3xl font-bold'>
            {moviesInRange.map((movie) => (
              <div
                key={movie.id}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                custom={{ direction, width }}
              >
                <div className='w-full h-full bg-red-300 flex justify-center items-center'>{movie.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='absolute w-full flex justify-between px-4 h-full top-1/2 -translate-y-1/2 p-2'>
        <button onClick={handleLeftButtonClick} className='rounded-full bg-brand-black'>
          <MdChevronLeft className='h-10 w-10 m-2 flex text-brand-white' />
        </button>
        <button onClick={handleRightButtonClick} className='rounded-full bg-brand-black'>
          <MdChevronRight className='h-10 w-10 m-2 flex text-brand-white' />
        </button>
      </div>
    </div>
  );
}
