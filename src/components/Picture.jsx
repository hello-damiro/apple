import Image from 'next/image';
import getBase64 from '@/lib/getBase64';
import { cn } from '@/lib/utils';

export default async function Picture({ src, alt, className = '', aspectRatio = 'aspect-[4/3]' }) {
  const base64img = await getBase64(`http://localhost:3000${src}`);

  return (
    <div className={cn('relative w-full', aspectRatio)}>
      <Image
        src={src}
        alt={alt}
        blurDataURL={base64img}
        placeholder='blur'
        quality={100}
        priority
        fill
        className={cn('object-cover', className)}
      />
    </div>
  );
}
