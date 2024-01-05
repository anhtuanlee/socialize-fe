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
        img: string[];
        createAt: Date;
    };
    type TDataPost = {
        content?: string[];
        files_posts?: FileList | null;
        mode?: post.TMode;
    };
    type TQueryGet = {
        offset: number;
        limit: number;
    };
    type TImagesItem = {
        url?: string;
        name?: string;
    };
    type TMode = 'PUBLIC' | 'PRIVATE' | 'FRIEND';
}
