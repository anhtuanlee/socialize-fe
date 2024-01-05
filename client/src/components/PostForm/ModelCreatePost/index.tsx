import React, { useState } from 'react';
import ModelSelectImg from '../ModelSelectImg';
import ModelUser from '../ModelUser';
import { cn } from '@/utils';
import ModelButtonFeature from '../ModelButtonFeature';
import { useStore } from '@/stores/stores';

function ModelCreatePost() {
  const [text, setText] = useState<string>('');
  const { isSelectImg, info } = useStore();
  return (
    <>
      <div className={cn('w-full overflow-scroll rounded-md h-full relative')}>
        <ModelUser data={info!} />
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
  );
}

export default ModelCreatePost;
