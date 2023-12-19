import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { cn } from '@/utils';
import React, { useState } from 'react';
import Button from '../Button';
import Text from '../Text';
import { auth } from '@/types/data';
import ModelPost from './ModelForm';

type TPostForm = {
  classNames?: string;
  data: auth.TDataUser;
};

const PostForm: React.FC<TPostForm> = ({ classNames, data }) => {
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false);

  return (
    <section className={cn('mx-4  relative aspect-5/1 ', classNames)}>
      <input
        onFocus={() => setIsOpenModel(true)}
        // onBlur={() => setIsOpenModel(false)}
        placeholder={`${data?.last_name} ơi. Đang nghĩ gì thế ?`}
        className={cn(
          'rounded-2xl absolute left-8 top-6 right-8 py-6 px-4 focus:outline-ashgray border-solid border-[2px] border-lightgray'
        )}
      />
      <ModelPost isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} />
    </section>
  );
};

export default PostForm;
