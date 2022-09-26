import React, { useRef, useState } from 'react';

import {
  useTable,
  Column,
  useFlexLayout,
  useResizeColumns,
  useSortBy,
} from 'react-table';
import Footer from '../components/Footer';
import Minimap from '../components/Minimap';
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
  withFooter?: boolean;
  miniMap?: boolean;
};

function Table<
  Columns extends readonly Column<object>[],
  Data extends readonly object[]
>({
  columns,
  data,
  defaultColumn,
  withCellBorder,
  withFooter,
  miniMap,
}: Props<Columns, Data>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useSortBy,
    useFlexLayout,
    useResizeColumns
  );
  const handleMultiSortBy = (column, setSortBy, meinSortBy) => {
    //set sort desc, aesc or none?
    const desc =
      column.isSortedDesc === true
        ? undefined
        : column.isSortedDesc === false
        ? true
        : false;

    setSortBy([{ id: column.id, desc }, ...meinSortBy]);
  };
  const tableRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <table {...getTableProps()} className={table}>
      <thead className={thead}>
        {headerGroups.map((headerGroup) => (
          <tr className={trHeader} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className={th}
                {...column.getHeaderProps()}
                onClick={() => handleMultiSortBy(column, useSortBy, sortBy)}
              >
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
            <tr
              className={classNames(trBody, 'hover:shadow-moon-xs')} //hover:bg-piccolo/[.12]
              {...row.getRowProps()}
            >
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
      {withFooter && (
        <Footer headerBackgroundColor={''}>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()} className={trHeader}>
              {footerGroup.headers.map((column) => (
                <th className={th} {...column.getFooterProps()}>
                  {column.render('Footer')}
                </th>
              ))}
            </tr>
          ))}
        </Footer>
      )}
      {miniMap && (
        <div className="relative w-full h-full">
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
                  <tr
                    className={classNames(trBody, 'hover:shadow-moon-xs')} //hover:bg-piccolo/[.12]
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className={classNames(
                            td,
                            withCellBorder && tdDevider
                          )}
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
            {withFooter && (
              <Footer headerBackgroundColor={''}>
                {footerGroups.map((footerGroup) => (
                  <tr
                    {...footerGroup.getFooterGroupProps()}
                    className={trHeader}
                  >
                    {footerGroup.headers.map((column) => (
                      <th className={th} {...column.getFooterProps()}>
                        {column.render('Footer')}
                      </th>
                    ))}
                  </tr>
                ))}
              </Footer>
            )}
          </table>
          <Minimap
            numberOfColumns={4}
            tableRef={tableRef}
            footerRef={footerRef}
          />
        </div>
      )}
    </table>
  );
}

export default Table;
