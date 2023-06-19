import React from 'react';
import type UsePagination from '../types/UsePagination';

type UsePaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  edgePageCount?: number;
  middlePagesSiblingCount?: number;
};

const usePagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  edgePageCount = 1,
  middlePagesSiblingCount = 1,
}: UsePaginationProps): UsePagination => {
  const pages = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1);

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const isReachedToFirst = currentPage <= middlePagesSiblingCount;
  const isReachedToLast = currentPage + middlePagesSiblingCount >= totalPages;

  const middlePages = React.useMemo(() => {
    const middlePageCount = middlePagesSiblingCount * 2 + 1;
    if (isReachedToFirst) {
      return pages.slice(0, middlePageCount);
    }
    if (isReachedToLast) {
      return pages.slice(-middlePageCount);
    }
    return pages.slice(
      currentPage - middlePagesSiblingCount,
      currentPage + middlePagesSiblingCount + 1
    );
  }, [currentPage, pages]);

  const getAllPreviousPages = () => {
    return pages.slice(0, middlePages[0] - 1);
  };

  const previousPages = React.useMemo(() => {
    if (isReachedToFirst || getAllPreviousPages().length < 1) {
      return [];
    }
    return pages
      .slice(0, edgePageCount)
      .filter((p) => !middlePages.includes(p));
  }, [currentPage, pages]);

  const getAllNextPages = React.useMemo(() => {
    return pages.slice(
      middlePages[middlePages.length - 1],
      pages[pages.length]
    );
  }, [pages, middlePages]);

  const nextPages = React.useMemo(() => {
    if (isReachedToLast) {
      return [];
    }
    if (getAllNextPages.length < 1) {
      return [];
    }
    return pages
      .slice(pages.length - edgePageCount, pages.length)
      .filter((p) => !middlePages.includes(p));
  }, [middlePages, pages]);

  const isPreviousTruncable = React.useMemo(() => {
    // Is truncable if first value of middlePage is larger than last value of previousPages
    return middlePages[0] > previousPages[previousPages.length - 1] + 1;
  }, [previousPages, middlePages]);

  const isNextTruncable = React.useMemo(() => {
    // Is truncable if last value of middlePage is larger than first value of previousPages
    return middlePages[middlePages.length - 1] + 1 < nextPages[0];
  }, [nextPages, middlePages]);

  return {
    currentPage,
    setCurrentPage,
    pages,
    hasPreviousPage,
    hasNextPage,
    previousPages,
    isPreviousTruncable,
    middlePages,
    isNextTruncable,
    nextPages,
  };
};

export default usePagination;
