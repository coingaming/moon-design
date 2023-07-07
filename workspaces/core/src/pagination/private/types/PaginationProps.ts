type PaginationProps = {
  className?: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  hrefsArray?: string[];
  edgePageCount?: number;
  middlePagesSiblingCount?: number;
};

export default PaginationProps;
