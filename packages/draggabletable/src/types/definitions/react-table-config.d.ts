import { UseResizeColumnsColumnProps } from 'react-table';

declare module 'react-table' {
  export interface ColumnInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseResizeColumnsColumnProps<D> { }
}
