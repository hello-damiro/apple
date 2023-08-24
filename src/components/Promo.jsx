import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Promo({ children }) {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row gap-6 px-4 md:px-3 pb-6'>{children}</div>
    </div>
  );
}

export function Ad({ children, src, title, position = '', theme = '' }) {
  const color = theme === '' ? 'text-brand-black' : 'text-brand-white';

  return (
    <section className='relative'>
      <div className='relative w-full h-[500px] lg:h-[580px]'>
        <Image
          src={src}
          alt={title}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          blurDataURL={src}
          placeholder='blur'
          unoptimized
          priority
          className='rounded-md'
        />
      </div>
      <div className={cn('absolute h-full w-full -translate-y-1/2', position === 'down' ? 'top-5/2 mt-12' : 'top-1/2')}>
        <div
          className={cn(
            color,
            'container mx-auto max-w-5xl p-6 text-center h-2/5 flex flex-col justify-center gap-1 lg:gap-3 items-center'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
