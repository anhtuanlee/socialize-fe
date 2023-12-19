'use client';

import Button from '@/components/Button';
import { IconClose } from '@/components/IconSvg';
import Text from '@/components/Text';
import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';
import React, { Dispatch, SetStateAction } from 'react';

type TModelPost = {
  isOpenModel: boolean;
  setIsOpenModel: Dispatch<SetStateAction<boolean>>;
};
const ModelPost: React.FC<TModelPost> = ({ isOpenModel, setIsOpenModel }) => {
  const { info } = useStore();
  return (
    <div
      className={cn(
        'fixed inset-0 backdrop-blur-sm flex items-center justify-center',
        isOpenModel ? 'block' : 'hidden'
      )}
    >
      <div
        className={cn(
          'bg-white absolute z-20 w-[50vw] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-xl'
        )}
      >
        <form className="h-full relative">
          <header className="w-full flex justify-center py-8 border-b-[1px] border-solid border-colgray">
            <Text variant="body_lg__b" color="darkblue">
              Tạo Bài Viết
            </Text>
            <span className="absolute right-4 top-4">
              <Button onClick={() => setIsOpenModel(false)} Icons={IconClose} type="icon" />
            </span>
          </header>
          <div className={cn('w-full rounded-md relative')}>
            <textarea
              placeholder={`${info?.last_name} ơi. Đang nghĩ gì thế ?`}
              className={cn('absolute left-8 top-6 right-8 py-6 px-4 focus:outline-none whites')}
              name="text"
              rows={6}
              wrap="soft"
            />
          </div>
          <div className="absolute border-t-[1px] border-solid border-colgray  w-11/12 mx-10 pt-4  bottom-10 flex flex-row justify-between items-center ">
            <div className={cn('flex flex-row gap-12  ')}>
              {DATA_ICON_FOMR_POST.map((item) => {
                const Icon = item.icon;
                return <Icon key={item.id} />;
              })}
            </div>
            <div className={cn('flex flex-row justify-end    gap-8')}>
              <Button type="text">
                <Text variant="body_sm__b" color="darkblue">
                  Post Later
                </Text>
              </Button>
              <Button type="primary" typeButton="submit">
                <Text variant="body_sm__s" color="white">
                  Post
                </Text>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModelPost;
