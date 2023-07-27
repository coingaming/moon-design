import type RowSizes from './RowSizes';
import type RowSubComponentProps from './RowSubComponentProps';
import type { Row } from 'react-table';

type RenderRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  evenRowBackgroundColor: string;
  defaultRowBackgroundColor: string;
  getOnRowClickHandler?: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  getOnRowSelectHandler?: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  renderRowSubComponent?: (props: RowSubComponentProps) => JSX.Element;
  selectable?: boolean;
  useCheckbox?: boolean;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
};

export default RenderRowsProps;
