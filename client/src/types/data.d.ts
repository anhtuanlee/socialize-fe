import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

declare namespace store {
  type TAuthLogin = {
    isLogin: boolean;
    setIsLogin: (is: boolean) => void;
    info: auth.TDataUser | undefined;
    setInfo: (data: auth.TDataUser) => void;
  };
  type TToken = {
    accessToken: string;
    setAccecssToken: (token: string) => void;
  };
  type TMode = {
    postMode: 'PUBLIC' | 'FRIEND' | 'PRIVATE';
    setPostMode: (mode: post.TMode) => void;
  };
  type TReply = {
    idReply: string;
    setIsReply: (id: string) => void;
  };
  type TSelectImg = {
    isSelectImg: boolean;
    setIsSelectImg: (b: boolean) => void;
  };
  type TListSelectImg = {
    listSelectImg: string[];
    setListSelectImg: (img: string) => void;
  };
  type TPost = TReply & TSelectImg & TMode & TListSelectImg;
  type TAuth = TToken & TAuthLogin;
}
declare global {
  type TButton = {
    onClick?: () => void;
    type: TButtonType;
    href?: string;
    classNames?: string;
    title?: string;
    Icons?: any;
    children?: ReactNode;
    isLoading?: boolean;
    typeButton?: 'submit' | 'button';
    disabled?: boolean;
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
  type TButtonType =
    | 'rounded'
    | 'text'
    | 'primary'
    | 'secondary'
    | 'select'
    | 'border'
    | 'icon'
    | 'icon-border';
  type TStatusUser = {
    relation: TStatusFriend;
    follow: boolean;
  };
  type TDataSelect = {
    id: number;
    title: string;
    name: string;
    icon: () => JSX.Element;
  };
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
    status?: TStatusUser;
  };
  type TUserFriend = TDataUser & {
    common_friend: {
      friend_name: string;
    }[];
  };
}

declare namespace post {
  type TPost = {
    content: string[];
    comment: comment.TDataComment[];
    reaction: any;
    mode: post.TMode;
    id: string;
    cover: string;
    user: auth.TUserFriend;
    gender: string;
    role: string;
    user_name: string;
    avatar: string;
    image: string;
    createAt: Date;
  };
  type TDataPost = {
    content?: string[];
    image?: string[];
    formImage?: FormData | undefined;
    mode?: post.TMode;
  };
  type TQueryGet = {
    offset: number;
    limit: number;
  };
  type TMode = 'PUBLIC' | 'PRIVATE' | 'FRIEND';
}

declare namespace story {
  type TItemStory = {
    image: string | StaticImageData;
    alt: string;
  };
}

declare namespace comment {
  type TDataComment = {
    content: string[];
    id: string;
    img: string;
    user_name: string;
    children: comment.TDataComment[];
    user: auth.TDataUser;
    parent_id: string;
    post_id: string;
    createAt: Date;
    updateAt: string;
    level: number;
  };
  type TDataPost = {
    content?: string[];
    image?: string;
    post_id: string;
    parent_id?: string;
  };
}
