import React from 'react';
import BodyTR from '../components/BodyTR';
import TD from '../components/TD';
import { RowSpanHeader } from '../hooks/useRowSpan';
import { ColorNames } from '@heathmont/moon-themes';
import { Cell, Row, UseExpandedRowProps } from 'react-table';

type RenderSpanRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  rowSpanHeaders: RowSpanHeader[];
  getOnRowClickHandler: (row: Row<D> | UseExpandedRowProps<D>) => any;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
};

const renderSpanRows = ({
  rows,
  prepareRow,
  getOnRowClickHandler,
  evenRowBackgroundColor,
  defaultRowBackgroundColor,
  rowSpanHeaders,
}: RenderSpanRowsProps) => {
  if (!rows) return;
  return rows.map((row: Row<{}>, index: number) => {
    prepareRow(row);

    const onRowClickHandler = getOnRowClickHandler(row);
    const hasOnRowClickHandler = typeof onRowClickHandler === 'function';
    const backgroundColor =
      index % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;
    const isRowSpanned =
      rowSpanHeaders &&
      rowSpanHeaders.some((rowSpanHeader: RowSpanHeader) =>
        row.cells.some(
          (cell: Cell<{}>) =>
            cell.column &&
            rowSpanHeader.id === cell.column.id &&
            rowSpanHeader.value === cell.value
        )
      );

    const makeCellForRowSpanned = (cell: Cell<{}>) => (
      <TD {...cell.getCellProps()} />
    );

    const makeCellForNormalRow = (cell: Cell<{}>) => (
      <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
    );

    return (
      <BodyTR
        {...row.getRowProps()}
        withOffset={!isRowSpanned}
        backgroundColor={backgroundColor}
        onClick={
          hasOnRowClickHandler ? () => onRowClickHandler(row) : undefined
        }
      >
        {row.cells.map((cell: Cell<{}>) => {
          if (!rowSpanHeaders) return makeCellForNormalRow(cell);

          const rowSpanHeader = rowSpanHeaders.find(
            (rowSpanHeader) =>
              rowSpanHeader &&
              cell.column &&
              rowSpanHeader.id === cell.column.id
          );
          const isRowSpanned =
            rowSpanHeader && rowSpanHeader.value === cell.value;

          if (isRowSpanned) return makeCellForRowSpanned(cell);

          if (rowSpanHeader) rowSpanHeader.value = cell.value;

          return makeCellForNormalRow(cell);
        })}
      </BodyTR>
    );
  });
};

export default renderSpanRows;
