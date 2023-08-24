'use client';

import Image from 'next/image';
// import getBase64 from '@/lib/getBase64';
import { cn } from '@/lib/utils';
import { useBreakpoint } from '@/context/breakpointContext';
import Picture from './Picture';

export default async function PictureAdaptive({ src, alt, className = '', aspectRatio = 'aspect-[4/3]' }) {
  const breakpoint = useBreakpoint();

  return <Picture src={src} alt='some alts' aspectRatio='aspect-video' className='rounded-xl' />;
}
