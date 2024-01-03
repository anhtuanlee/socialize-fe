'use client';

import { DATA_STORIES } from '@/constant/data-stories';
import React from 'react';
import ItemStory from './ItemStory';
import { useStore } from '@/stores/stores';

const Stories: React.FC = () => {
  const { info } = useStore();
  return (
    <div className="w-full px-8 pt-16 pb-10 overflow-hidden">
      <div className="flex flex-row gap-4 overflow-x-scroll">
        <ItemStory data={{ image: info?.avatar!, alt: info?.full_name! }} first />
        {DATA_STORIES.map((item) => {
          return <ItemStory data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Stories;
