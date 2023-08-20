import { cn } from '@/lib/utils';
import { movieData } from '@/data/movies';

const movies = movieData;

export default function Carousel() {
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className=''>
          <div className='w-42 h-32'>{movie.title}</div>
        </div>
      ))}
    </div>
  );
}
