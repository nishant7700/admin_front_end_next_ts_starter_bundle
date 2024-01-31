'use client';

import * as z from 'zod';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Mail, Trash } from 'lucide-react';

import { useParams, useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { login } from '@/actions/auth';

const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  initialData: null;
}

export const LoginForm: React.FC<LoginFormProps> = ({ initialData }) => {
  const { data: session, status } = useSession();
  console.log('Session Login', session, status);
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [status]);

  return (
    <div className='mt-4'>
      {status === 'loading' || status === 'authenticated' ? (
        <div className='flex justify-center items-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900'></div>
        </div>
      ) : (
        <Button onClick={() => signIn()} className='ml-auto'>
          Login
        </Button>
      )}
    </div>
  );
};
