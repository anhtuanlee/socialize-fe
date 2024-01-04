import FormCustomSelect from '@/components/FormSelectCustom';
import ImageCustom from '@/components/ImageCustom';
import Text from '@/components/Text';
import { DATA_MODE_POST } from '@/constant/data-form';
import { auth, post } from '@/types/data';
import { cn } from '@/utils';
import React, { Dispatch, SetStateAction } from 'react';

type TModelUser = {
  data: auth.TDataUser;
  classNames?: string;
};

const ModelUser: React.FC<TModelUser> = ({ data, classNames }) => {
  return (
    <div className={cn('flex flex-row items-center gap-4 h-auto px-4 py-6', classNames)}>
      <figure className={cn('w-16 h-16 flex-shrink-0 rounded-full overflow-hidden relative')}>
        <ImageCustom alt={data?.full_name} src={data?.avatar} type="avatar" />
      </figure>
      <div className={cn('flex flex-col items-start justify-between gap-4  w-full relative')}>
        <Text variant="body_sm__b" color="darkblue">
          {data?.full_name}
        </Text>
        <FormCustomSelect data={DATA_MODE_POST} />
      </div>
    </div>
  );
};

export default ModelUser;
