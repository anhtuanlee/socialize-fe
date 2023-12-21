import { userService } from '@/api';

export const handleFilterDataProfile = (
    params: TFilterPRofile
): {
    key: string;
    action: (path: string) => Promise<unknown>;
} => {
    switch (params) {
        case 'followers':
            return {
                key: userService.getKeyFollower(),
                action: userService.getListFollower,
            };
        case 'following':
            return {
                key: userService.getKeyFollowing(),
                action: userService.getListFollowing,
            };
        case 'friends':
            return {
                key: userService.getKeyFriendUser(),
                action: userService.getListFriend,
            };
        // case 'album':
        //   console.log('handle after');
        //   break;
        // case 'posts':
        //   console.log('handle after');
        default:
            return {
                key: userService.getKeyFriendUser(),
                action: userService.getListFriend,
            };
    }
};
