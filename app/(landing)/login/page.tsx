import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import DialogBox from './_components/otp';
import { DialogTrigger } from '@/components/ui/dialog';
import { LoginForm } from './_components/loginForm';

const Login = () => {
  return (
    <>
      <div className='flex justify-center h-full'>
        <div className='bg-slate-100 w-full px-4 h-full flex items-center flex-1'>
          <img src='/logo.png' alt='logo' className='w-full' />
        </div>
        <div className='flex-1 px-2 py-2'>
          <div className='mr-4'></div>

          <div className='flex justify-center items-center flex-col w-full py-12 '>
            <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-50 mt-16'>
              Login an Account
            </h1>
            <p className='text-sm text-muted-foreground '>
              Enter your email below to login your account
            </p>

            <LoginForm initialData={null} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
