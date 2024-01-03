'use client';
import { userService } from '@/api';
import Button from '@/components/Button';
import {
  IconArrowLeft,
  IconEditProfile,
  IconMessage,
  IconMore,
  IconShare,
} from '@/components/IconSvg';
import PostForm from '@/components/PostForm';
import SectionProfileTag from './components/SectionProfileTag';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';
import { auth } from '@/types/data';
import { cn } from '@/utils';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import RenderButton from './components/RelationButton/RenderButton';
import HeaderProfile from './components/HeaderProfile';

const ProfileModule: React.FC = () => {
  const { user } = useParams();
  const { info } = useStore();
  const { push } = useRouter();

  /* Get keyuser */
  const keyUser = userService.getKeyUser(user as string);
  const { data, error } = useSWR<auth.TDataUser>(keyUser, userService.getUserInfo, {
    refreshWhenHidden: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  const isSelf = info?.user_name === user;
  const dataRender = isSelf ? info : data;
  const relationWithUser = data?.status as TStatusUser;

  return (
    <>
      <HeaderProfile
        data={dataRender!}
        relation={relationWithUser}
        reiceiver={user as string}
        self={info!}
      />
      {/* Handle Render action Accept Friend Self */}
      {relationWithUser?.relation === 'reject' && (
        <div className="my-24 bg-lightgray px-4 py-6 rounded-2xl  flex flex-row items-center justify-between  mx-8">
          <Text variant="body_md__s" color="darkblue">
            {data!.last_name} đã gửi cho bạn lời mời kết bạn
          </Text>
          <RenderButton
            self={info?.user_name as string}
            reiceiver={user as string}
            classNames="flex flex-row"
            isShow={true}
          />
        </div>
      )}

      <PostForm classNames={cn('mt-32 mb-12')} data={info!} />
      <SectionProfileTag isSelf={isSelf} />
    </>
  );
};

export default ProfileModule;
