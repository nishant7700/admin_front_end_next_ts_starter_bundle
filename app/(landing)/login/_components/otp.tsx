'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
const DialogBox = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-80 mt-3'>
          <Mail className='mr-2 h-4 w-4' /> Login with Email
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Enter OTP</DialogTitle>
          <DialogDescription>
            Please check your email for OTP.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              OTP
            </Label>
            <Input id='name' defaultValue='Enter Otp' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
