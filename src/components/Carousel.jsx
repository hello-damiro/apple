import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import usePrevious from '@/lib/usePrevious';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { movieData } from '@/data/movies';
import Picture from './Picture';

const movies = movieData;
const movieWidth = 400;
const twWidth = 'w-[400px]';

export default function Carousel() {
  let [count, setCount] = useState(0);
  let prev = usePrevious(count);

  const handleLeftButtonClick = () => {
    setCount(count - 1 < 0 ? movies.length - 1 : count - 1);
    console.log(count);
  };

  const handleRightButtonClick = () => {
    setCount(count + 1 >= movies.length ? 0 : count + 1);
    console.log(count);
  };

  function rearrangeMovies(movies) {
    const middleIndex = Math.floor(movies.length / 2);
    const newArray = [];

    for (let i = middleIndex + 1; i < movies.length; i++) newArray.push(movies[i]); // Add movies after the middleIndex to the new array
    newArray.push(movies[0]); // Add movie[0] at middleIndex to the new array
    for (let i = 1; i <= middleIndex; i++) newArray.push(movies[i]); // Add movies before the middleIndex to the new array

    return newArray;
  }

  return (
    <div className='relative py-4 overflow-hidden'>
      {/* CAROUSEL */}
      <div className={cn('flex mx-auto aspect-video', twWidth)}>
        <div className={'relative w-full'}>
          {movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} src={movie.src} title={movie.title} />
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <button
        onClick={handleLeftButtonClick}
        className='absolute top-1/2 -translate-y-1/2 rounded-full bg-brand-black ml-6'
      >
        <MdChevronLeft className='h-10 w-10 m-2 flex text-brand-white' />
      </button>
      <button
        onClick={handleRightButtonClick}
        className='absolute top-1/2 -translate-y-1/2 right-0 rounded-full bg-brand-black mr-6'
      >
        <MdChevronRight className='h-10 w-10 m-2 flex text-brand-white' />
      </button>
    </div>
  );
}

function Movie({ src, title, id }) {
  return (
    <motion.span
      style={{ x: movieWidth * id }}
      className={cn(
        'absolute inset-0 flex justify-center',
        'scale-100 hover:scale-[1.02] transition-all duration-700',
        'overflow-hidden rounded-2xl shadow-gray-md shadow-sm hover:shadow-lg transition-all duration-700'
      )}
    >
      <Picture src={src} alt={title} style={{ width: '100%', height: '100%' }} />
    </motion.span>
  );
}
