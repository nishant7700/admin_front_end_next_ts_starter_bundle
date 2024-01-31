import React from 'react';
import { ColorClient } from './components/client';

import * as qs from 'qs';
import { getColors } from '@/actions/color';

const Colors = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const queryString = qs.stringify(searchParams, {
    encodeValuesOnly: true,
  });
  const colors = await getColors(queryString);
  return (
    <div className="p-4">
      <ColorClient data={colors} />
    </div>
  );
};

export default Colors;
