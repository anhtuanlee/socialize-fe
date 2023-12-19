'use client';

import { DATA_ROUTE, ROUTE } from '@/constant/data-route';

import Button from '../Button';
import SidebarItem from './SidebarItem';
import { cn } from '@/utils';
import Image from 'next/image';
import s from './styles.module.scss';
import Text from '../Text';
import { useEffect } from 'react';
import { authenSevice } from '@/api/authService';
import { useStore } from '@/stores/stores';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar({ className }: { className: string }) {
  const { info } = useStore();
  const { push } = useRouter();
  const handleLogout = async () => {
    await authenSevice.logOut();
    push('/login');
  };

  return (
    <aside
      className={cn(
        'h-[calc(100vh-8  rem)] bg-lightsky text-black  overflow-hidden flex justify-between flex-col',
        className,
        s.sidebar
      )}
    >
      <div className="gap-8 flex flex-col">
        <Link
          href={`${ROUTE.PROFILE}/${info?.user_name}`}
          className={cn('flex flex-col items-center justify-center', s.user)}
        >
          <figure className={cn(s.user__avatar)}>
            <Image src={info?.avatar || ''} alt="gai xinh" fill />
          </figure>
          <Text className={cn(s.user__name)} color="white" variant="body_lg__r">
            {info?.full_name}
          </Text>
        </Link>
        <div className="  w-auto  bg-primary   top-28 bottom-0">
          {DATA_ROUTE.map((item, index) => {
            return <SidebarItem key={index} data={item} />;
          })}
        </div>
      </div>
      <Button onClick={handleLogout} title="LOGOUT" classname=" bg-lightgreen w-full   px-4 py-6" />
    </aside>
  );
}
