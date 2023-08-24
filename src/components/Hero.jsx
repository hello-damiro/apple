import AdaptiveImage from '@/lib/adaptiveImage';
import { cn } from '@/lib/utils';

export default function Hero({ children, src, altsrc = '', title, theme = '' }) {
  const color = theme === '' ? 'text-brand-black' : 'text-brand-white';
  return (
    <section className='relative'>
      {/* BACKGROUND IMAGE */}
      <div className='relative h-[500px] md:h-[664px] lg:h-[700px] w-full items-center justify-center bg-red-400/20'>
        <AdaptiveImage alt={title} desktopImage={src} mobileImage={altsrc} />
      </div>

      {/* AD COPY */}
      <div className='absolute top-1/2 -translate-y-1/2 h-full w-full '>
        <div
          className={cn(
            color,
            'container mx-auto max-w-5xl p-6 text-center h-2/5 flex flex-col',
            'justify-center gap-1 md:gap-4 lg:gap-6 items-center'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
