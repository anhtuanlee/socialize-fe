import Button from '@/components/Button';
import Text from '@/components/Text';
import { ROUTE } from '@/constant/data-route';
import RenderButton from '@/modules/Profile/components/RelationButton/RenderButton';
import { useStore } from '@/stores/stores';
import { auth } from '@/types/data';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserItem: React.FC<{ data: auth.TDataUser }> = ({ data }) => {
  const { info } = useStore();
  return (
    <div className={cn('flex flex-row gap-4 rounded-lg shadow-md px-8 py-6 justify-between')}>
      <div className={cn('flex flex-row gap-4 ')}>
        <figure className={cn('w-16 h-16 rounded-max overflow-hidden relative')}>
          <Image fill src={data.avatar} alt={data.full_name} className={cn('absolute')} />
        </figure>
        <div className={cn('flex flex-col gap-4 ')}>
          <Link href={`${ROUTE.PROFILE}/${data.user_name}`}>
            <Text variant="body_sm__b" color="darkgray">
              {data.full_name}
            </Text>
          </Link>
          <Text variant="body_md__r" color="coldgray">{`@${data.user_name}`}</Text>
        </div>
      </div>
      <RenderButton self={info?.user_name as string} reiceiver={data.user_name} icon />
    </div>
  );
};

export default UserItem;