type PagesProps = {
  children?: React.ReactNode;
  className?: string;
  currentPage: number;
  totalPages: number;
  isTruncable?: boolean;
  maxNotTruncablePages?: number;
  truncableText?: JSX.Element | string;
  locale?: string;
  hrefsArray?: string[] | unknown[];
  as?: React.ElementType<any>;
};

export default PagesProps;
