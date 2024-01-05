import { handleAddGallery, handleDeleteGallery } from '@/feature/handleActionGallery';
import { helper } from '@/helper/core';
import { StateCreator } from 'zustand';

export const createPostSlice: StateCreator<store.TPost, []> = (set) => ({
    isSelectImg: false,
    isOpenSelectCustomImg: false,
    isOpenPostForm: false,
    postMode: 'PUBLIC',
    idReply: '',
    content: '',
    listImgPost: {
        listFiles: undefined,
        listUrl: undefined,
    },

    addListImgPost: (files: FileList) =>
        set((state) => {
            const listFiles = handleAddGallery(state?.listImgPost?.listFiles!, files);
            const listDataPath = helper.convertFilestToBlob(listFiles)!;
            return {
                listImgPost: {
                    listFiles: listFiles,
                    listUrl: listDataPath,
                },
            };
        }),
    removeListImgPost: (name: string) =>
        set((state) => {
            const listFiles = handleDeleteGallery(state?.listImgPost?.listFiles!, name);
            const listDataPath = helper.convertFilestToBlob(listFiles)!;
            return {
                listImgPost: {
                    listFiles: listFiles,
                    listUrl: listDataPath,
                },
            };
        }),
    removeAllImgPost: () =>
        set(() => ({
            listImgPost: {
                listFiles: undefined,
                listUrl: undefined,
            },
        })),
    setIsOpenPostForm: (b: boolean) => set(() => ({ isOpenPostForm: b })),
    setIsOpenSelectCustomImg: (bo: boolean) => set(() => ({ isOpenSelectCustomImg: bo })),
    setContent: (content: string) => set(() => ({ content: content })),
    setIsSelectImg: (b: boolean) => set(() => ({ isSelectImg: b })),
    setPostMode: (mode: post.TMode) => set(() => ({ postMode: mode })),
    setIsReply: (id: string) => set(() => ({ idReply: id })),
});
