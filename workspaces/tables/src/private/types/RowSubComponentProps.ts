import type { Row } from 'react-table';

type RowSubComponentProps<D extends object = {}> = {
  row: Row<D>;
  backgroundColor: string;
};

export default RowSubComponentProps;
