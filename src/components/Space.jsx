import { cn } from '@/lib/utils';

export default function Space({ vertical = false }) {
  return <div className={cn(vertical ? 'w-6' : 'h-6')} />;
}
