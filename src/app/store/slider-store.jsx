import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { storeData } from '@/data/store';

const store = storeData;

export default function SliderStore({ width }) {
  return (
    <>
      {store.map((item) => {
        return (
          <div key={item.id} className='scale-100 hover:scale-[1.02] transition-all duration-700 pr-6'>
            <Link
              href={item.href}
              className='flex flex-col gap-3 snap-always snap-start md:snap-center scroll-mx-6 scroll-px-6'
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
          </div>
        );
      })}
    </>
  );
}
