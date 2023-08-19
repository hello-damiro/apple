import Image from 'next/image';
import Card from '@/components/Card';
import { H3 } from '@/components/Texts';

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
        src='/images/store-accessories/MPPJ3.jpeg'
        alt='Some title 5'
        href='/'
        preText='Accessories'
        preSubText={'Free engraving'}
        colors={
          <>
            <Color hex='#ffff00' />
            <Color hex='#ff00ff' />
            <Color hex='#DDfE3f' />
          </>
        }
      >
        <h4 className='text-sm md:text-base font-semibold'>
          iPhone 14 Silicon Case with <br />
          MagSafe - Canary Yellow
        </h4>
        <p className='text-sm'>US$59.00</p>
      </Card>
    </>
  );
}

const Color = ({ hex }) => {
  return <div className='w-2.5 aspect-square rounded-full my-3 md:my-6' style={{ backgroundColor: hex }} />;
};
