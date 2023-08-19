import Image from 'next/image';
import Card from '@/components/Card';
import { H3 } from '@/components/Texts';
import { cn } from '@/lib/utils';

const width = 320;
const height = 260;

export default function SliderDifference() {
  return (
    <>
      <CardItem
        icon={'/images/storeDifference/be01d796-c471-48eb-afe0-ac4858304857.svg'}
        imageClassName='-ml-1/2'
        href='/'
      >
        Enjoy <span className='text-green-500'>two-hour delivery</span> from an Apple Store,{' '}
        <span className='text-green-500'>free delivery</span>, or{' '}
        <span className='text-green-500'>
          easy pickup.<sup className='text-sm font-normal'>2</sup>
        </span>
      </CardItem>

      <CardItem
        icon={'/images/storeDifference/9d8693c3-4816-4597-a844-17164ccc70e8.svg'}
        imageClassName='-ml-1'
        href='/'
      >
        <span className='text-brand-blue'>Trade in your current device.</span> Get credit toward a new one.
        <sup className='text-sm font-normal'>3</sup>
      </CardItem>

      <CardItem
        icon={'/images/storeDifference/be288957-bb13-4133-9c3a-aab60af88ac8.svg'}
        imageClassName='-ml-1'
        href='/'
      >
        Pay in full or <span className='text-green-500'>pay over time</span>. Your choice.
      </CardItem>

      <CardItem
        icon={'/images/storeDifference/07e9d50e-f7bf-47cf-9577-b607b28f7ac8.svg'}
        imageClassName='-ml-1 scale-75'
        href='/'
      >
        Get <span className='text-brand-blue'>personalized shopping</span> experience in the{' '}
        <span className='text-brand-blue'>Apple Store</span> app.
      </CardItem>

      <CardItem
        icon={'/images/storeDifference/82262e95-8dec-460e-a783-de3e5ee81556.svg'}
        imageClassName='-ml-1.5'
        href='/'
      >
        Make them yours. <span className='text-brand-blue'>Engrave a mix of emoji, names and numbers for free.</span>
      </CardItem>

      <CardItem
        icon={'/images/storeDifference/c8aa8068-e0a0-44b5-bdbe-27f8692b28d1.svg'}
        imageClassName='-ml-1 scale-[110%]'
        href='/'
      >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Customize</span>{' '}
        your Mac and create your own style of Apple Watch
      </CardItem>
    </>
  );
}

function CardItem({ href, icon, alt, children, imageClassName }) {
  return (
    <Card type='plain' width={width} height={height} href={href} childClassName='bg-brand-white'>
      <Image
        src={icon}
        alt={alt}
        width={0}
        height={0}
        className={cn('w-12 h-12 -p-2 mb-1 mb:mb-2', imageClassName)}
        blurDataURL={icon}
        placeholder='blur'
        unoptimized
        priority
      />
      <H3>{children}</H3>
    </Card>
  );
}
