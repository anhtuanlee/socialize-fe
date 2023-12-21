import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { cn } from '@/utils';
import React, { useState } from 'react';
import Button from '../Button';
import Text from '../Text';
import { auth } from '@/types/data';
import ModelPost from './ModelForm';
import Image from 'next/image';

type TPostForm = {
  classNames?: string;
  data: auth.TDataUser;
};

const PostForm: React.FC<TPostForm> = ({ classNames, data }) => {
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false);

  return (
    <section className={cn('mx-auto relative w-11/12', classNames)}>
      <div className={cn('flex flex-row  items-center justify-between gap-4 ')}>
        <figure className="w-16 h-16 rounded-full relative overflow-hidden">
          <Image src={data?.avatar} alt={data?.full_name} fill />
        </figure>
        <input
          onFocus={() => setIsOpenModel(true)}
          placeholder={`${data?.last_name} ơi. Đang nghĩ gì thế ?`}
          className={cn(
            'rounded-[32px] flex-1 p-4  focus:outline-ashgray border-solid border-[2px] border-colgray'
          )}
        />
      </div>
      <ModelPost isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} />
    </section>
  );
};

export default PostForm;
