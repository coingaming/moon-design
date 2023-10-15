import type { Row } from 'react-table';
import ClipProps from './ClipProps';
import type RowSizes from './RowSizes';
import type RowSubComponentProps from './RowSubComponentProps';

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
  ) => ((row: Row<D>, callback?: () => React.Dispatch<React.SetStateAction<{[key: string]: boolean;}>>) => void | (() => void)) | undefined;
  renderRowSubComponent?: (props: RowSubComponentProps) => JSX.Element;
  selectable?: boolean;
  useCheckbox?: boolean;
  rowSize?: RowSizes;
  isCellBorder?: boolean;
  textClip?: ClipProps;
};

export default RenderRowsProps;
