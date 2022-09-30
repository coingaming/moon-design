import React, { Fragment, useState } from 'react';
import { ColorNames } from '@heathmont/moon-themes-tw';
import { Cell, Row, UseExpandedRowProps } from 'react-table';
import BodyTR from '../components/BodyTR';
import CheckboxTD from '../components/CheckboxTD';
import TD from '../components/TD';
import { RowSubComponentProps } from '../func/Table';

type RenderRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
  getOnRowClickHandler: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  getOnRowSelectHandler?: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  renderRowSubComponent?: (props: RowSubComponentProps) => JSX.Element;
  selectable?: boolean;
  useCheckbox?: boolean;
};

const renderRows = ({
  rows,
  prepareRow,
  evenRowBackgroundColor,
  defaultRowBackgroundColor,
  getOnRowClickHandler,
  getOnRowSelectHandler,
  renderRowSubComponent,
  selectable,
  useCheckbox,
}: RenderRowsProps) => {
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
      const rowProps = row.getRowProps();
      const onRowClickHandler = getOnRowClickHandler
        ? getOnRowClickHandler(row)
        : () => undefined;
      const onRowSelectHandler = getOnRowSelectHandler
        ? getOnRowSelectHandler(row)
        : () => undefined;
      const rowId = row.id ? row.id.split('.') : [];
      const nextRow = rows[index + 1];
      const nextRowItem = nextRow as Row;
      const nextRowId =
        nextRowItem && nextRowItem.id ? nextRowItem.id.split('.') : [];

      const mainRowIndex = Number(rowId[0]);
      const backgroundColor = row.original?.backgroundColor
        ? row.original?.backgroundColor
        : mainRowIndex % 2
        ? evenRowBackgroundColor
        : defaultRowBackgroundColor;
      const fontColor = row.original?.fontColor;
      const isLastNestedRow = rowId.length > nextRowId.length;
      const isLastRow = nextRowId.length === 0 || nextRowId.length === 1;
      const [isSelected, setSelected] = useState(row.original?.isSelected);

      const expandedRow = row as unknown as UseExpandedRowProps<{}>;

      return (
        <Fragment key={`${row.id}-${rowProps.key}`}>
          <BodyTR
            {...rowProps}
            depth={expandedRow.depth}
            isExpanded={expandedRow.isExpanded}
            hasChildren={expandedRow.canExpand}
            hasParent={!!expandedRow.depth}
            isLastNestedRow={isLastNestedRow}
            isLastRow={isLastRow}
            isSelected={isSelected}
            customBackground={!!row.original?.backgroundColor}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
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
              <TD
                selectable={true}
                isExpanded={expandedRow.isExpanded}
                isLastRow={isLastRow}
                hasParent={!!expandedRow.depth}
                backgroundColor={backgroundColor}
                fontColor={fontColor}
                customBackground={!!row.original?.backgroundColor}
                isSelected={isSelected}
              >
                <CheckboxTD>
                  {/* <Checkbox
                    id={row.id}
                    checked={isSelected}
                    onClick={(e: any) => e.stopPropagation()}
                  /> */}
                  <input
                    type="checkbox"
                    onClick={(e) => e.stopPropagation()}
                    checked={isSelected}
                    onChange={() => {
                      setSelected(!isSelected);

                      if (onRowSelectHandler) onRowSelectHandler(row);
                    }}
                  />
                </CheckboxTD>
              </TD>
            )}

            {row.cells.map((cell: Cell<{}>) => (
              <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
            ))}
          </BodyTR>

          {expandedRow.isExpanded && !!renderRowSubComponent
            ? renderRowSubComponent({ row, backgroundColor })
            : null}
        </Fragment>
      );
    }
  );
};

export default renderRows;
