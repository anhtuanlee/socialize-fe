import FormCustomSelect from '@/components/FormSelectCustom';
import ImageCustom from '@/components/ImageCustom';
import Text from '@/components/Text';
import { DATA_MODE_POST } from '@/constant/data-form';
import { auth, post } from '@/types/data';
import { cn } from '@/utils';
import React, { Dispatch, SetStateAction } from 'react';

type TModelUser = {
  data: auth.TDataUser;
  classNames: string;
};

const ModelUser: React.FC<TModelUser> = ({ data, classNames }) => {
  return (
    <div className={cn('flex flex-row gap-4 pl-4 pt-6', classNames)}>
      <figure className={cn('w-14 h-14 rounded-full overflow-hidden relative')}>
        <ImageCustom alt={data?.full_name} src={data?.avatar} type="avatar" />
      </figure>
      <div className={cn('flex flex-col items-start justify-between relative')}>
        <Text variant="body_sm__b" color="darkblue">
          {data?.full_name}
        </Text>
        <FormCustomSelect data={DATA_MODE_POST} />
      </div>
    </div>
  );
};

export default ModelUser;
