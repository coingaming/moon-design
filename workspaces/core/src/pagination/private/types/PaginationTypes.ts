export type PaginationProps = {
  previousButtonLabel: string | JSX.Element;
  nextButtonLabel: string | JSX.Element;
  pageNumber: number;
  onChange: (pageNumber: number) => void;
  goToPageSection?: JSX.Element;
  changePageSizeSection?: JSX.Element;
  pageSizeSection?: JSX.Element;
  pageCount: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  className?: string;
};