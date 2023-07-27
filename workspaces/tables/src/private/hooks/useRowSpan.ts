import type RowSpanHeaderProps from '../types/RowSpanHeaderProps';
import type { TableInstance } from 'react-table';

const useInstance = (instance: TableInstance<object>) => {
  const { allColumns } = instance;

  let rowSpanHeaders: RowSpanHeaderProps[] = [];

  allColumns.forEach((column: any) => {
    const { id, withRowSpan } = column;

    if (withRowSpan !== undefined) {
      rowSpanHeaders = [...rowSpanHeaders, { id, value: null }];
    }
  });

  Object.assign(instance, { rowSpanHeaders });
};

// TODO
// get the type of hooks: any
const useRowSpan = (hooks: any) => {
  hooks.useInstance.push(useInstance);
};

export default useRowSpan;
