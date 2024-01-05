import { commentService } from '@/api/commentService';
import { postService } from '@/api/postService';
import Button from '@/components/Button';
import { IconSend } from '@/components/IconSvg';
import ImageCustom from '@/components/ImageCustom';
import { auth, post } from '@/types/data';
import React, { useState } from 'react';
import useSWR from 'swr';

type TCommentForm = {
  data: auth.TDataUser;
  mode: post.TMode;
  post_id: string;
  parent_id?: string;
};

function FormComment({ data, mode, post_id, parent_id }: TCommentForm): JSX.Element {
  const [valueComment, setValueComment] = useState<string>('');
  const { mutate } = useSWR({ path: postService.KEY_GET }, postService.getPost);
  const handleCreateComment = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { content, ...formData } = Object.fromEntries(new FormData(e.currentTarget).entries());
    if (content !== '') {
      const newContent =
        typeof content === 'string' ? content.split(/\n{2,}/).filter((item) => item + '\n') : [];

      await commentService.createComment(commentService.KEY_CREATE, {
        post_id: post_id,
        parent_id: parent_id,
        content: newContent,
        ...formData,
      });
      mutate();
      setValueComment('');
    }
  };
  return (
    <div className="flex flex-row items-center w-full gap-4 py-4">
      <figure className="relative w-12 h-12 overflow-hidden rounded-full">
        <ImageCustom src={data?.avatar} alt={data?.full_name} type="avatar" />
      </figure>
      <form className="flex-1" onSubmit={handleCreateComment}>
        <div className="flex items-center px-4 py-2 rounded-2xl bg-lightgray ">
          <textarea
            id="chat"
            value={valueComment}
            onChange={(e) => setValueComment(e.target.value)}
            name="content"
            rows={1}
            className="focus:outline-none bg-transparent block  py-2.5 w-full text-lg text-darkgray rounded-lg "
            placeholder={`Viết bình luận ${mode === 'PUBLIC' ? 'công khai' : '...'}`}
          />
          <Button disabled={!valueComment} type="select" Icons={IconSend} typeButton="submit" />
        </div>
      </form>
    </div>
  );
}

export default FormComment;
