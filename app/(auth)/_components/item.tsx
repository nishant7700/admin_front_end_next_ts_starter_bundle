'use client';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

export const Item = ({
  icon: Icon,
  url,
  label,
  active,
}: {
  icon: LucideIcon;
  url: string;
  label: string;
  active: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() => router.push(url)}
      className={cn(
        'flex w-full text-sm items-center py-3.5 px-3 hover:bg-muted rounded-lg transition-background group  text-primary font-medium ',
        active ? 'bg-muted dark:text-white' : ''
      )}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 items-center">
          <Icon size={20} />
          <div className="text-muted-foreground-200">{label}</div>
        </div>
      </div>
    </button>
  );
};
