import React, { Fragment, useEffect, useState } from 'react';
import type { Cell, Row, UseExpandedRowProps } from 'react-table';
import BodyTR from '../../components/BodyTR';
import TD from '../../components/TD';
import type RenderRowsProps from '../types/RenderRowsProps';

const renderRows = ({
  rows,
  prepareRow,
  evenRowBackgroundColor,
  defaultRowBackgroundColor,
  getOnRowClickHandler,
  getOnRowSelectHandler,
  renderRowSubComponent,
  setForceUpdateRowSelectedState,
  selectable,
  useCheckbox,
  rowSize,
  isCellBorder,
  textClip,
}: RenderRowsProps) => {
  const [hoveredRow, setHoveredRow] = useState('');
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    selectable
    && useCheckbox
    && setForceUpdateRowSelectedState
    && setForceUpdateRowSelectedState(() => setSelectedRows);
  });

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
      const expandedRow = row as unknown as UseExpandedRowProps<{}>;
      const resolveRowClick = (target: HTMLElement) => {
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

          if (selectHandlerInvoked) selectHandlerInvoked(row, target);
          if (!selectable || !useCheckbox) {
            setSelectedRows({
              ...selectedRows,
              [row.id]: !selectedRows[row.id],
            });
          }
        };

        if (!selectable && getOnRowClickHandler) {
          return invokeClickHandler();
        }

        return getOnRowSelectHandler
          ? invokeSelectHandler()
          : getOnRowClickHandler
          ? invokeClickHandler()
          : undefined;
      };

      return (
        <Fragment key={`${row.id}-${rowProps.key}`}>
          <BodyTR
            reactTableProps={{ ...rowProps }}
            depth={expandedRow.depth}
            isExpanded={expandedRow.isExpanded}
            hasChildren={expandedRow.canExpand}
            hasParent={!!expandedRow.depth}
            isLastNestedRow={isLastNestedRow}
            isSelected={selectedRows[row.id] === true}
            isHovered={hoveredRow === row.id}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            onHoverToggle={
              getOnRowClickHandler || getOnRowSelectHandler
                ? (hover?: boolean) =>
                    setHoveredRow(hover ? row.id : '')
                : undefined
            }
            onClick={(target: HTMLElement) => resolveRowClick(target)}
          >
            {row.cells.map((cell: Cell<{}>, index) => (
              <TD
                key={cell.getCellProps().key}
                reactTableProps={{ ...cell.getCellProps() }}
                // @ts-ignore
                stickySide={cell?.column?.parent?.sticky}
                isFirstColumn={index === 0}
                isLastColumn={index === row.cells.length - 1}
                isSelected={selectedRows[row.id]}
                isHovered={hoveredRow === row.id}
                backgroundColor={backgroundColor}
                fontColor={fontColor}
                rowSize={rowSize}
                isCellBorder={isCellBorder}
                textClip={textClip}
              >
                {cell.render('Cell')}
              </TD>
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
