import Image from 'next/image';
import Card from '@/components/Card';
import { H3 } from '@/components/Texts';
import { cn } from '@/lib/utils';

export default function SliderDifference(width, height) {
  return (
    <>
      <Card
        type='icon'
        picClassName='ml-0.5'
        alt='some icon'
        imgHeight={42}
        src={'/images/store-difference/be01d796-c471-48eb-afe0-ac4858304857.svg'}
        href='/'
      >
        <H3>
          Enjoy <span className='text-green-500'>two-hour delivery</span> from an Apple Store,
          <span className='text-green-500'>free delivery</span>, or{' '}
          <span className='text-green-500'>
            easy pickup.<sup className='text-sm font-normal'>2</sup>
          </span>
        </H3>
      </Card>

      <Card
        type='icon'
        alt='some icon'
        imgHeight={42}
        src={'/images/store-difference/9d8693c3-4816-4597-a844-17164ccc70e8.svg'}
        href='/'
      >
        <H3>
          <span className='text-brand-blue'>Trade in your current device.</span> Get credit toward a new one.
          <sup className='text-sm font-normal'>3</sup>
        </H3>
      </Card>

      <Card
        type='icon'
        picClassName='ml-0.5'
        alt='some icon'
        imgHeight={42}
        src={'/images/store-difference/be288957-bb13-4133-9c3a-aab60af88ac8.svg'}
        href='/'
      >
        <H3>
          Pay in full or <span className='text-green-500'>pay over time</span>. Your choice.
        </H3>
      </Card>

      <Card
        type='icon'
        picClassName='-ml-0.5 scale-75'
        alt='some icon'
        imgHeight={42}
        src={'/images/store-difference/07e9d50e-f7bf-47cf-9577-b607b28f7ac8.svg'}
        href='/'
      >
        <H3>
          Get <span className='text-brand-blue'>personalized shopping</span> experience in the{' '}
          <span className='text-brand-blue'>Apple Store</span> app.
        </H3>
      </Card>

      <Card
        type='icon'
        picClassName='-ml-0.5 scale-110'
        alt='some icon'
        imgHeight={36}
        src={'/images/store-difference/82262e95-8dec-460e-a783-de3e5ee81556.svg'}
        href='/'
      >
        <H3>
          Make them yours. <span className='text-brand-blue'>Engrave a mix of emoji, names and numbers for free.</span>
        </H3>
      </Card>

      <Card
        type='icon'
        picClassName='-ml-0.5 scale-125'
        alt='some icon'
        imgHeight={42}
        src={'/images/store-difference/c8aa8068-e0a0-44b5-bdbe-27f8692b28d1.svg'}
        href='/'
      >
        <H3>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Customize</span>{' '}
          your Mac and create your own style of Apple Watch
        </H3>
      </Card>
    </>
  );
}
