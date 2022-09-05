import React from 'react';
import { useTable, useBlockLayout, Column } from 'react-table';
import { FixedSizeList } from 'react-window';
import {
  table,
  td,
  th,
  trHeader,
  trBody,
  trBodyInner,
} from '../styled/StyledTable';

type Props<Columns, Data> = {
  columns: Columns;
  data: Data;
};

export default function Table<
  Columns extends readonly Column<object>[],
  Data extends readonly object[]
>({ columns, data }: Props<Columns, Data>) {
  const defaultColumn = React.useMemo(
    () => ({
      // TODO pass as a prop
      width: 150,
    }),
    []
  );

  // TODO pass as a prop
  const scrollBarSize = 0; // px;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout
  );

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({
            style,
          })}
          className={trBody}
        >
          <div className={trBodyInner}>
            {row.cells.map((cell) => {
              return (
                <div {...cell.getCellProps()} className={td}>
                  {cell.render('Cell')}
                </div>
              );
            })}
          </div>
        </div>
      );
    },
    [prepareRow, rows]
  );

  return (
    <div {...getTableProps()} className={table}>
      {headerGroups.map((headerGroup) => (
        <div {...headerGroup.getHeaderGroupProps()} className={trHeader}>
          {headerGroup.headers.map((column) => (
            <div {...column.getHeaderProps()} className={th}>
              {column.render('Header')}
            </div>
          ))}
        </div>
      ))}

      {/*  TODO pass as props */}
      <div {...getTableBodyProps()}>
        <FixedSizeList
          height={400}
          itemCount={rows.length}
          itemSize={60}
          width={totalColumnsWidth + scrollBarSize}
        >
          {RenderRow}
        </FixedSizeList>
      </div>
    </div>
  );
}
