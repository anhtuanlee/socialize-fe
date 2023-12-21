import Button from '@/components/Button';
import { IconMessage, IconMore, IconArrowLeft } from '@/components/IconSvg';
import { cn } from '@/utils';
import { info } from 'console';
import React from 'react';
import RenderButton from '../RelationButton/RenderButton';
import Image from 'next/image';
import Text from '@/components/Text';
import { auth } from '@/types/data';

type THeaderProfile = {
  data: auth.TDataUser;
  self: auth.TDataUser;
  reiceiver: string;
  relation: TStatusUser;
};
const HeaderProfile: React.FC<THeaderProfile> = ({ data, self, reiceiver, relation }) => {
  return (
    <div className={cn('w-full  aspect-2/75 bg-transparent relative')}>
      <figure className={cn('absolute w-full h-full')}>
        <Image
          className={cn('absolute')}
          src={
            // !data ? 'https://images3.alphacoders.com/132/1326290.jpeg' : data.cover
            'https://wallpapers.com/images/high/bmw-background-qzphq8jh55vuvyns.webp'
          }
          alt={data?.full_name ?? 'unknow'}
          fill
        />
      </figure>
      <div className={cn('flex flex-row items-center gap-10 absolute -bottom-10 right-4')}>
        <RenderButton reiceiver={reiceiver as string} self={self?.user_name as string} />
        {relation?.relation !== 'self' && (
          <Button Icons={IconMessage} type="primary">
            Nhắn tin
          </Button>
        )}
        <Button Icons={IconMore} type="icon" />
      </div>
      <div className={cn('flex flex-row gap-8 absolute -bottom-12 left-4')}>
        <figure className={cn('w-28 h-28 overflow-hidden rounded-full relative ')}>
          <Image
            src={data ? data.avatar : 'https://images3.alphacoders.com/132/1326290.jpeg'}
            alt={data?.full_name ?? ''}
            fill
            className={cn('absolute')}
          />
        </figure>
        <div className="flex flex-col items-center gap-4 justify-center">
          <Text variant="body_lg__b" color="darkblue">
            {data?.full_name}
          </Text>
          <Text variant="body_md__r" color="coldgray">
            {`@${data?.user_name}`}
          </Text>
        </div>
      </div>
      <div className={cn('flex flex-row gap-4 px-4 py-6 relative')}>
        <IconArrowLeft />
        <div className={cn('flex flex-col items-start gap-4')}>
          <Text variant="body_lg__b" color="darkblue" tag="h4">
            {data?.full_name}
          </Text>
          <Text variant="body_md__r" color="lightgray">
            33Post
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
