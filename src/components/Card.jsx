import Link from 'next/link';
import { useBreakpoint } from '@/context/breakpointContext';
import { cn } from '@/lib/utils';
import Picture from './Picture';

export const CardDefault = ({ children, width, textClassName, picClassName, src, alt, dark }) => {
  const breakpoint = useBreakpoint();
  const breakpointWidth = breakpoint !== 'sm' ? width : '320px';

  return (
    <>
      <div className='relative' style={{ width: breakpointWidth }}>
        <Picture src={src} alt={alt} picClassName={cn('w-auto h-full', picClassName)} />
      </div>
      <div
        style={{ width: breakpointWidth }}
        className={cn(dark ? 'text-gray-lt' : 'text-gray-bk', 'absolute top-1/2 -translate-y-1/2 h-full p-6 md:p-8')}
      >
        <div className={cn('gap-2.5 flex flex-col text-sm h-full', textClassName)}>{children}</div>
      </div>
    </>
  );
};

const CardIcon = ({ children, imgHeight, textClassName, picClassName, src, alt, dark }) => {
  return (
    <div className='relative p-6 md:p-8 flex flex-col items-start gap-3 w-[320px] h-[190px] md:h-[240px]'>
      <Picture src={src} alt={alt} style={{ height: imgHeight }} picClassName={cn('w-auto', picClassName)} />
      <div className={cn('w-full h-full text-sm', dark ? 'text-gray-lt' : 'text-gray-bk', textClassName)}>
        {children}
      </div>
    </div>
  );
};

const CardProduct = ({ children, textClassName, picClassName, src, alt, dark, preText, preSubText, colors }) => {
  return (
    <div className='relative p-6 md:p-8 flex flex-col items-stretch  w-[320px] h-[400px] md:h-[500px]'>
      <div>
        <div className='uppercase text-xs text-gray-dk h-[20px] md:h-[30px]'>{preText}</div>
        <Picture src={src} alt={alt} picClassName={cn('w-[200px] md:w-[230px] aspect-square mx-auto', picClassName)} />
      </div>
      <div className='flex items-center justify-center gap-2 '>{colors}</div>
      <div className='text-xs text-red-400 h-[100px]'>{preSubText}</div>
      <div
        className={cn(
          'w-full h-full text-sm flex flex-col items-start justify-between',
          dark ? 'text-gray-lt' : 'text-gray-bk',
          textClassName
        )}
      >
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
  dark,
  preText,
  preSubText,
  colors,
  textClassName,
  picClassName,
}) {
  let card;

  switch (type) {
    case 'icon':
      card = (
        <CardIcon
          children={children}
          width={width}
          height={height}
          imgHeight={imgHeight}
          textClassName={textClassName}
          picClassName={picClassName}
          src={src}
          alt={alt}
          dark={dark}
        />
      );
      break;
    case 'product':
      card = (
        <CardProduct
          children={children}
          width={width}
          height={height}
          imgHeight={imgHeight}
          textClassName={textClassName}
          picClassName={picClassName}
          src={src}
          alt={alt}
          dark={dark}
          preText={preText}
          preSubText={preSubText}
          colors={colors}
        />
      );
      break;
    default:
      card = (
        <CardDefault
          width={width}
          textClassName={textClassName}
          picClassName={picClassName}
          src={src}
          alt={alt}
          dark={dark}
          children={children}
        />
      );
  }
  return (
    <div className='scale-100 hover:scale-[1.02] transition-all duration-700 pr-6'>
      <Link href={href} className={'flex snap-always snap-start md:snap-center scroll-mx-6 scroll-px-6'}>
        <div
          className={cn(
            'overflow-hidden rounded-2xl shadow-gray-md shadow-sm hover:shadow-lg transition-all duration-700',
            dark ? 'bg-brand-black' : 'bg-brand-white'
          )}
        >
          {card}
        </div>
      </Link>
    </div>
  );
}
