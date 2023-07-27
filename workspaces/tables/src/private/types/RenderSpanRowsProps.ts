import type RowSizes from './RowSizes';
import type RowSpanHeaderProps from './RowSpanHeaderProps';
import type { Row } from 'react-table';

type RenderSpanRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  rowSpanHeaders: RowSpanHeaderProps[];
  getOnRowClickHandler?: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  getOnRowSelectHandler?: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  evenRowBackgroundColor: string;
  defaultRowBackgroundColor: string;
  selectable?: boolean;
  useCheckbox?: boolean;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
};

export default RenderSpanRowsProps;
