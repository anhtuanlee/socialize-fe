import { auth, post } from '@/types/data';
import React from 'react';
import UserItem from './components/User';
import PostItem from './components/Post';
import { cn } from '@/utils';

type TListData<T> = {
  type: TFilterProfile;
  data: unknown;
};

const ListData = <T extends auth.TDataUser[] | post.TPost[]>({ data, type }: TListData<T>) => {
  const ItemData = (type: TFilterProfile) => {
    switch (type) {
      case 'followers':
        return UserItem;
      case 'following':
        return UserItem;
      case 'friends':
        return UserItem;
      case 'album':
        console.log('Havent Data');
        break;
      case 'posts':
        return PostItem;
      default:
        return UserItem;
    }
  };

  const Item = ItemData(type);
  return (
    <div className={cn('flex flex-col gap-8 p-10')}>
      {Array.isArray(data) && Item ? data.map((item) => <Item key={item?.id} data={item} />) : null}
    </div>
  );
};

export default ListData;
