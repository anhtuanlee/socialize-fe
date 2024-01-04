import React from 'react';
import Image, { StaticImageData } from 'next/image';
import avatar_default from '@Images/avatar_default.jpg';
import img_default from '@Images/image-default.png';
import { cn } from '@/utils';

type TImageCustom = {
  className?: string;
  src?: string | StaticImageData;
  alt?: string;
  isFill?: boolean;
  type: 'avatar' | 'default';
};

const ImageCustom: React.FC<TImageCustom> = ({ className, src, alt, type, isFill = true }) => {
  const imgError = {
    avatar: avatar_default,
    default: img_default,
  };
  const altError = {
    avatar: 'user',
    default: 'img error',
  };
  return (
    <Image
      placeholder="blur"
      fill={isFill}
      src={src ?? imgError[type]}
      objectFit={'contain'}
      blurDataURL={
        'https://thicc-af.mywaifulist.moe/waifus/ganyu-genshin-impact/I12RIY4CzYIZtavjhONgqZ9ZxGMKfdQRo0x0BQQ0.jpg'
      }
      loading="lazy"
      alt={alt ?? altError[type]}
      className={cn('absolute', className)}
    />
  );
};

export default ImageCustom;
