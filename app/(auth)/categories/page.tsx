import React from 'react';
import { CategoryClient } from './components/client';

import * as qs from 'qs';
import { getCategories } from '@/actions/category';

const Categories = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const queryString = qs.stringify(searchParams, {
    encodeValuesOnly: true,
  });
  const categories = await getCategories(queryString);
  return (
    <div className="p-4">
      <CategoryClient data={categories} />
    </div>
  );
};

export default Categories;
