import classNames from 'classnames';
import Image from 'next/image';

export default function Hero({ children, src, title, theme = '' }) {
  const color = theme === '' ? 'text-brand-black' : 'text-brand-white';
  return (
    <div className='relative mb-3'>
      <div className='relative h-[500px] md:h-[664px] lg:h-[700px] w-full items-center justify-center bg-red-400/20'>
        <Image
          src={src}
          alt={title}
          width={0}
          height={0}
          sizes='full'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          blurDataURL={src}
          unoptimized={true}
        />
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 h-full w-full '>
        <div className={classNames('container mx-auto max-w-5xl p-6 text-center h-2/5 flex items-center', color)}>
          {children}
        </div>
      </div>
    </div>
  );
}
