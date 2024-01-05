import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { cn } from '@/utils';
import React, { useEffect, useState } from 'react';
import ModelPost from './ModelForm';
import ImageCustom from '../ImageCustom';
import { useStore } from '@/stores/stores';

type TPostForm = {
  classNames?: string;
};

const PostForm: React.FC<TPostForm> = ({ classNames }) => {
  const { info: data, isOpenPostForm, setIsOpenPostForm } = useStore();
  useEffect(() => {
    if (isOpenPostForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenPostForm]);
  return (
    <section className={cn('mx-auto relative w-11/12', classNames)}>
      <div className={cn('flex flex-row  items-center justify-between gap-4 ')}>
        <figure className="w-16 h-16 rounded-full relative overflow-hidden">
          <ImageCustom type="avatar" src={data?.avatar} alt={data?.full_name} />
        </figure>
        <input
          readOnly
          onClick={() => setIsOpenPostForm(true)}
          placeholder={`${data?.last_name} ơi. Đang nghĩ gì thế ?`}
          className={cn(
            'rounded-[32px] flex-1 p-4  focus:outline-ashgray border-solid border-[2px] border-colgray'
          )}
        />
      </div>
      <ModelPost />
    </section>
  );
};

export default PostForm;
