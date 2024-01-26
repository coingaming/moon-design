import type RowSizes from './RowSizes';
import type TableVariant from './TableVariant';

type THProps = {
  headerBackgroundColor?: string;
  stickySide?: string;
  children?: React.ReactNode;
  reactTableProps?: any;
  isLastColumn?: boolean;
  variant?: TableVariant;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
};

export default THProps;
