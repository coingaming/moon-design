import React, { useState } from 'react';
import { Checkbox } from '@heathmont/moon-core';
import { ColorNames } from '@heathmont/moon-themes';
import { Cell, Row } from 'react-table';
import BodyTR from '../components/BodyTR';
import CheckboxTD from '../components/CheckboxTD';
import TD from '../components/TD';
import { RowSpanHeader } from '../hooks/useRowSpan';

type RenderSpanRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  rowSpanHeaders: RowSpanHeader[];
  getOnRowClickHandler: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  getOnRowSelectHandler?: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
  selectable?: boolean;
  useCheckbox?: boolean;
};

const renderSpanRows = ({
  rows,
  prepareRow,
  getOnRowClickHandler,
  getOnRowSelectHandler,
  evenRowBackgroundColor,
  defaultRowBackgroundColor,
  rowSpanHeaders,
  selectable,
  useCheckbox,
}: RenderSpanRowsProps) => {
  if (!rows) return;
  return rows.map(
    (
      row: Row<{
        isSelected?: boolean;
        backgroundColor?: ColorNames;
        fontColor?: ColorNames;
      }>,
      index: number
    ) => {
      prepareRow(row);

      const onRowClickHandler = getOnRowClickHandler
        ? getOnRowClickHandler(row)
        : () => undefined;
      const onRowSelectHandler = getOnRowSelectHandler
        ? getOnRowSelectHandler(row)
        : () => undefined;
      const backgroundColor = row.original?.backgroundColor
        ? row.original?.backgroundColor
        : index % 2
        ? evenRowBackgroundColor
        : defaultRowBackgroundColor;
      const fontColor = row.original?.fontColor;
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
      const [isSelected, setSelected] = useState(row.original?.isSelected);

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
          customBackground={!!row.original?.backgroundColor}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          isSelected={isSelected}
          onClick={
            selectable
              ? onRowSelectHandler
                ? () => {
                    setSelected(!isSelected);
                    onRowSelectHandler(row);
                  }
                : onRowClickHandler
                ? () => onRowClickHandler(row)
                : undefined
              : onRowClickHandler
              ? () => onRowClickHandler(row)
              : undefined
          }
        >
          {useCheckbox && (
            <TD selectable={true}>
              <CheckboxTD>
                <Checkbox
                  checked={isSelected}
                  onClick={(e: Event) => e.stopPropagation()}
                  onChange={() => {
                    setSelected(!isSelected);

                    if (onRowSelectHandler) onRowSelectHandler(row);
                  }}
                />
              </CheckboxTD>
            </TD>
          )}

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
    }
  );
};

export default renderSpanRows;
