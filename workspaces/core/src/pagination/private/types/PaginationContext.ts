import { createContext } from 'react';
import type UsePagination from './UsePagination';

const defaultState: UsePagination = {
  currentPage: 0,
  setCurrentPage: () => {},
  pages: [],
  hasPreviousPage: false,
  hasNextPage: false,
  previousPages: [],
  isPreviousTruncable: false,
  middlePages: [],
  isNextTruncable: false,
  nextPages: [],
};

const PaginationContext = createContext(defaultState);
PaginationContext.displayName = 'PaginationContext';

export default PaginationContext;
