'use client';
import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

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

import { Textarea } from '@/components/ui/textarea';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Check, ChevronsUpDown } from 'lucide-react';

import { addCategory, updateCategory } from '@/actions/category';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandInput,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(1),
  meta_title: z.string().optional(),
  description: z.string().optional(),
  meta_keywords: z.string().optional(),
  parent_category: z.any().optional(),
  slug: z.string().min(1),
  meta_description: z.string().optional(),
});
type FieldFormValues = z.infer<typeof formSchema>;

const CategoryForm = ({
  initialData,
  edit = true,
}: {
  initialData?: any;
  edit?: boolean;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FieldFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? initialData
      : {
          name: '',
          description: '',
          image: '',
          slug: '',
          meta_title: '',
          meta_description: '',
          parent_category: '',
          meta_keywords: '',
        },
  });
  const title = initialData
    ? edit
      ? 'Edit Category'
      : 'Duplicate category'
    : 'Create Category';
  const description = initialData
    ? edit
      ? 'Edit a Category'
      : 'Duplicate a category'
    : 'Add a new category';
  const onSubmit = async (data: FieldFormValues) => {
    try {
      setLoading(true);
      if (initialData && edit) {
        await updateCategory(initialData._id, data);
        form.reset();
      } else {
        // await addLeadField(data);
        await addCategory(data);
        console.log(data);
      }
      router.refresh();
      const toastMessage = `Field ${data.name} created successfully.`;
      toast.success(toastMessage);
      router.push('/categories');
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
      form.reset();
    }
  };
  const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
  ] as const;
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
          <div className="grid grid-cols-3 gap-5 w-full"></div>
          <div className="md:grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Category name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parent_category"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="mb-2">Parent Category</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            ' justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? languages.find(
                                (language) => language.value === field.value
                              )?.label
                            : 'Select language'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[450px] p-0">
                      <Command className="w-full">
                        <CommandInput placeholder="Search language..." />
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {languages.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() => {
                                form.setValue(
                                  'parent_category',
                                  language.value
                                );
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  language.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {language.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-1 gap-8">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="md:grid md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="meta_title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Meta Title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="meta_keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Keyword</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Meta Keyword"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>slug</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="Slug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:grid md:grid-cols-1 gap-8">
              <FormField
                control={form.control}
                name="meta_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={loading}
                        placeholder="Meta Description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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

export default CategoryForm;
