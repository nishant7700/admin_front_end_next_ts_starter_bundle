import React from 'react';
import { SizeClient } from './components/client';
import { getSizes } from '@/actions/size';
import * as qs from 'qs';

const Sizes = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const queryString = qs.stringify(searchParams, {
    encodeValuesOnly: true,
  });
  const sizes = await getSizes(queryString);
  return <div className='p-4'>{sizes && <SizeClient data={sizes} />}</div>;
};

export default Sizes;
