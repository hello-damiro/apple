import Card from '@/components/Card';
import { H3 } from '@/components/Texts';

export default function SliderSpecial({ width }) {
  return (
    <>
      <Card width={width} src='/images/store-special/ipad-card-40-education-202108.jpeg' alt='Some title 5' href='/'>
        <span className='uppercase text-xs leading-widest'>EDUCATION</span>
        <H3>
          Save on Mac or iPad with education pricing.<sup className='text-xs'>1</sup>
        </H3>
      </Card>

      <Card width={width} src='/images/store-special/ipad-card-40-veteran-202210.jpeg' alt='Some title 5' href='/'>
        <span className='uppercase text-xs leading-widest'>VETERANS AND MILITARY</span>
        <H3>
          Active and veteran members may be eligible for excusive savings.<sup className='text-xs'>1</sup>
        </H3>
      </Card>

      <Card width={width} src='/images/store-special/store-card-40-business.jpeg' alt='Some title 5' href='/' dark>
        <span className='uppercase text-xs leading-widest'>BUSINESS</span>
        <H3>
          From enterprise to small business, we'll work with you.<sup className='text-xs'>1</sup>
        </H3>
      </Card>
    </>
  );
}
