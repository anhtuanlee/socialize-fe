'use client';
import { ReactNode, useEffect } from 'react';

import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import Sidebar from '@/components/Sidebar';
import Suggestion from '@/components/Suggestion';
import { useStore } from '@/stores/stores';
import { authenSevice } from '@/api';
import { NextResponse } from 'next/server';
import { redirect, useRouter } from 'next/navigation';
import { useUpdateEffect } from '@/hooks/useUpdateEffect';
import { cn } from '@/utils';

export default function Layout({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const { setInfo, setAccecssToken, info, accessToken } = useStore();

  useEffect(() => {
    const controller = new AbortController();
    const fetch = async () => {
      try {
        const result = await authenSevice.getUserProfile();
        setInfo(result);
      } catch (err) {
        try {
          const newAccessToken = await authenSevice.refreshToken();
          setAccecssToken(newAccessToken.accessToken);
          // const result = await authenSevice.getUserProfile();
          // setInfo(result);
        } catch (err) {
          push('/login');
        }
      }
    };
    fetch();
    return () => {
      controller.abort();
    };
  }, [accessToken]);

  return (
    <div>
      <Header />
      <div className={cn('w-full  mt-32  grid h-[90vh] grid-cols-13')}>
        <Sidebar className="fixed top-32 bottom-0 w-[21.8%] rounded-lg border-r-[1px] border-solid border-colgray" />
        <Wrapper className={'bg-white  col-end-10 col-start-4 rounded-2xl'}>{children}</Wrapper>
        <Suggestion className="col-span-4 bg-slate-600 rounded-lg border-l-[1px] border-solid border-colgray" />
      </div>
    </div>
  );
}
