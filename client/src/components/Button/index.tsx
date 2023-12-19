import Link from 'next/link';

import s from './Button.module.scss';
import React from 'react';
import { cn } from '@/utils';

const Button: React.FC<TButton & React.HTMLProps<HTMLButtonElement>> = ({
  href,
  onClick,
  type,
  title,
  Icons,
  classNames,
  children,
  typeButton,
  isLoading,
  ...props
}) => {
  let Comp: any = 'button';
  return (
    <Comp
      className={cn(classNames, s[type])}
      {...props}
      type={typeButton}
      {...props}
      onClick={onClick}
    >
      {Icons && (isLoading ? <span className={cn(s.loading)}></span> : <Icons />)}
      {type !== 'icon' && <p>{children}</p>}
    </Comp>
  );
};
export default Button;
