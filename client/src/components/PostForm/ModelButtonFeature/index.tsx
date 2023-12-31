import Button from '@/components/Button';
import Text from '@/components/Text';
import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';
import React from 'react';

function ModelButtonFeature({ typeContent }: { typeContent: string }): JSX.Element {
  const { setIsSelectImg } = useStore();
  return (
    <div className="absolute bg-white z-2 border-t-[1px] py-12 px-8 border-solid border-colgray  w-full   bottom-0 flex flex-row justify-between items-center ">
      <div className={cn('flex flex-row gap-12  ')}>
        {DATA_ICON_FOMR_POST.map((item) => {
          const Icon = item.icon;
          return (
            <span onClick={() => setIsSelectImg(true)}>
              <Icon key={item.id} />
            </span>
          );
        })}
      </div>

      <Button type="primary" typeButton="submit" disabled={!typeContent.trim()}>
        <Text variant="body_sm__s" color={!typeContent.trim() ? 'ashgray' : 'white'}>
          Post
        </Text>
      </Button>
    </div>
  );
}

export default ModelButtonFeature;
