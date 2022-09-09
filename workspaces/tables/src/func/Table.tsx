import React from 'react';
import { useTable, Column, useFlexLayout, useResizeColumns } from 'react-table';
import {
  table,
  thead,
  tbody,
  trHeader,
  trBody,
  th,
  td,
  tdDevider,
} from '../styled/StyledTable';
import classNames from '../utils/classnames';

type Props<Columns, Data> = {
  columns: Columns;
  data: Data;
  defaultColumn: Partial<Column<object>>;
  withCellBorder?: boolean;
};

export default function Table<
  Columns extends readonly Column<object>[],
  Data extends readonly object[]
>({ columns, data, defaultColumn, withCellBorder }: Props<Columns, Data>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useFlexLayout,
      useResizeColumns
    );
  return (
    <table {...getTableProps()} className={table}>
      <thead className={thead}>
        {headerGroups.map((headerGroup) => (
          <tr className={trHeader} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className={th} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={tbody}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className={trBody} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className={classNames(td, withCellBorder && tdDevider)}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
