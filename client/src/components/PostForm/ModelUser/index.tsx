import Text from '@/components/Text';
import { auth } from '@/types/data';
import { cn } from '@/utils';
import Image from 'next/image';
import React from 'react';

const ModelUser: React.FC<{ data: auth.TDataUser; classNames: string }> = ({
  data,
  classNames,
}) => {
  return (
    <div className={cn('flex flex-row gap-4 pl-4 pt-6', classNames)}>
      <figure className={cn('w-14 h-14 rounded-full overflow-hidden relative')}>
        <Image fill alt={data.full_name ?? ''} src={data.avatar ?? ''} />
      </figure>
      <div className={cn('flex flex-col items-start justify-between')}>
        <Text variant="body_sm__b" color="darkblue">
          {data.full_name}
        </Text>
        <Text
          className="bg-lightgray rounded-lg px-8 flex items-center justify-center py-1"
          tag="span"
          variant="body_s__b"
        >
          Bạn bè
        </Text>
      </div>
    </div>
  );
};

export default ModelUser;
