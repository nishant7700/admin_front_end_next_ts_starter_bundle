import React from 'react';

import CategoryForm from './components/category-form';
import { getCategory } from '@/actions/category';

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;

  const category = await getCategory(categoryId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
};

export default Category;
