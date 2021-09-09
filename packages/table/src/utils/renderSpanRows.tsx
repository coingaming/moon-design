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
  return rows?.map((row: any, index: number) => {
    prepareRow(row);

    const onRowClickHandler = getOnRowClickHandler(row);
    const hasOnRowClickHandler = typeof onRowClickHandler === 'function';
    const backgroundColor =
      index % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;
    const isRowSpanned = rowSpanHeaders?.some((rowSpanHeader: any) =>
      row.cells.some(
        (cell: any) =>
          rowSpanHeader.id === cell.column?.id &&
          rowSpanHeader.value === cell.value
      )
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
          const rowSpanHeader = rowSpanHeaders?.find(
            (rowSpanHeader) => rowSpanHeader?.id === cell.column?.id
          );
          const isRowSpanned = rowSpanHeader?.value === cell.value;

          if (isRowSpanned) return <TD {...cell.getCellProps()} />;

          if (rowSpanHeader) rowSpanHeader.value = cell.value;

          return <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>;
        })}
      </BodyTR>
    );
  });
};

export default renderSpanRows;
