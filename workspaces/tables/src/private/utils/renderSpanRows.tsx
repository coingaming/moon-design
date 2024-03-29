import React, { useState, Fragment } from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';
import type { Cell, Row } from 'react-table';
import BodyTR from '../../components/BodyTR';
import TD from '../../components/TD';
import type RowSpanHeaderProps from '../../private/types/RowSpanHeaderProps';
import type RenderSpanRowsProps from '../types/RenderSpanRowsProps';

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
  rowSize,
  isCellBorder,
}: RenderSpanRowsProps) => {
  if (!rows) return;
  const [hoveredRow, setHoveredRow] = useState('');

  return rows.map(
    (
      row: Row<{
        isSelected?: boolean;
        backgroundColor?: string;
        fontColor?: string;
      }>,
      index: number
    ) => {
      prepareRow(row);
      const rowProps = row.getRowProps();

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
        rowSpanHeaders.some((rowSpanHeader: RowSpanHeaderProps) =>
          row.cells.some(
            (cell: Cell<{}>) =>
              cell.column &&
              rowSpanHeader.id === cell.column.id &&
              rowSpanHeader.value === cell.value
          )
        );
      const [isSelected, setSelected] = useState(row.original?.isSelected);

      const makeCellForRowSpanned = (cell: Cell<{}>) => (
        <TD
          key={cell.getCellProps().key}
          reactTableProps={{ ...cell.getCellProps() }}
          isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
          rowSize={rowSize}
          isCellBorder={isCellBorder}
        />
      );

      const makeCellForNormalRow = (cell: Cell<{}>) => (
        <TD
          key={cell.getCellProps().key}
          reactTableProps={{ ...cell.getCellProps() }}
          isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
          rowSize={rowSize}
          isCellBorder={isCellBorder}
        >
          {cell.render('Cell')}
        </TD>
      );

      return (
        <Fragment key={`${row.id}-${rowProps.key}`}>
          <BodyTR
            {...row.getRowProps()}
            withOffset={!isRowSpanned}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            isSelected={isSelected}
            isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
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
            onHoverToggle={
              getOnRowClickHandler || getOnRowSelectHandler
                ? (hover?: boolean) =>
                    setHoveredRow(hover ? `${row.id}-${rowProps.key}` : '')
                : undefined
            }
          >
            {useCheckbox && (
              <TD
                selectable={true}
                rowSize={rowSize}
                isCellBorder={isCellBorder}
                role="cell"
              >
                <div className="flex items-center h-full w-full justify-center ps-2">
                  <Checkbox
                    id={row.id}
                    checked={isSelected}
                    onClick={(e: any) => e.stopPropagation()}
                    onChange={() => {
                      setSelected(!isSelected);

                      if (onRowSelectHandler) onRowSelectHandler(row);
                    }}
                  />
                </div>
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
        </Fragment>
      );
    }
  );
};

export default renderSpanRows;
