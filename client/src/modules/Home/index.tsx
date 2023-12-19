import { cn } from '@/utils';
import Link from 'next/link';

export default function HomeModule() {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <button className={cn('px-8 py-4 rounded-lg bg-red')}>
          <Link href={`profile/leanhtuan112`}>Go to leanhtuan112</Link>
        </button>
        <button className={cn('px-8 py-4 rounded-lg bg-red')}>
          <Link href={`profile/leanhtuan213`}>Go to leanhtuan213</Link>
        </button>
        <button className={cn('px-8 py-4 rounded-lg bg-red')}>
          <Link href={`profile/leanhtuan363`}>Go to leanhtuan363</Link>
        </button>
        <button className={cn('px-8 py-4 rounded-lg bg-red')}>
          <Link href={`profile/leanhtuan414`}>Go to leanhtuan414</Link>
        </button>
        <button className={cn('px-8 py-4 rounded-lg bg-red')}>
          <Link href={`profile/leanhtuan515`}>Go to leanhtuan515</Link>
        </button>
        <button className={cn('px-8 py-4 rounded-lg bg-red')}>
          <Link href={`profile/leanhtuan565`}>Go to leanhtuan565</Link>
        </button>
      </div>
    </div>
  );
}
