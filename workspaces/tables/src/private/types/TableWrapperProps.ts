import type TableVariant from './TableVariant';

type TableWrapperProps = {
  reactTableProps: any;
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
  style?: React.CSSProperties;
  className?: string;
  variant?: TableVariant;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  headerBackgroundColor?: string;
  children?: React.ReactNode;
  tableRef?: React.ForwardedRef<HTMLDivElement>;
  onScroll?: (tableRef: any) => any;
};

export default TableWrapperProps;
