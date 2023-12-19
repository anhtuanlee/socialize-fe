import {
  BellSidebarIcon,
  BookmarkSidebarIcon,
  HomeSidebarIcon,
  MessageSidebarIcon,
  MoreSidebarIcon,
  ProfileSidebarIcon,
} from '@/components/IconSvg';
export const ROUTE = {
  PROFILE: '/profile',
  HOME: '/',
};

export const DATA_ROUTE = [
  {
    href: ROUTE.HOME,
    title: 'Home',
    icon: HomeSidebarIcon,
  },
  {
    href: '/',
    title: 'Notifycation',
    icon: BellSidebarIcon,
  },
  {
    href: '/',
    title: 'Message',
    icon: MessageSidebarIcon,
  },
  {
    href: '/',
    title: 'Bookmark',
    icon: BookmarkSidebarIcon,
  },
  {
    href: ROUTE.PROFILE,
    title: 'Profile',
    icon: ProfileSidebarIcon,
  },
  {
    href: '/',
    title: 'More',
    icon: MoreSidebarIcon,
  },
];
