import Card from '@/components/Card';
import { H3 } from '@/components/Texts';
import { latestData } from '@/data/store-latest';

const data = latestData;

export default function SliderLatest({ width }) {
  return (
    <>
      <Card key={1} width={width} src='/images/store-latest/store-card-40-bts.jpeg' alt='Some title 1' href='/'>
        <span className='uppercase text-xs leading-widest'>LIMITED TIME OFFER</span>
        <H3>
          Save on Mac or <br /> iPad for college.
        </H3>
        <p className='text-sm md:text-base'>
          Plus get a gift card up to $150, <br />
          20% off AppleCare+, and more.<sup>◊◊</sup>
        </p>
      </Card>

      <Card key={2} width={width} src='/images/store-latest/store-card-40-gov.jpeg' alt='Some title 2' href='/' dark>
        <span className='uppercase text-xs leading-widest'>MACBOOK AIR 15”</span>
        <H3>
          Impressively big. <br />
          Impossibly thin.
        </H3>
        <p className='text-sm md:text-base'>
          From $1299 or $108.25/mo. for 12 mo.
          <sup>†</sup>
        </p>
      </Card>

      <Card
        key={3}
        width={width}
        src='/images/store-latest/store-card-40-iphone-14-pro.jpeg'
        alt='Some title 3'
        href='/'
        dark
      >
        <span className='uppercase text-xs leading-widest'>IPHONE 14 PRO</span>
        <H3>Pro. Beyond.</H3>
        <p className='text-sm md:text-base'>
          From $999 or $41.62/mo. for 24 mo.
          <sup>*</sup>
        </p>
      </Card>

      <Card key={4} width={width} src='/images/store-latest/store-card-40-macbook-air.jpeg' alt='Some title 4' href='/'>
        <span className='uppercase text-xs leading-widest'>MACBOOK AIR 15”</span>
        <H3>
          Impressively big. <br />
          Impossibly thin.
        </H3>
        <p className='text-sm md:text-base'>
          From $1299 or $108.25/mo. for 12 mo.
          <sup>†</sup>
        </p>
      </Card>

      <Card
        key={5}
        width={width}
        src='/images/store-latest/store-card-40-watch-s8.jpeg'
        alt='Some title 5'
        href='/'
        dark
      >
        <span className='uppercase text-xs leading-widest'>APPLE WATCH SERIES 8</span>
        <H3>A healthy leap ahead.</H3>
        <p className='text-sm md:text-base'>
          From $399 or $33.25/mo. for 12 mo.
          <sup>†</sup>
        </p>
      </Card>
    </>
  );
}
