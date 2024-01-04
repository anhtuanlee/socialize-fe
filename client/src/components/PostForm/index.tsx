import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { cn } from '@/utils';
import React, { useEffect, useState } from 'react';
import { auth } from '@/types/data';
import ModelPost from './ModelForm';
import ImageCustom from '../ImageCustom';
import { useStore } from '@/stores/stores';

type TPostForm = {
  classNames?: string;
};

const PostForm: React.FC<TPostForm> = ({ classNames }) => {
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false);
  const { info: data } = useStore();
  useEffect(() => {
    if (isOpenModel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenModel]);
  return (
    <section className={cn('mx-auto relative w-11/12', classNames)}>
      <div className={cn('flex flex-row  items-center justify-between gap-4 ')}>
        <figure className="w-16 h-16 rounded-full relative overflow-hidden">
          <ImageCustom type="avatar" src={data?.avatar} alt={data?.full_name} />
        </figure>
        <input
          readOnly
          onClick={() => setIsOpenModel(true)}
          placeholder={`${data?.last_name} ơi. Đang nghĩ gì thế ?`}
          className={cn(
            'rounded-[32px] flex-1 p-4  focus:outline-ashgray border-solid border-[2px] border-colgray'
          )}
        />
      </div>
      <ModelPost isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} info={data!} />
    </section>
  );
};

export default PostForm;
