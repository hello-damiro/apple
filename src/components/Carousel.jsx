import { cn } from '@/lib/utils';
import { movieData } from '@/data/movies';
import Slider from './Slider';
import Card from './Card';

const movies = movieData;

export default function Carousel() {
  console.log(movies);
  return (
    <Slider>
      {movies.map((movie) => (
        <Card width={400} src={movie.src} alt={movie.title} href='/' dark textClassName={'justify-start items-end'}>
          {movie.title}
        </Card>
      ))}
    </Slider>
  );
}
