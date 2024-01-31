import React from 'react';

const Colors = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  return (
    <div className='p-4'>
      <h3> Dashboard </h3>
    </div>
  );
};

export default Colors;
