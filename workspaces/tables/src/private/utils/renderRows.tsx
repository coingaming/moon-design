import React, { Fragment, useState } from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';
import BodyTR from '../../components/BodyTR';
import TD from '../../components/TD';
import type RenderRowsProps from '../types/RenderRowsProps';
import type { Cell, Row, UseExpandedRowProps } from 'react-table';

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
  rowSize,
  isCellBorder,
}: RenderRowsProps) => {
  const [hoveredRow, setHoveredRow] = useState('');
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  if (!rows) return;

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
            [`${row.id}-${rowProps.key}`]:
              !selectedRows[`${row.id}-${rowProps.key}`],
          });
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
            isLastRow={isLastRow}
            isSelected={selectedRows[`${row.id}-${rowProps.key}`]}
            isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
            customBackground={!!row.original?.backgroundColor}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            onHoverToggle={
              getOnRowClickHandler || getOnRowSelectHandler
                ? (hover?: boolean) =>
                    setHoveredRow(hover ? `${row.id}-${rowProps.key}` : '')
                : undefined
            }
            onClick={() => resolveRowClick()}
          >
            {useCheckbox && (
              <TD
                selectable={true}
                isExpanded={expandedRow.isExpanded}
                isLastRow={isLastRow}
                hasParent={!!expandedRow.depth}
                customBackground={!!row.original?.backgroundColor}
                backgroundColor={backgroundColor}
                fontColor={fontColor}
                isSelected={selectedRows[`${row.id}-${rowProps.key}`]}
                isFirstColumn={true}
                isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
                // @ts-ignore
                stickySide={row.cells[0].parent?.sticky ? 'left' : ''}
                rowSize={rowSize}
                isCellBorder={isCellBorder}
                role="cell"
              >
                <div className="flex items-center h-full w-full justify-center pl-2">
                  <Checkbox
                    id={row.id}
                    checked={selectedRows[`${row.id}-${rowProps.key}`]}
                    onClick={(e: any) => e.stopPropagation()}
                  />
                </div>
              </TD>
            )}

            {row.cells.map((cell: Cell<{}>, index) => (
              <TD
                reactTableProps={{ ...cell.getCellProps() }}
                // @ts-ignore
                stickySide={cell?.column?.parent?.sticky}
                isFirstColumn={!useCheckbox && index === 0}
                isLastColumn={index === row.cells.length - 1}
                isSelected={selectedRows[`${row.id}-${rowProps.key}`]}
                isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
                customBackground={!!row.original?.backgroundColor}
                backgroundColor={backgroundColor}
                fontColor={fontColor}
                rowSize={rowSize}
                isCellBorder={isCellBorder}
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
