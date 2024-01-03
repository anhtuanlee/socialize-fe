import React from 'react';
import Image, { StaticImageData } from 'next/image';
import avatar_default from '@Images/avatar_default.jpg';
import img_default from '@Images/image-default.png';
import { cn } from '@/utils';

type TImageCustom = {
  className?: string;
  src?: string | StaticImageData;
  alt?: string;
  type: 'avatar' | 'default';
};

const ImageCustom: React.FC<TImageCustom> = ({ className, src, alt, type }) => {
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
      fill
      src={src ?? imgError[type]}
      alt={alt ?? altError[type]}
      className={cn('absolute', className)}
    />
  );
};

export default ImageCustom;
