import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { storeData } from '@/data/store';

const store = storeData;

export default function SliderDifference({ width }) {
  return (
    <>
      {store.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.href}
            className='flex flex-col gap-3 items-center snap-always snap-end bg-red-300'
          >
            <div style={{ width: width }}>
              <Image
                src={item.src}
                alt={item.title}
                width={0}
                height={0}
                className='w-full h-auto'
                blurDataURL={item.src}
                placeholder='blur'
                unoptimized
                priority
              />
            </div>
            <Button variant='link' href={item.href} className='text-sm p-0'>
              {item.title}
            </Button>
          </Link>
        );
      })}
    </>
  );
}
