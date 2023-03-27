import React, { useState } from 'react';
import { Pagination } from '@heathmont/moon-core-tw';

const Example = () => {
  const [page, setPage] = useState<number>(0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <>
      <Pagination
        totalPages={11}
        currentPage={page}
        setCurrentPage={handlePageChange}
      >
        <Pagination.PrevButton>Previous</Pagination.PrevButton>
        <Pagination.Pages />
        <Pagination.NextButton>Next</Pagination.NextButton>
      </Pagination>
    </>
  );
};

export default Example;
