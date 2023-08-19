import Card from '@/components/Card';
import { H3 } from '@/components/Texts';

export default function SliderMusic({ width }) {
  return (
    <>
      <Card width={400} src='/images/store-special/ipad-card-40-education-202108.jpeg' alt='Some title 5' href='/'>
        <span className='uppercase text-xs leading-widest'>EDUCATION</span>
        <H3>
          Save on Mac or iPad with education pricing.<sup className='text-xs'>1</sup>
        </H3>
      </Card>
    </>
  );
}
