import React, {Fragment, useState} from 'react';
import { Checkbox } from '@heathmont/moon-core';
import { ColorNames } from '@heathmont/moon-themes';
import { Cell, Row, UseExpandedRowProps } from 'react-table';
import BodyTR from '../components/BodyTR';
import CheckboxTD from '../components/CheckboxTD';
import TD from '../components/TD';
import { RowSubComponentProps } from '../Table';

type RenderRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
  getOnRowClickHandler?: (
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
  useCheckbox
}: RenderRowsProps) => {
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean}>({});
  if (!rows) return;
  return rows.map((
    row: Row<{
      isSelected?: boolean,
      backgroundColor?: ColorNames,
      fontColor?: ColorNames,
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
      ? row.original?.backgroundColor : mainRowIndex % 2
        ? evenRowBackgroundColor : defaultRowBackgroundColor;
    const fontColor = row.original?.fontColor;
    const isLastNestedRow = rowId.length > nextRowId.length;
    const isLastRow = nextRowId.length === 0 || nextRowId.length === 1;
    
    const expandedRow = row as unknown as UseExpandedRowProps<{}>;
     const resolveRowClick = () => {
        const invokeClickHandler = () => {
          const clickHandlerInvoked = getOnRowClickHandler
            ? getOnRowClickHandler(row)
            : undefined;
          if (clickHandlerInvoked) clickHandlerInvoked(row);
        };
        const invokeSelectHandler = () => {
          const selectHandlerInvoked = getOnRowSelectHandler
            ? getOnRowSelectHandler(row)
            : undefined;
          if (selectHandlerInvoked) selectHandlerInvoked(row);
          setSelectedRows({
            ...selectedRows,
            [`${row.id}-${rowProps.key}`]: !selectedRows[`${row.id}-${rowProps.key}`]
          });
        };

        if (!selectable && getOnRowClickHandler) {
          return invokeClickHandler();
        }

        return getOnRowSelectHandler ?
          invokeSelectHandler() : getOnRowClickHandler ?
            invokeClickHandler() : undefined;
      };

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
          isSelected={selectedRows[`${row.id}-${rowProps.key}`]}
          customBackground={!!row.original?.backgroundColor}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          onClick={() => resolveRowClick()}

        >
          {useCheckbox && (<TD selectable={true}>
            <CheckboxTD>
              <Checkbox
                checked={selectedRows[`${row.id}-${rowProps.key}`]}
                // onClick={(e: Event) => e.stopPropagation()}
                onChange={() => {
                  /*setSelected(!isSelected)

                  if (onRowSelectHandler) onRowSelectHandler(row);*/
                }}
              />
            </CheckboxTD>
          </TD>)}

          {row.cells.map((cell: Cell<{}>) => (
            <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
          ))}
        </BodyTR>

        {expandedRow.isExpanded && !!renderRowSubComponent
          ? renderRowSubComponent({ row, backgroundColor })
          : null}
      </Fragment>
    );
  });
};

export default renderRows;
