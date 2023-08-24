import { cn } from '@/lib/utils';

export default function Container({ children, maxWidth = 'max-w-5xl', uncontained = null, ...props }) {
  return (
    <section className='w-full bg-gray-lt'>
      <div className={cn('container mx-auto px-6', maxWidth)}>
        <div {...props}>{children}</div>
      </div>
      {uncontained}
    </section>
  );
}
