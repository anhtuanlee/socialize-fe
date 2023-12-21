'use client';
import { auth } from '@/types/data';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createAuthSlice } from './slice/authSlice';

export const useStore = create<auth.TToken & auth.TAuthLogin>()(
    devtools((...a) => ({
        ...createAuthSlice(...a),
    }))
);
