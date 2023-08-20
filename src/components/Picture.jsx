import Image from 'next/image';

export default function Picture({ src, alt, style, picClassName }) {
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
      className={picClassName}
    />
  );
}
