'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import moment from 'moment';
import { Checkbox } from '@/components/ui/checkbox';
import { ImageOff } from 'lucide-react';
export type CategoryColumn = {
  id: string;
  name: string;
  value: string;
  created_at: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'image',
    header: 'Category Image',
    enableHiding: false,
    cell: ({ row }) => (
      <div>
        {row.getValue('image') ? (
          <div>hello</div>
        ) : (
          <div>
            <ImageOff />
          </div>
        )}
      </div>
    ),
  },

  {
    accessorKey: 'name',
    header: 'Category Name ',
    enableHiding: false,
  },

  {
    accessorKey: 'created_at',
    header: 'Date',
    cell: ({ row }) => (
      <div> {moment(row.getValue('created_at')).format('DD-MM-YYYY')} </div>
    ),
  },

  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
