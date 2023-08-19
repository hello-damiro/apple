import Card from '@/components/Card';
import { H3 } from '@/components/Texts';

export default function SliderHelp({ width }) {
  return (
    <>
      <Card width={width} src='/images/store-help/store-card-50-specialist-help.jpeg' alt='alt' href='/'>
        <span>APPLE SPECIALIST</span>
        <H3>Shop one on one with a Specialist. Online or in a store.</H3>
      </Card>

      <Card
        width={width}
        src='/images/store-help/store-card-50-specialist-video.jpeg'
        alt='alt'
        href='/'
        childClassName='w-2/3'
        dark
      >
        <span className='text-red-400'>NEW</span>
        <H3>Shop with a specialist over a video</H3>
        <p className='w-3/4 text-base'>Choose your next device over a guided, one-way video session.</p>
      </Card>

      <div className='relative space-y-5'>
        <Card width={width} src='/images/store-help/store-card-25-apps.jpeg' alt='alt' href='/'>
          <H3>Get to know your new device with a free Personal Session.</H3>
        </Card>

        <Card
          width={width}
          src='/images/store-help/store-card-25-genius.jpeg'
          alt='alt'
          href='/'
          position='center'
          childClassName='w-3/5'
        >
          <H3>Get expert service and support at the Genius Bar.</H3>
        </Card>
      </div>
    </>
  );
}
