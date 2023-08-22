import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import usePrevious from '@/lib/usePrevious';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { movieData } from '@/data/movies';
import Picture from './Picture';

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
    <div className='relative overflow-hidden'>
      <div ref={ref} className='relative mx-auto w-full h-full py-4 no-scrollbar'>
        <div className='flex flex-nowrap pl-6 w-full h-auto justify-center'>
          {/* CARDS */}
          {moviesInRange.map((movie) => (
            <div key={movie.id} className='scale-100 hover:scale-[1.02] transition-all duration-700 pr-6'>
              <div
                className={cn(
                  'overflow-hidden rounded-2xl shadow-gray-md shadow-sm hover:shadow-lg transition-all duration-700',
                  'bg-red-200 w-[400px] aspect-[16/9]' // Card dimensions
                )}
              >
                <Picture src={movie.src} alt={movie.title} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className='absolute w-full h-auto flex justify-between px-6 top-1/2 -translate-y-1/2 p-2'>
        <button onClick={handleLeftButtonClick} className=' rounded-full bg-brand-black'>
          <MdChevronLeft className='h-10 w-10 m-2 flex text-brand-white' />
        </button>
        <button onClick={handleRightButtonClick} className='rounded-full bg-brand-black'>
          <MdChevronRight className='h-10 w-10 m-2 flex text-brand-white' />
        </button>
      </div>
    </div>
  );
}
