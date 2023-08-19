import Image from 'next/image';
import Card from '@/components/Card';
import { H3 } from '@/components/Texts';
import ColorOptions from '@/components/ColorOptions';

export default function SliderAccessories({ width }) {
  return (
    <>
      <Card
        width={400}
        src='/images/store-accessories/store-card-40-accessories-202303.jpeg'
        alt='Some title 5'
        href='/'
      >
        <H3 className='pt-4'>In with the new.</H3>
        <p className='text-sm md:text-base'>Discover fressh new colors for your favorite accessories</p>
      </Card>

      <Card
        type='product'
        src='/images/store-accessories/MQU73.jpeg'
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
        <h4 className='text-sm md:text-base font-semibold'>
          iPhone 14 Silicon Case with <br />
          MagSafe - Canary Yellow
        </h4>
        <p className='text-sm'>US$49.00</p>
      </Card>

      <Card
        type='product'
        src='/images/store-accessories/MPPJ3.jpeg'
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
        <h4 className='text-sm md:text-base font-semibold'>
          iPhone 14 Silicon Case with <br />
          MagSafe - Ink
        </h4>
        <p className='text-sm'>US$59.00</p>
      </Card>

      <Card
        type='product'
        src='/images/store-accessories/MQTR3.jpeg'
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
        <h4 className='text-sm md:text-base font-semibold'>
          Bewats Studio Pro Wireless <br />
          Headphones - Sandstone
        </h4>
        <p className='text-sm'>US$349.00</p>
      </Card>

      <Card
        type='product'
        src='/images/store-accessories/MQWD3ref.jpeg'
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
        <h4 className='text-sm md:text-base font-semibold'>
          45mm Olive Solo Loop - Size 6 <br />
        </h4>
        <p className='text-sm'>US$49.00</p>
      </Card>
    </>
  );
}
