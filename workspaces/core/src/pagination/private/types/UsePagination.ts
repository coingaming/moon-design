type UsePagination = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pages: number[];
  hrefsArray?: string[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  previousPages: number[];
  isPreviousTruncable: boolean;
  middlePages: number[];
  isNextTruncable: boolean;
  nextPages: number[];
};

export default UsePagination;
