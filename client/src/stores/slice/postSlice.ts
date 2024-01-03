import { post, store } from '@/types/data';
import { StateCreator } from 'zustand';

export const createPostSlice: StateCreator<store.TPost, []> = (set) => ({
    postMode: 'PUBLIC',
    idReply: '',
    isSelectImg: false,
    listSelectImg: [],
    setListSelectImg: (img: string) =>
        set((state) => ({ listSelectImg: [...state.listSelectImg, img] })),
    setIsSelectImg: (b: boolean) => set(() => ({ isSelectImg: b })),
    setPostMode: (mode: post.TMode) => set(() => ({ postMode: mode })),
    setIsReply: (id: string) => set(() => ({ idReply: id })),
});
