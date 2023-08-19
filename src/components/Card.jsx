import Link from 'next/link';
import Image from 'next/image';
import { useBreakpoint } from '@/context/breakpointContext';
import { cn } from '@/lib/utils';

export default function Card({ children, width, src, alt, dark = false, position = 'start', href = '/' }) {
  const breakpoint = useBreakpoint();
  const mdWidth = breakpoint !== 'sm' ? width : '320px';
  const justify = `justify-${position}`;

  return (
    <div className='scale-100 hover:scale-[1.02] transition-all duration-700 pr-6'>
      <Link href={href} className='flex snap-always snap-start md:snap-center scroll-mx-6 scroll-px-6'>
        <div className='relative overflow-hidden w-full rounded-2xl shadow-gray-dk shadow-sm hover:shadow-lg transition-all duration-700'>
          {/* BACKGROUND IMAGE */}
          <div className='relative' style={{ width: mdWidth }}>
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
              'absolute text-sm top-1/2 -translate-y-1/2 h-full w-full p-5 md:p-8 gap-2.5 flex flex-col',
              justify,
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
