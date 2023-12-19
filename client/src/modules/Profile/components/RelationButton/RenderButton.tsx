import { userService } from '@/api';
import { friendService } from '@/api/friendService';
import Button from '@/components/Button';
import {
  IconAcceptFriend,
  IconAddFriend,
  IconDeleteFriend,
  IconEditProfile,
  IconRejectFriend,
  IconShare,
} from '@/components/IconSvg';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

type TRenderButton = {
  reiceiver: string;
  self: string;
  icon?: boolean;
  type?: string;
};

const RenderButton: React.FC<TRenderButton> = ({ reiceiver, self, icon = false }) => {
  const keyUser = userService.getKeyUser(reiceiver);
  const { data, mutate, isValidating } = useSWR(keyUser, userService.getUserInfo, {
    revalidateOnReconnect: true,
    revalidateOnMount: true,
  });
  const handleSendRequest = async () => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.addFriendRequest(friendService.ADD);
    mutate(data);
  };
  const handleRejectRequest = async () => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.rejectFriendRequest(friendService.REJECT);
    mutate(data);
  };
  const handleAcceptRequest = async () => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.acceptFriendRequest(friendService.ACCEPT);
    mutate(data);
  };
  const handleRemoveFriend = async () => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.deleteFriend(friendService.DELELE);
    mutate(data);
  };
  const handleLog = async () => {
    console.log('test');
  };
  const renderButton = (
    title: string,
    onClick: () => Promise<void>,
    key: number,
    Icon: () => JSX.Element,
    type?: string
  ) => (
    <Button
      isLoading={isValidating}
      key={key}
      type={icon ? 'icon' : type ? 'primary' : 'border'}
      classNames={type && '!bg-[#150AA1]'}
      onClick={onClick}
      Icons={Icon}
    >
      {title}
    </Button>
  );

  const renderButtons = (
    titles: string[],
    handlers: (() => Promise<void>)[],
    Icon: (() => JSX.Element)[],
    type?: string[]
  ) => (
    <div className="flex flex-row gap-8">
      {titles.map((title, index) =>
        renderButton(title, handlers[index], index, Icon[index], type && type[index])
      )}
    </div>
  );

  const handleAction = (relation: TStatusFriend) => {
    switch (relation) {
      case 'pending':
        return renderButton('Hủy kết bạn', handleRejectRequest, 0, IconRejectFriend);
      case 'friend':
        return renderButton('Xóa Bạn', handleRemoveFriend, 0, IconDeleteFriend);
      case 'reject':
        return renderButtons(
          ['Chấp nhận lời mời', 'Xóa lời mời'],
          [handleAcceptRequest, handleRejectRequest],
          [IconAcceptFriend, IconRejectFriend],
          ['primary']
        );
      case 'stranger':
        return renderButton('Thêm bạn bè', handleSendRequest, 0, IconAddFriend);
      case 'self':
        return renderButtons(
          ['Edit Profile', 'Share'],
          [handleLog, handleLog],
          [IconEditProfile, IconShare]
        );
      default:
        return null;
    }
  };

  return handleAction(data?.status);
};

export default RenderButton;
