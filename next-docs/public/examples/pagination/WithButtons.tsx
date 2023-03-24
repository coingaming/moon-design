import React, { useState } from 'react';
import { Pagination, IconButton } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeft,
  ControlsChevronRight,
} from '@heathmont/moon-icons-tw';

const Example = () => {
  const [page, setPage] = useState<number>(0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <>
      <Pagination
        totalPages={26}
        currentPage={page}
        setCurrentPage={handlePageChange}
      >
        <Pagination.PrevButton as="div">
          {({ disabled }) => (
            <IconButton
              icon={<ControlsChevronLeft className="rtl:rotate-180" />}
              variant="secondary"
              size="sm"
              disabled={disabled}
            />
          )}
        </Pagination.PrevButton>
        <Pagination.Pages />
        <Pagination.NextButton as="div">
          {({ disabled }) => (
            <IconButton
              icon={<ControlsChevronRight className="rtl:rotate-180" />}
              variant="secondary"
              size="sm"
              disabled={disabled}
            />
          )}
        </Pagination.NextButton>
      </Pagination>
    </>
  );
};

export default Example;
