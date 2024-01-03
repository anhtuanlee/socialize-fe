'use client';

import { postService } from '@/api/postService';
import Button from '@/components/Button';
import { IconClose } from '@/components/IconSvg';
import Text from '@/components/Text';
import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { useStore } from '@/stores/stores';
import { auth } from '@/types/data';
import { cn } from '@/utils';
import React, { Dispatch, SetStateAction, useState } from 'react';
import useSWR from 'swr';
import ModelUser from '../ModelUser';
import ModelSelectImg from '../ModelSelectImg';
import ModelButtonFeature from '../ModelButtonFeature';
import { checkPageScrolled } from '../../../../../../../../pj_company/autonomous/perceptron-web/src/utils/animation';

type TModelPost = {
  isOpenModel: boolean;
  setIsOpenModel: Dispatch<SetStateAction<boolean>>;
  info: auth.TDataUser;
};
const ModelPost: React.FC<TModelPost> = ({ isOpenModel, setIsOpenModel, info }) => {
  const { mutate } = useSWR({ path: postService.KEY_GET }, postService.getPost);
  const [typeContent, setTypeContent] = useState<string>('');
  const { postMode, isSelectImg, setIsSelectImg } = useStore();

  const handleSubmitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    const { content, ...formData } = Object.fromEntries(new FormData(e.currentTarget).entries());
    if (content) {
      const newContent =
        typeof content === 'string' ? content.split(/\n{2,}/).filter((item) => item + '\n') : [];
      const formInputFile = Array.from(form.elements).find(({ name }) => name === 'img');
      const formDataImg = new FormData();
      console.log(formInputFile!.files[0]);
      const xxx = formInputFile!.files[0];
      const fileReader = new FileReader();

      formDataImg.append('file', xxx);
      // for (const file of formInputFile!.files) {
      //   formDataImg.append('file', file);
      // }

      const headers = form.getHeaders?.() ?? { 'Content-Type': 'multipart/form-data' };
      console.log(formDataImg);

      await postService.createPost(
        postService.KEY_CREATE,
        {
          // ...formData,
          // content: newContent,
          // mode: postMode,
          formImage: formDataImg,
        },
        {
          headers: {
            ...headers,
          },
        }
      );
      // setTypeContent('');
      // setIsOpenModel(false);
      // mutate();
    }
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
          'bg-white absolute w-[50vw] h-[60vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xl'
        )}
      >
        <header className="w-full flex justify-center py-8 border-b-[1px] border-solid border-colgray">
          <Text variant="body_lg__b" color="darkblue">
            Tạo Bài Viết
          </Text>
          <span className="absolute right-4 top-4">
            <Button onClick={() => setIsOpenModel(false)} Icons={IconClose} type="icon" />
          </span>
        </header>
        <form
          encType="multipart/form-data"
          className="h-[calc(100%-60px)] relative overflow-hidden"
          onSubmit={(e) => handleSubmitForm(e)}
        >
          <div className={cn('w-full overflow-scroll rounded-md h-full relative')}>
            <ModelUser data={info!} classNames={cn('absolute left-0')} />
            <textarea
              placeholder={`${info?.last_name} ơi. Đang nghĩ gì thế ?`}
              className={cn('mt-24 w-full py-6 px-8 focus:outline-none whites')}
              name="content"
              rows={6}
              value={typeContent}
              onChange={(e): void => setTypeContent(e.target.value)}
              wrap="soft"
            />
            {isSelectImg && <ModelSelectImg />}
          </div>
          <ModelButtonFeature typeContent={typeContent} />
        </form>
      </div>
    </div>
  );
};

export default ModelPost;
