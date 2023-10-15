import React, { Fragment, useState } from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';
import type { Cell, Column, Row, UseExpandedRowProps } from 'react-table';
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

          if (selectHandlerInvoked) selectHandlerInvoked(row, () => setSelectedRows);
          if (!selectable || !useCheckbox) {
            setSelectedRows({
              ...selectedRows,
              [`${row.id}-${rowProps.key}`]:
                !selectedRows[`${row.id}-${rowProps.key}`],
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
            isSelected={selectedRows[`${row.id}-${rowProps.key}`] === true}
            isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
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
            {/*useCheckbox && (
              <TD
                selectable={true}
                isExpanded={expandedRow.isExpanded}
                hasParent={!!expandedRow.depth}
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
                <div className="flex items-center h-full w-full justify-center ps-2">
                  <Checkbox
                    id={ row.id }
                    checked={selectedRows[`${row.id}-${rowProps.key}`]}
                    onClick={(e: any) => e.stopPropagation()}
                  />
                </div>
              </TD>
            )*/}

            {row.cells.map((cell: Cell<{}>, index) => (
              <TD
                key={cell.getCellProps().key}
                reactTableProps={{ ...cell.getCellProps() }}
                // @ts-ignore
                stickySide={cell?.column?.parent?.sticky}
                isFirstColumn={!useCheckbox && index === 0}
                isLastColumn={index === row.cells.length - 1}
                isSelected={selectedRows[`${row.id}-${rowProps.key}`]}
                isHovered={hoveredRow === `${row.id}-${rowProps.key}`}
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
