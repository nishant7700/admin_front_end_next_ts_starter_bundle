import React from 'react';

import ColorForm from './components/color-form';
import { getColor } from '@/actions/color';

const Colors = async ({ params }: { params: { colorId: string } }) => {
  const { colorId } = params;

  const color = await getColor(colorId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm
          edit={color ? true : false}
          initialData={color}
          open={true}
        />
      </div>
    </div>
  );
};

export default Colors;
