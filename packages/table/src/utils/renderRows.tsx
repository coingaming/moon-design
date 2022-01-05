import React, { Fragment } from 'react';
import BodyTR from '../components/BodyTR';
import TD from '../components/TD';
import { ColorNames } from '@heathmont/moon-themes';
import { RowSubComponentProps } from '../Table';
import { Cell, Row, UseExpandedRowProps } from 'react-table';

type RenderRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
  getOnRowClickHandler: (
    row: Row<D>
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
  return rows.map((row: Row<{}>, index: number) => {
    prepareRow(row);
    const rowProps = row.getRowProps();
    const onRowClickHandler = getOnRowClickHandler
      ? getOnRowClickHandler(row)
      : () => undefined;
    const rowId = row.id ? row.id.split('.') : [];
    const nextRow = rows[index + 1];
    const nextRowItem = nextRow as Row;
    const nextRowId =
      nextRowItem && nextRowItem.id ? nextRowItem.id.split('.') : [];

    const mainRowIndex = Number(rowId[0]);
    const backgroundColor =
      mainRowIndex % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;

    const isLastNestedRow = rowId.length > nextRowId.length;
    const isLastRow = nextRowId.length === 0 || nextRowId.length === 1;

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
          backgroundColor={backgroundColor}
          onClick={onRowClickHandler ? () => onRowClickHandler(row) : undefined}
        >
          {row.cells.map((cell: Cell<{}, any>) => (
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
