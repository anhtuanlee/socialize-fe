import { post, store } from '@/types/data';
import { StateCreator } from 'zustand';

export const createPostSlice: StateCreator<store.TPost, []> = (set) => ({
    postMode: 'PUBLIC',
    idReply: '',
    isOpenSelectCustomImg: false,
    isSelectImg: false,
    content: [''],
    listSelectImg: null,
    listImgViews: null,

    setListImgViews: (list: string[] | undefined) => set(() => ({ listImgViews: list })),
    setIsOpenSelectCustomImg: (bo: boolean) => set(() => ({ isOpenSelectCustomImg: bo })),
    setContent: (content: string[]) => set(() => ({ content: content })),
    setListSelectImg: (img: FileList | null) => set(() => ({ listSelectImg: img })),
    setIsSelectImg: (b: boolean) => set(() => ({ isSelectImg: b })),
    setPostMode: (mode: post.TMode) => set(() => ({ postMode: mode })),
    setIsReply: (id: string) => set(() => ({ idReply: id })),
});
