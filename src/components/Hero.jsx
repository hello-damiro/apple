import Image from 'next/image';
import classNames from 'classnames';
import { useBreakpoint } from '@/context/breakpointContext';

export default function Hero({ children, src, altsrc = '', title, theme = '' }) {
  const color = theme === '' ? 'text-brand-black' : 'text-brand-white';
  const breakpoint = useBreakpoint();
  return (
    <div className='relative mb-3'>
      <div className='relative h-[500px] md:h-[664px] lg:h-[700px] w-full items-center justify-center bg-red-400/20'>
        <Image
          src={breakpoint === 'lg' || altsrc === '' ? src : altsrc}
          alt={title}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          blurDataURL={breakpoint === 'lg' || altsrc === '' ? src : altsrc}
          placeholder='blur'
          unoptimized
          priority
        />
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 h-full w-full '>
        <div
          className={classNames(
            'container mx-auto max-w-5xl p-6 text-center h-2/5 flex flex-col justify-center gap-1 md:gap-4 lg:gap-6 items-center',
            color
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
