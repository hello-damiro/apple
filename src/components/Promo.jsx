import Image from 'next/image';
import classNames from 'classnames';

export default function Promo({ children }) {
  return <div className='w-full flex flex-col md:flex-row gap-3 px-0 md:px-3 pb-3'>{children}</div>;
}

export function Half({ children, src, title, position = '', theme = '' }) {
  const color = theme === '' ? 'text-brand-black' : 'text-brand-white';
  return (
    <div className='relative'>
      <div className='relative w-full h-[500px] lg:h-[580px]'>
        <Image
          src={src}
          alt={title}
          width={0}
          height={0}
          sizes='full'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          blurDataURL={src}
          unoptimized={true}
          priority='true'
        />
      </div>
      <div
        className={classNames(
          'absolute h-full w-full -translate-y-1/2',
          `${position === 'down' ? 'top-5/2 mt-12' : 'top-1/2'}`
        )}
      >
        <div
          className={classNames(
            color,
            'container mx-auto max-w-5xl p-6 text-center h-2/5 flex flex-col justify-center gap-1 lg:gap-3 items-center'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
