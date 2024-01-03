'use client';

import { comment, post } from '@/types/data';
import React from 'react';
import { helper } from '@/helper/core';
import ImageCustom from '@/components/ImageCustom';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';
import FormComment from '../Post/components/FormComment';
import { cn } from '@/utils';

function CommentItem({
  data,
  post,
  className,
  parent_id,
}: {
  data: comment.TDataComment;
  post: post.TPost;
  className?: string;
  parent_id: string;
}): JSX.Element {
  const { idReply, setIsReply, info } = useStore();
  const isReply = idReply === data.id;

  return (
    <div className={cn(className, 'py-4')}>
      <div className="flex flex-row gap-4 items-start">
        <figure className="relative overflow-hidden w-12 h-12 rounded-full shrink-0">
          <ImageCustom type="avatar" src={data?.user?.avatar} alt={data.user?.full_name} />
        </figure>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col rounded-3xl bg-lightgray w-auto px-4 py-3">
            <Text variant="body_s__b">{data.user?.full_name}</Text>

            {data.content.map((text, index) => {
              return (
                <Text
                  key={index}
                  data-lexical-text="true"
                  tag="span"
                  variant="body_s__r"
                  className="flex-shrink-0 w-full break-all"
                >
                  {text}
                </Text>
              );
            })}
          </div>
          <div className="flex flex-row gap-4">
            <Text color="ashgray" variant="body_s__r">
              {helper.convertDate(data.createAt)}
            </Text>
            <Text
              className="cursor-pointer hover:border-solid hover:border-b-[1px] border-darkgray"
              color="darkgray"
              variant="body_s__s"
            >
              Thích
            </Text>
            <Text
              className="cursor-pointer hover:border-solid hover:border-b-[1px] border-darkgray"
              color="darkgray"
              variant="body_s__s"
              onClick={(): void => setIsReply(data.id)}
            >
              Phản hồi
            </Text>
          </div>
          {isReply && (
            <FormComment data={info!} mode={post!.mode} post_id={post.id} parent_id={parent_id} />
          )}
        </div>
      </div>
      <div className="pl-12">
        {data?.children?.length > 0 &&
          data?.children?.map((itemChild) => {
            return (
              <CommentItem
                key={itemChild.id}
                data={itemChild}
                parent_id={itemChild.level === 2 ? itemChild.parent_id : itemChild.id}
                post={post}
              />
            );
          })}
      </div>
    </div>
  );
}

export default CommentItem;
