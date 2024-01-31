import { Card } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import React from 'react';
import { Button } from '@/components/ui/button';
import ColorForm from '../components/color-form';
import { getColor } from '@/actions/color';

const Colors = async ({ params }: { params: { colorId: string } }) => {
  const { colorId } = params;

  const color = await getColor(colorId);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm edit={false} initialData={color} open={true} />
      </div>
    </div>
  );
};

export default Colors;
