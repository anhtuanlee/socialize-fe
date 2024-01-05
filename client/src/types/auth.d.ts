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
