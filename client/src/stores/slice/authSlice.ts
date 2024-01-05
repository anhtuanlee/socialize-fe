import { StateCreator } from 'zustand';

export const createAuthSlice: StateCreator<store.TAuth, []> = (set) => ({
    isLogin: false,
    info: undefined,
    accessToken: '',

    setIsLogin: (is: boolean) => set(() => ({ isLogin: is })),
    setAccecssToken: (token: string) => set(() => ({ accessToken: token })),
    setInfo: (data) => {
        return set(() => {
            return { info: data };
        });
    },
});
