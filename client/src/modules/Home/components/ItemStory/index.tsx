import { IconAdd } from '@/components/IconSvg';
import Text from '@/components/Text';
import { story } from '@/types/data';
import Image from 'next/image';
import React from 'react';

const ItemStory: React.FC<{ data: story.TItemStory; first?: boolean }> = ({ data, first }) => {
  return (
    <div className="min-w-[76px] aspect-[0.86]  rounded-xl overflow-hidden">
      {first ? (
        <div className="flex h-full w-full justify-center items-center relative">
          <Image src={data.image} fill alt={data.alt} className="absolute" />
          <div className="flex flex-col z-10 items-center justify-end gap-4 pb-4 h-full w-full backdrop-blur-sm">
            <Text variant="body_md__b" color="white">
              Add Story
            </Text>
            <IconAdd />
          </div>
        </div>
      ) : (
        <figure className="w-full h-full relative">
          <Image src={data.image} fill alt={data.alt} className="absolute" />
        </figure>
      )}
    </div>
  );
};

export default ItemStory;
