import Link from 'next/link';
import Image from 'next/image';
import { useBreakpoint } from '@/context/breakpointContext';
import { cn } from '@/lib/utils';

const img = ({ src, alt, style, imgClassName }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      style={style}
      blurDataURL={src}
      placeholder='blur'
      unoptimized
      priority
      className={cn(imgClassName)}
    />
  );
};

const CardDefault = ({ children, width, textClassName, imgClassName, src, alt, justify, dark }) => {
  const breakpoint = useBreakpoint();
  const mdWidth = breakpoint !== 'sm' ? width : '320px';
  const imgStyle = { width: 'full', height: 'auto' };

  return (
    <>
      <div className='relative' style={{ width: mdWidth }}>
        <img src={src} alt={alt} style={imgStyle} className={cn(imgClassName)} />
      </div>
      <div
        className={cn(
          'absolute top-1/2 -translate-y-1/2',
          'h-full w-full p-6 md:p-8 gap-2.5 flex flex-col text-sm',
          dark ? 'text-gray-lt' : 'text-gray-bk',
          justify,
          textClassName
        )}
      >
        {children}
      </div>
    </>
  );
};

const CardIcon = ({ children, imgHeight, textClassName, imgClassName, src, alt, justify, dark }) => {
  const imgStyle = { height: imgHeight };

  return (
    <div className='relative p-6 md:p-8 flex flex-col items-start gap-3 w-[320px] h-[240px]'>
      <img src={src} alt={alt} style={{ height: imgHeight }} className={imgClassName} />
      <div className={cn('w-full h-full text-sm', dark ? 'text-gray-lt' : 'text-gray-bk', justify, textClassName)}>
        {children}
      </div>
    </div>
  );
};

export default function Card({
  type,
  children,
  href,
  width,
  height,
  imgHeight,
  src,
  alt,
  justify,
  dark,
  textClassName,
  imgClassName,
}) {
  return (
    <div className='scale-100 hover:scale-[1.02] transition-all duration-700 pr-6'>
      <Link href={href} className={'flex snap-always snap-start md:snap-center scroll-mx-6 scroll-px-6'}>
        <div
          className={cn(
            ' overflow-hidden rounded-2xl shadow-gray-md shadow-sm hover:shadow-lg transition-all duration-700',
            dark ? 'bg-brand-black' : 'bg-brand-white'
          )}
        >
          {type !== 'icon' ? (
            <CardDefault
              width={width}
              textClassName={textClassName}
              imgClassName={imgClassName}
              src={src}
              alt={alt}
              justify={justify}
              dark={dark}
              children={children}
            />
          ) : (
            <CardIcon
              children={children}
              width={width}
              height={height}
              imgHeight={imgHeight}
              textClassName={textClassName}
              imgClassName={imgClassName}
              src={src}
              alt={alt}
              justify={justify}
              dark={dark}
            />
          )}
        </div>
      </Link>
    </div>
  );
}
