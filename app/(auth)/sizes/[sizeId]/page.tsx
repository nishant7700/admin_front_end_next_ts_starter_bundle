import { Card } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import React from 'react';
import { columns } from '../components/column';
import { Button } from '@/components/ui/button';
import SizeForm from './components/size-form';
import { getSize } from '@/actions/size';

const Sizes = async ({ params }: { params: { sizeId: string } }) => {
  const { sizeId } = params;
  const size = await getSize(sizeId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm edit={size ? true : false} initialData={size} open={true} />
      </div>
    </div>
  );
};

export default Sizes;
