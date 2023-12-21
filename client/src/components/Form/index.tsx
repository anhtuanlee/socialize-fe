'use client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

import { authenSevice } from '@/api/index';
import { DATA_FORM_LOGIN, DATA_FORM_SIGNIN } from '@/constant/data-form';

import { storageService } from '@/helper';
import { useStore } from '@/stores/stores';
import Button from '../Button';
import FormDateDropdown from './FormDateDropdown';
import FormInput from './FormInput';
import { setCookie } from 'cookies-next';

export default function Form({ type }: TForm) {
  const { push } = useRouter();
  const { setAccecssToken, setIsLogin } = useStore();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    let result;
    try {
      event.preventDefault();
      const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
      if (type === 'login') {
        result = await authenSevice.logIn(formData);
        if (result) {
          setAccecssToken(result.accessToken);
          setIsLogin(true);
          push('/');
        }
      } else {
        console.log(formData);

        result = await authenSevice.signIn(formData);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const dataForm = type === 'login' ? DATA_FORM_LOGIN : DATA_FORM_SIGNIN;
  return (
    <form
      action="login.cgi"
      autoComplete={'off'}
      onSubmit={(e) => onSubmit(e)}
      className="flex  w-[30rem] flex-col gap-8 mt-10 "
    >
      {dataForm.map((input) => {
        if (Array.isArray(input)) {
          return (
            <div className="flex flex-row gap-4">
              {input.map((inputChild) => {
                return <FormInput data={inputChild} />;
              })}
            </div>
          );
        } else {
          return <FormInput data={input} />;
        }
      })}
      {type === 'login' ? (
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remeber me
          </span>
        </label>
      ) : (
        <>
          <FormDateDropdown />
          <p className="text-xs">
            By signing up you agree to our{' '}
            <span className=" text-xs text-primary">Terms of Service</span> and
            <span className=" text-xs text-primary"> Privacy policy </span> and confirm that you are
            at least 18 years old
          </p>
        </>
      )}
      <Button typeButton="submit" className="text-2xl" type="primary">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </Button>
    </form>
  );
}
