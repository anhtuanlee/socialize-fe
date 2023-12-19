import { ReactNode } from 'react';

declare global {
  type TButton = {
    onClick?: () => void;
    type:
    | 'rounded'
    | 'text'
    | 'primary'
    | 'secondary'
    | 'select'
    | 'border'
    | 'icon'
    | 'icon-border';
    href?: string;
    classNames?: string;
    title?: string;
    Icons?: any;
    children?: ReactNode;
    isLoading?: boolean;
    typeButton?: 'submit' | 'button';
  };
  type TPropsDataButton = {
    href?: string;
    onClick?: () => void;
  };
  type TSidebarItem = {
    href: string;
    icon: any;
    title: string;
  };
  type TForm = {
    type: 'login' | 'signin';
  };
  type TFormAuth = {
    [k: string]: FormDataEntryValue;
  };
  type TFormDataLogin = {
    typeInput?: string;
    name: string;
    placeholder?: string;
    type?: string;
    messageError?: string;
    options?: string[] | number[];
    onChange?: (e: any) => void;
    disabled?: boolean;
    value?: number | string;
    pattern?: string;
    require?: boolean;
  };
  type TFilterProfile = 'posts' | 'friends' | 'followers' | 'following' | 'album';
  type TStatusFriend = 'self' | 'friend' | 'stranger' | 'reject' | 'pending';
}

declare namespace auth {
  type TDataUser = {
    id: string;
    cover: string;
    first_name: string;
    last_name: string;
    full_name: string;
    gender: string;
    role: string;
    user_name: string;
    avatar: string;
    image: string;
    status?: TStatusFriend;
  };
  type TAuthLogin = {
    isLogin: boolean;
    setIsLogin: (is: boolean) => void;
    info: TDataUser | null;
    setInfo: (data: TDataUser) => void;
  };
  type TToken = {
    accessToken: string;
    setAccecssToken: (token: string) => void;
  };
}

declare namespace post {
  type TPost = {
    // content: string;
    id: string;
    cover: string;
    first_name: string;
    last_name: string;
    full_name: string;
    gender: string;
    role: string;
    user_name: string;
    avatar: string;
    image: string;
  };
}
