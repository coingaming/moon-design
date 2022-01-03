import React, { Fragment } from 'react';
import BodyTR from '../components/BodyTR';
import TD from '../components/TD';
import { ColorNames } from '@heathmont/moon-themes';
import { RowSubComponentProps } from '../Table';
import { Cell, Row, UseExpandedRowProps } from 'react-table';

type RenderRowsProps<D extends object = {}> = {
  rows: (Row<D> | UseExpandedRowProps<D>)[];
  prepareRow: (row: Row<D>) => void;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
  getOnRowClickHandler: (
    row: Row<D> | UseExpandedRowProps<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  renderRowSubComponent?: (props: RowSubComponentProps) => JSX.Element;
};

const renderRows = ({
  rows,
  prepareRow,
  evenRowBackgroundColor,
  defaultRowBackgroundColor,
  getOnRowClickHandler,
  renderRowSubComponent,
}: RenderRowsProps) => {
  if (!rows) return;
  return rows.map((row: Row | UseExpandedRowProps<{}>, index: number) => {
    const rowItem = row as Row<{}>;
    prepareRow(rowItem);
    const rowProps = rowItem.getRowProps();
    const onRowClickHandler = getOnRowClickHandler
      ? getOnRowClickHandler(rowItem)
      : undefined;
    const hasOnRowClickHandler = typeof onRowClickHandler === 'function';
    const rowId = rowItem.id ? rowItem.id.split('.') : [];
    const nextRow = rows[index + 1];
    const nextRowItem = nextRow as Row;
    const nextRowId =
      nextRowItem && nextRowItem.id ? nextRowItem.id.split('.') : [];

    const mainRowIndex = Number(rowId[0]);
    const backgroundColor =
      mainRowIndex % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;

    const isLastNestedRow = rowId.length > nextRowId.length;
    const isLastRow = nextRowId.length === 0 || nextRowId.length === 1;

    const expandedRow = row as UseExpandedRowProps<{}>;

    return (
      <Fragment key={`${rowItem.id}-${rowProps.key}`}>
        <BodyTR
          {...rowProps}
          depth={expandedRow.depth}
          isExpanded={expandedRow.isExpanded}
          hasChildren={expandedRow.canExpand}
          hasParent={!!expandedRow.depth}
          isLastNestedRow={isLastNestedRow}
          isLastRow={isLastRow}
          backgroundColor={backgroundColor}
          onClick={
            hasOnRowClickHandler ? () => onRowClickHandler!(rowItem) : undefined
          }
        >
          {rowItem.cells.map((cell: Cell<{}, any>) => (
            <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
          ))}
        </BodyTR>

        {expandedRow.isExpanded && !!renderRowSubComponent
          ? renderRowSubComponent({ row: rowItem, backgroundColor })
          : null}
      </Fragment>
    );
  });
};

export default renderRows;
