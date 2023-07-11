import React, { useState } from 'react';
import { IconButton, Pagination } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

const hrefsArray = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];

const Example = () => {
  const [page, setPage] = useState<number>(0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <>
      <Pagination
        totalPages={hrefsArray.length}
        hrefsArray={hrefsArray}
        currentPage={page}
        setCurrentPage={handlePageChange}
      >
        <Pagination.PrevButton as="div">
          {({ disabled }) => (
            <IconButton
              icon={<ControlsChevronLeftSmall className="rtl:rotate-180" />}
              variant="secondary"
              size="sm"
              disabled={disabled}
              aria-label="Previous"
            />
          )}
        </Pagination.PrevButton>
        <Pagination.Pages />
        <Pagination.NextButton as="div">
          {({ disabled }) => (
            <IconButton
              icon={<ControlsChevronRightSmall className="rtl:rotate-180" />}
              variant="secondary"
              size="sm"
              disabled={disabled}
              aria-label="Next"
            />
          )}
        </Pagination.NextButton>
      </Pagination>
    </>
  );
};

export default Example;
