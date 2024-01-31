'use client';
import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

import React from 'react';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Trash } from 'lucide-react';
import { addColor, updateColor } from '@/actions/color';

const formSchema = z.object({
  name: z.string().min(2),
  value: z.string().min(4).regex(/^#/, {
    message: 'String must be a valid hex code',
  }),
});
type FieldFormValues = z.infer<typeof formSchema>;

const ColorForm = ({
  edit,
  initialData,
  field,
  id,
  open,
}: {
  edit: boolean;
  initialData?: any;
  field?: {
    name: string;
    value: string;
  };
  id?: string;
  open?: boolean;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FieldFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? initialData
      : {
          name: '',
          value: '',
        },
  });
  const title = initialData ? 'Edit color' : 'Create color';
  const description = initialData ? 'Edit a color.' : 'Add a new color';
  const onSubmit = async (data: FieldFormValues) => {
    try {
      setLoading(true);
      if (edit && initialData) {
        await updateColor(initialData._id, data);
        form.reset();
      } else {
        // await addLeadField(data);
        await addColor(data);
      }
      router.refresh();
      const toastMessage = `Field ${data.name} created successfully.`;
      toast.success(toastMessage);
      router.push('/colors');
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  const action = initialData ? 'Save changes' : 'Create';
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full "
        >
          <div className="grid grid-cols-3 gap-5 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-x-4">
                      <Input
                        disabled={loading}
                        placeholder="Color value"
                        {...field}
                      />
                      <div
                        className="border p-4 rounded-full"
                        style={{ backgroundColor: field.value }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <Button type="submit" className="ml-auto">
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ColorForm;
