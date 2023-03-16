import React from 'react';

const usePagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  edgePageCount,
  middlePagesSiblingCount,
}) => {
  return {
    currentPage,
    setCurrentPage,
    totalPages,
    edgePageCount,
    middlePagesSiblingCount,
  };
};
