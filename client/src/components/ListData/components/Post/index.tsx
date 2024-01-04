'use client';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';
import { post } from '@/types/data';
import React, { useEffect, useRef, useState } from 'react';
import UserItem from '../User';
import FormComment from './components/FormComment';
import GroupButton from './components/GroupButton';
import ListComment from './components/ListComment';
import GalleryModel from '@/components/GalleryModel';

const PostItem: React.FC<{ data: post.TPost }> = ({ data }) => {
  const { info } = useStore();
  const wrapPost = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapPost} className="rounded-lg shadow-md">
      <UserItem
        data={data.user}
        type="post"
        postData={{ mode: data.mode, postTimer: data.createAt }}
        classNames={'shadow-none'}
      />
      <div className="px-4 pb-4">
        <div className="flex flex-col ">
          {data.content.map((line, index) => {
            const newData = line.split('\n');
            if (newData.length > 1) {
              return newData.map((line, index) => {
                return (
                  <Text className="break-all" key={index} variant="body_sm__r">
                    {line}
                  </Text>
                );
              });
            } else {
              return (
                <Text key={index} variant="body_sm__r" className="py-4 break-all">
                  {line}
                </Text>
              );
            }
          })}
          {data.img.length > 0 && <GalleryModel data={data.img} />}
        </div>
        <GroupButton />
        <FormComment data={info!} mode={data.mode} post_id={data.id} />
        <ListComment data={data.comment} post={data} />
      </div>
    </div>
  );
};

export default PostItem;
