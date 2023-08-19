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
        width={320}
        imgWidth={230}
        src='/images/store-accessories/MPPJ3.jpeg'
        alt='Some title 5'
        href='/'
      >
        <p className='text-sm md:text-base'>Discover fressh new colors for your favorite accessories</p>
      </Card>
    </>
  );
}
