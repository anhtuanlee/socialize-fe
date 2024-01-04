'use client';

import { postService } from '@/api/postService';
import Button from '@/components/Button';
import { IconArrowBack, IconClose } from '@/components/IconSvg';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';
import { auth } from '@/types/data';
import { cn } from '@/utils';
import React, { Dispatch, SetStateAction, useState } from 'react';
import useSWR from 'swr';
import ModelButtonFeature from '../ModelButtonFeature';
import ModelSelectImg from '../ModelSelectImg';
import ModelUser from '../ModelUser';
import ModelSelectImgCustom from '../ModelCustomSelectImg';

type TModelPost = {
  isOpenModel: boolean;
  setIsOpenModel: Dispatch<SetStateAction<boolean>>;
  info: auth.TDataUser;
};
const ModelPost: React.FC<TModelPost> = ({ isOpenModel, setIsOpenModel, info }) => {
  const { mutate } = useSWR({ path: postService.KEY_GET }, postService.getPost);
  const {
    postMode,
    isSelectImg,
    isOpenSelectCustomImg,
    listSelectImg,
    setContent,
    setListSelectImg,
    setIsOpenSelectCustomImg,
  } = useStore();
  const [text, setText] = useState<string>('');

  const handleSubmitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    const headers = form.getHeaders?.() ?? { 'Content-Type': 'multipart/form-data' };
    const { content } = Object.fromEntries(new FormData(form).entries());
    const newContent =
      typeof content === 'string' ? content.split(/\n{2,}/).filter((item) => item + '\n') : [];
    setContent(newContent);
    await postService.createPost(
      postService.KEY_CREATE,
      {
        content: newContent,
        files_posts: listSelectImg,
        mode: postMode,
      },
      {
        headers: {
          ...headers,
        },
      }
    );
    setIsOpenModel(false);
    setListSelectImg(null);
    setContent(['']);
    mutate();
  };

  return (
    <div
      className={cn(
        'fixed  z-30 inset-0 bg-[#f3f3f4c1] flex items-center justify-center',
        isOpenModel ? 'block' : 'hidden'
      )}
    >
      <div
        className={cn(
          'bg-white absolute w-[50vw] min-h-[40vh] max-h-[70vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xl'
        )}
      >
        <header className="w-full flex justify-center py-8 border-b-[1px] border-solid border-colgray">
          <Text variant="body_lg__b" color="darkblue">
            {isOpenSelectCustomImg ? 'Ảnh/Video' : 'Tạo Bài Viết'}
          </Text>
          {isOpenSelectCustomImg ? (
            <span className="absolute left-4 top-4">
              <Button
                onClick={() => setIsOpenSelectCustomImg(false)}
                Icons={IconArrowBack}
                type="icon"
              />
            </span>
          ) : (
            <span className="absolute right-4 top-4">
              <Button onClick={() => setIsOpenModel(false)} Icons={IconClose} type="icon" />
            </span>
          )}
        </header>
        <form
          encType="multipart/form-data"
          className={`overflow-hidden  ${
            isOpenSelectCustomImg ? 'h-[50vh]' : 'mb-[100px] h-[calc(60vh-200px)]'
          }`}
          onSubmit={(e) => handleSubmitForm(e)}
        >
          {isOpenSelectCustomImg ? (
            <ModelSelectImgCustom />
          ) : (
            <>
              <div className={cn('w-full overflow-scroll rounded-md h-full relative')}>
                <ModelUser data={info} />
                <textarea
                  placeholder={`${info?.last_name} ơi. Đang nghĩ gì thế ?`}
                  className={cn('w-full py-6 px-8 focus:outline-none whites')}
                  name="content"
                  rows={6}
                  onChange={(e) => setText(e.target.value)}
                  wrap="soft"
                />
                {isSelectImg && <ModelSelectImg />}
              </div>
              <ModelButtonFeature isHavesText={text} />
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModelPost;
