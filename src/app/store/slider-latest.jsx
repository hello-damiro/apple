import Link from 'next/link';
import { Fragment } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { latestData } from '@/data/storeLatest';
import { H3 } from '@/components/Texts';

const data = latestData;

export default function SliderLatest({ width }) {
  return (
    <>
      <Card key={1} width={width} src='/images/storeLatest/store-card-40-bts.jpeg' alt='Some title 1' href='/'>
        <span className='uppercase text-xs leading-widest'>LIMITED TIME OFFER</span>
        <H3>
          Save on Mac or <br /> iPad for college.
        </H3>
        <p className='text-sm md:text-base'>
          Plus get a gift card up to $150, <br />
          20% off AppleCare+, and more.<sup>◊◊</sup>
        </p>
      </Card>

      <Card key={2} width={width} src='/images/storeLatest/store-card-40-gov.jpeg' alt='Some title 2' href='/' dark>
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
        src='/images/storeLatest/store-card-40-iphone-14-pro.jpeg'
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

      <Card key={4} width={width} src='/images/storeLatest/store-card-40-macbook-air.jpeg' alt='Some title 4' href='/'>
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
        src='/images/storeLatest/store-card-40-watch-s8.jpeg'
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

function Card({ children, width, src, alt, dark, href = '/' }) {
  const midwidth = width && `md:w-[${width}px]`;
  return (
    <div className='scale-100 hover:scale-[1.02] transition-all duration-700'>
      <Link href={href} className='flex snap-always snap-center '>
        <div className='relative overflow-hidden w-full rounded-2xl shadow-gray-dk shadow-sm hover:shadow-lg transition-all duration-700'>
          {/* BACKGROUND IMAGE */}
          <div className={cn('relative w-[360px]', midwidth)}>
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              className='w-full h-auto'
              blurDataURL={src}
              placeholder='blur'
              unoptimized
              priority
            />
          </div>

          {/* AD COPY */}
          <div
            className={cn(
              'absolute text-sm top-1/2 -translate-y-1/2 h-full w-full p-8 space-y-3',
              dark ? 'text-gray-lt' : 'text-gray-bk'
            )}
          >
            {children}
          </div>
        </div>
      </Link>
    </div>
  );
}
