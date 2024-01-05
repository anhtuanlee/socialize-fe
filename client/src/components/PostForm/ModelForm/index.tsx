'use client';

import { postService } from '@/api/postService';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';
import React from 'react';
import useSWR from 'swr';
import HeaderPost from '../HeaderPost/indext';
import ModelCreatePost from '../ModelCreatePost';
import ModelSelectImgCustom from '../ModelCustomSelectImg';
import { helper } from '@/helper/core';

const ModelPost: React.FC = () => {
  const { mutate } = useSWR({ path: postService.KEY_GET }, postService.getPost);
  const {
    postMode,
    isOpenSelectCustomImg,
    listImgPost,
    setContent,
    setIsOpenPostForm,
    removeAllImgPost,
    isOpenPostForm,
  } = useStore();

  const handleSubmitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    const headers = form.getHeaders?.() ?? { 'Content-Type': 'multipart/form-data' };
    const { content } = Object.fromEntries(new FormData(form).entries());

    if (content || listImgPost?.listUrl) {
      const newContent = helper.convertContentToArray(content);
      await postService.createPost(
        postService.KEY_CREATE,
        {
          content: newContent,
          files_posts: listImgPost.listFiles,
          mode: postMode,
        },
        {
          headers: {
            ...headers,
          },
        }
      );
      setIsOpenPostForm(false);
      removeAllImgPost();
      setContent('');
      mutate();
    }
  };

  return (
    <div
      className={cn(
        'fixed  z-30 inset-0 bg-[#f3f3f4c1] flex items-center justify-center',
        isOpenPostForm ? 'block' : 'hidden'
      )}
    >
      <div
        className={cn(
          'bg-white absolute w-[50vw] min-h-[40vh] max-h-[70vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xl'
        )}
      >
        <HeaderPost />
        <form
          encType="multipart/form-data"
          className={`overflow-hidden  ${
            isOpenSelectCustomImg ? 'h-[50vh]' : 'mb-[100px] h-[calc(60vh-200px)]'
          }`}
          onSubmit={(e) => handleSubmitForm(e)}
        >
          {isOpenSelectCustomImg ? <ModelSelectImgCustom /> : <ModelCreatePost />}
        </form>
      </div>
    </div>
  );
};

export default ModelPost;
