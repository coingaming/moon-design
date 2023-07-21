import type RowSizes from './RowSizes';
import type TableVariant from './TableVariant';

type TDProps = {
  reactTableProps?: any;
  selectable?: boolean;
  isExpanded?: boolean;
  isLastRow?: boolean;
  hasParent?: boolean;
  isSelected?: boolean | any;
  customBackground?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  children?: React.ReactNode;
  stickySide?: string;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
  isHovered?: boolean;
  variant?: TableVariant;
  headerBackgroundColor?: string;
  onClick?: () => void;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
};

export default TDProps;
