import React from 'react';
import BodyTR from '../components/BodyTR';
import TD from '../components/TD';
import { RowSpanHeader } from '../hooks/useRowSpan';
import { ColorNames } from '@heathmont/moon-themes';

type RenderSpanRowsProps = {
  rows: any;
  prepareRow: any;
  rowSpanHeaders: RowSpanHeader[];
  getOnRowClickHandler: (row: any) => any;
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
  return rows.map((row: any, index: number) => {
    prepareRow(row);

    const onRowClickHandler = getOnRowClickHandler(row);
    const hasOnRowClickHandler = typeof onRowClickHandler === 'function';
    const backgroundColor =
      index % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;
    const isRowSpanned =
      rowSpanHeaders &&
      rowSpanHeaders.some((rowSpanHeader: any) =>
        row.cells.some(
          (cell: any) =>
            cell.column &&
            rowSpanHeader.id === cell.column.id &&
            rowSpanHeader.value === cell.value
        )
      );

    const makeCellForRowSpanned = (cell: any) => (
      <TD {...cell.getCellProps()} />
    );

    const makeCellForNormalRow = (cell: any) => (
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
        {row.cells.map((cell: any) => {
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
