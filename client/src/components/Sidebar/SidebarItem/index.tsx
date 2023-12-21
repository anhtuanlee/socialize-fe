'use client';

import React from 'react';

import Button from '@/components/Button';
import Text from '@/components/Text';
import Link from 'next/link';
import { cn } from '@/utils';
import { usePathname } from 'next/navigation';
import s from './styles.module.scss';

function SidebarItem({ data }: { data: TSidebarItem }) {
  const pathname = usePathname();

  return (
    <Link href={`/${data.href}`}>
      <Button
        type="text"
        Icons={data.icon}
        classNames={cn('hover:text-darkblack text-ashgray', pathname === data.href && s.isActive)}
      >
        <Text variant="body_lg__s">{data.title}</Text>
      </Button>
    </Link>
  );
}

export default SidebarItem;
