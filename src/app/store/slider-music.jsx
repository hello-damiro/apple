import Card from '@/components/Card';
import { H3 } from '@/components/Texts';
import ColorOptions from '@/components/ColorOptions';

export default function SliderMusic({ width }) {
  return (
    <>
      <Card width={400} src='/images/store-music/store-card-40-applemusic.jpeg' alt='Some title 5' href='/'>
        <span className='uppercase text-xs leading-widest'></span>
        <H3>
          Get 6 months of
          <br />
          Apple Music free.
        </H3>
        <p>
          Included with your HomePod, AirPods, or select Beats product.<sup>+</sup>
        </p>
      </Card>

      <Card
        type='product'
        src='/images/store-music/homepod-select-midnight-202210.jpeg'
        alt='Some title 5'
        href='/'
        preText=''
        preSubText={'New'}
        colors={
          <>
            <ColorOptions hex='#ffff00' />
            <ColorOptions hex='#ff00ff' />
            <ColorOptions hex='#DDfE3f' />
          </>
        }
      >
        <h4 className='text-sm md:text-base font-semibold'>HomePod - Midnight</h4>
        <p className='text-sm'>US$299.00</p>
      </Card>

      <Card
        type='product'
        src='/images/store-music/MQD83.jpeg'
        alt='Some title 5'
        href='/'
        preText=''
        preSubText={'Free Engraving'}
        colors={
          <>
            <ColorOptions hex='#ffff00' />
            <ColorOptions hex='#ff00ff' />
            <ColorOptions hex='#DDfE3f' />
          </>
        }
      >
        <h4 className='text-sm md:text-base font-semibold'>AirPods Pro (2nd generation)</h4>
        <p className='text-sm'>US$249.00</p>
      </Card>

      <Card
        type='product'
        src='/images/store-music/homepod-mini-select-yellow-202110.jpeg'
        alt='Some title 5'
        href='/'
        preText=''
        preSubText={''}
        colors={
          <>
            <ColorOptions hex='#ffff00' />
            <ColorOptions hex='#ff00ff' />
            <ColorOptions hex='#DDfE3f' />
          </>
        }
      >
        <h4 className='text-sm md:text-base font-semibold'>HomePod mini - Yellow</h4>
        <p className='text-sm'>US$99.00</p>
      </Card>

      <Card
        type='product'
        src='/images/store-music/airpods-max-select-silver-202011.jpeg'
        alt='Some title 5'
        href='/'
        preText=''
        preSubText={'Free Engraving'}
        colors={
          <>
            <ColorOptions hex='#ffff00' />
            <ColorOptions hex='#ff00ff' />
            <ColorOptions hex='#DDfE3f' />
          </>
        }
      >
        <h4 className='text-sm md:text-base font-semibold'>AirPods Max - Silver</h4>
        <p className='text-sm'>US$559.00</p>
      </Card>
    </>
  );
}
