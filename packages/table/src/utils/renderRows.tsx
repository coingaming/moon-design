import React, { Fragment } from 'react';
import BodyTR from '../components/BodyTR';
import TD from '../components/TD';
import { ColorNames } from '@heathmont/moon-themes';
import { RowSubComponentProps } from '../Table';
import { Row } from 'react-table';

type RenderRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
  getOnRowClickHandler: (row: Row<D>) => any;
  renderRowSubComponent?: (props: RowSubComponentProps) => any;
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
    const onRowClickHandler = getOnRowClickHandler(row);
    const hasOnRowClickHandler = typeof onRowClickHandler === 'function';
    const rowId = row.id ? row.id.split('.') : [];
    const nextRow = rows[index + 1];
    const nextRowId = nextRow && nextRow.id ? nextRow.id.split('.') : [];

    const mainRowIndex = Number(rowId[0]);
    const backgroundColor =
      mainRowIndex % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;

    const isLastNestedRow = rowId.length > nextRowId.length;
    const isLastRow = nextRowId.length === 0 || nextRowId.length === 1;

    return (
      <Fragment key={`${row.id}-${rowProps.key}`}>
        <BodyTR
          {...rowProps}
          depth={row.depth}
          isExpanded={row.isExpanded}
          hasChildren={row.canExpand}
          hasParent={!!row.depth}
          isLastNestedRow={isLastNestedRow}
          isLastRow={isLastRow}
          backgroundColor={backgroundColor}
          onClick={
            hasOnRowClickHandler ? () => onRowClickHandler(row) : undefined
          }
        >
          {row.cells.map((cell: any) => (
            <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
          ))}
        </BodyTR>

        {row.isExpanded && !!renderRowSubComponent
          ? renderRowSubComponent({ row, backgroundColor })
          : null}
      </Fragment>
    );
  });
};

export default renderRows;
