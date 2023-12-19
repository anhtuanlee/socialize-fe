'use client';
import { userService } from '@/api';
import Button from '@/components/Button';
import { IconArrowLeft, IconEditProfile, IconShare } from '@/components/IconSvg';
import PostForm from '@/components/PostForm';
import SectionProfileTag from './components/SectionProfileTag';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';
import { auth } from '@/types/data';
import { cn } from '@/utils';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import RenderButton from './components/RelationButton/RenderButton';

const ProfileModule: React.FC = () => {
  const { user } = useParams();
  const { info } = useStore();
  const keyUser = userService.getKeyUser(user as string);
  const { data } = useSWR(keyUser, userService.getUserInfo);

  const isSelf = info?.user_name === user;
  const dataRender: auth.TDataUser = isSelf ? info : data;

  const relationWithUser = data?.status as TStatusFriend;

  // if (error) {
  //   push('/login');
  // }

  return (
    <div className="flex flex-col">
      <div className={cn('w-full h-64 bg-transparent relative')}>
        <figure className={cn('absolute w-full h-[180px]  ')}>
          <Image
            className={cn('absolute')}
            src={
              // !dataRender ? 'https://images3.alphacoders.com/132/1326290.jpeg' : dataRender.cover
              'https://images3.alphacoders.com/132/1326290.jpeg'
            }
            alt={dataRender?.full_name ?? 'unknow'}
            fill
          />

          <div className={cn('flex flex-row gap-10 absolute -bottom-10 right-4')}>
            <RenderButton reiceiver={user as string} self={info?.user_name as string} />
          </div>

          <div className={cn('flex flex-row gap-8 absolute -bottom-10 left-4')}>
            <figure className={cn('w-16 h-16 rounded-full relative overflow-auto')}>
              <Image
                src={
                  dataRender
                    ? dataRender.avatar
                    : 'https://images3.alphacoders.com/132/1326290.jpeg'
                }
                alt={dataRender?.full_name}
                fill
                className={cn('absolute')}
              />
            </figure>
            <div className="flex flex-col items-center gap-4">
              <Text variant="body_lg__b" color="darkblue">
                {dataRender?.full_name}
              </Text>
              <Text variant="body_md__r" color="coldgray">
                {`@${dataRender?.user_name}`}
              </Text>
            </div>
          </div>
        </figure>
        <div className={cn('flex flex-row gap-4 px-4 py-6 relative')}>
          <IconArrowLeft />
          <div className={cn('flex flex-col items-start gap-4')}>
            <Text variant="body_lg__b" color="darkblue" tag="h4">
              {dataRender?.full_name}
            </Text>
            <Text variant="body_md__r" color="lightgray">
              33Post
            </Text>
          </div>
        </div>
      </div>
      <PostForm classNames={cn('mt-24 ')} data={dataRender} />
      <SectionProfileTag isSelf={isSelf} />
    </div>
  );
};

export default ProfileModule;
