'use client';
import { store } from '@/types/data';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createAuthSlice } from './slice/authSlice';
import { createPostSlice } from './slice/postSlice';

export const useStore = create<store.TAuth & store.TPost>()(
    devtools((...a) => ({
        ...createAuthSlice(...a),
        ...createPostSlice(...a),
    }))
);
