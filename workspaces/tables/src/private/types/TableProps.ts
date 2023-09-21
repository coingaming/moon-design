import type { Column, Row } from 'react-table';
import ClipProps from './ClipProps';
import type RowGaps from './RowGaps';
import type RowSizes from './RowSizes';
import type RowSubComponentProps from './RowSubComponentProps';
import type TableLayout from './TableLayout';
import type TableVariant from './TableVariant';

type TableProps<D extends object = {}> = {
  columns: ReadonlyArray<Column<D>>;
  data: readonly D[];
  defaultColumn?: Partial<Column<D>>;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  variant?: TableVariant;
  layout?: TableLayout;
  withFooter?: boolean;
  withMinimap?: boolean;
  expandedByDefault?: boolean;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  headerBackgroundColor?: string;
  rowGap?: RowGaps;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
  isSticky?: boolean;
  isSorting?: boolean;
  selectable?: boolean;
  useCheckbox?: boolean;
  textClip?: ClipProps;
  renderRowSubComponent?: (props: RowSubComponentProps) => JSX.Element;
  getOnRowClickHandler?: (row: Row<D>) => (row: Row<D>) => void | (() => void);
  getOnRowSelect?: () => (rows: Row<D>[]) => void | (() => void);
  updateMyData?: <T extends {}>(t: T) => void;
};

export default TableProps;
