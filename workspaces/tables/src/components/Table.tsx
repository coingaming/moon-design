import React, { useRef, useState, useEffect } from 'react';
import {
  useTable,
  useResizeColumns,
  useExpanded,
  useBlockLayout,
  useFlexLayout,
  useSortBy,
  TableInstance,
  PluginHook,
  Row,
  HeaderGroup,
  UseResizeColumnsColumnProps,
  UseSortByColumnProps,
  TableOptions,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import useRowSpan from '../private/hooks/useRowSpan';
import useScrollState from '../private/hooks/useScrollState';
import renderRows from '../private/utils/renderRows';
import renderSpanRows from '../private/utils/renderSpanRows';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import HeaderTR from './HeaderTR';
import HiddenTR from './HiddenTR';
import Minimap from './Minimap';
import TableWrapper from './TableWrapper';
import TH from './TH';
import type RowSpanHeaderProps from '../private/types/RowSpanHeaderProps';
import type TableProps from '../private/types/TableProps';

const Table = ({
  columns,
  data,
  defaultColumn,
  width,
  height,
  maxWidth,
  maxHeight,
  variant,
  layout,
  withFooter,
  withMinimap,
  expandedByDefault,
  defaultRowBackgroundColor = 'gohan',
  evenRowBackgroundColor = 'gohan',
  headerBackgroundColor = 'goku',
  rowGap = 'gap-1',
  rowSize = 'md',
  isCellBorder,
  isSticky = true,
  isSorting,
  selectable,
  useCheckbox,
  renderRowSubComponent,
  getOnRowClickHandler,
  getOnRowSelect,
  updateMyData,
}: TableProps) => {
  const plugins = [
    layout === 'block' ? useBlockLayout : useFlexLayout,
    variant === 'calendar' ? useRowSpan : undefined,
    useResizeColumns,
    isSticky ? useSticky : undefined,
    isSorting ? useSortBy : undefined,
    useExpanded,
  ].filter((plugin) => !!plugin) as PluginHook<{}>[];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    visibleColumns,
    toggleAllRowsExpanded,
    rowSpanHeaders,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      updateMyData,
    } as TableOptions<object>,
    ...plugins
  ) as TableInstance<object> & {
    toggleAllRowsExpanded: (isExpanded?: boolean) => void;
    rowSpanHeaders: RowSpanHeaderProps[];
  };
  const lastHeaderGroup = headerGroups[headerGroups.length - 1];
  const tableRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const onRowSelectHandler = getOnRowSelect
    ? getOnRowSelect()
    : () => undefined;

  const { scrollState, handleScroll } = useScrollState(tableRef);
  const [selectedRows, setSelectedRows] = useState<Row<{}>[]>([]);

  useEffect(() => {
    if (expandedByDefault === undefined || !data || !data.length) return;
    toggleAllRowsExpanded(expandedByDefault);
  }, [expandedByDefault, data, toggleAllRowsExpanded]);
  useEffect(() => {
    if (onRowSelectHandler) onRowSelectHandler(selectedRows);
  }, [selectedRows]);
  useEffect(() => {
    setSelectedRows(
      rows?.length
        ? rows.filter((row: Row<{ isSelected?: boolean }>) => {
            return row.original?.isSelected;
          })
        : []
    );
  }, []);

  const getHeaderRow = (
    column: HeaderGroup<object>,
    isSorting?: boolean,
    isLastColumn?: boolean
  ) => {
    const sortingColumn = column as unknown as UseSortByColumnProps<object>;
    const resizingColumn =
      column as unknown as UseResizeColumnsColumnProps<object>;

    return (
      <TH
        key={column.id}
        reactTableProps={{
          ...column.getHeaderProps(
            isSorting ? sortingColumn.getSortByToggleProps : undefined
          ),
        }}
        headerBackgroundColor={headerBackgroundColor}
        stickySide={
          // @ts-ignore
          (column.sticky === 'left' || column.parent?.sticky === 'left') &&
          scrollState.scrolledToRight
            ? 'left'
            : // @ts-ignore
            column.sticky === 'right' || column.parent?.sticky === 'right'
            ? 'right'
            : ''
        }
        isLastColumn={isLastColumn}
        rowSize={rowSize}
        isCellBorder={isCellBorder}
      >
        {column.render('Header')}
        <div
          {...resizingColumn.getResizerProps()}
          className={`inline-block w-px h-full absolute top-0 right-0 z-1 after:content-none after:absolute after:w-px after:h-[70%] after:bottom-[15%] after:right-0 ${
            resizingColumn.isResizing ? 'after:bg-piccolo' : ''
          }`}
        />
      </TH>
    );
  };
  const getFooterRowWhenResizing = (column: HeaderGroup<object>) => {
    const resizingColumn =
      column as unknown as UseResizeColumnsColumnProps<object>;
    return (
      <TH
        key={column.id}
        reactTableProps={{ ...column.getHeaderProps() }}
        headerBackgroundColor={headerBackgroundColor}
        stickySide={
          // @ts-ignore
          column.sticky === 'left' && scrollState.scrolledToRight
            ? 'left'
            : // @ts-ignore
            column.sticky === 'right' && scrollState.scrolledToLeft
            ? 'right'
            : ''
        }
        rowSize={rowSize}
        isCellBorder={isCellBorder}
      >
        {column.render('Footer')}

        <div
          {...resizingColumn.getResizerProps()}
          className={`resizer inline-block cursor-ew-resize w-2 h-full absolute top-0 right-0 z-1 after:content-none after:absolute after:w-px after:h-[70%] after:bottom-[15%] after:right-0 ${
            resizingColumn.isResizing ? 'isResizing after:bg-piccolo' : ''
          }`}
        />
      </TH>
    );
  };

  const renderTableComponent = () => (
    <TableWrapper
      reactTableProps={{ ...getTableProps() }}
      tableRef={tableRef}
      onScroll={handleScroll}
      className={isSticky ? 'sticky' : ''}
      isScrolledToLeft={scrollState.scrolledToLeft}
      isScrolledToRight={scrollState.scrolledToRight}
      style={{
        width,
        height,
        maxWidth,
        maxHeight,
      }}
      variant={variant}
      defaultRowBackgroundColor={defaultRowBackgroundColor}
      evenRowBackgroundColor={evenRowBackgroundColor}
      headerBackgroundColor={headerBackgroundColor}
    >
      <Header
        selectable={useCheckbox}
        headerBackgroundColor={headerBackgroundColor}
      >
        {headerGroups.map((headerGroup: HeaderGroup<object>) => (
          <HeaderTR
            reactTableProps={{ ...headerGroup.getHeaderGroupProps() }}
            key={headerGroup.getHeaderGroupProps().key}
          >
            {headerGroup.headers.map((column: HeaderGroup<object>, index) =>
              getHeaderRow(
                column,
                isSorting,
                index === headerGroup.headers.length - 1
              )
            )}
          </HeaderTR>
        ))}
        <HiddenTR lastHeaderGroup={lastHeaderGroup} />
      </Header>

      <Body reactTableProps={{ ...getTableBodyProps() }} rowGap={rowGap}>
        {variant === 'calendar'
          ? renderSpanRows({
              rows,
              prepareRow,
              getOnRowClickHandler,
              evenRowBackgroundColor,
              defaultRowBackgroundColor,
              rowSpanHeaders,
              selectable,
              useCheckbox,
              rowSize,
              isCellBorder,
            })
          : renderRows({
              rows,
              prepareRow,
              getOnRowClickHandler,
              getOnRowSelectHandler: !selectable
                ? undefined
                : (row) => () => {
                    let alreadySelectedRows = [...selectedRows];
                    const alreadySelectedRow = alreadySelectedRows.filter(
                      (selectedRow) => row.id === selectedRow.id
                    )[0];

                    if (alreadySelectedRow) {
                      alreadySelectedRows = alreadySelectedRows.filter(
                        (selectedRow) => row.id !== selectedRow.id
                      );
                    } else {
                      alreadySelectedRows.push(row);
                    }

                    setSelectedRows(alreadySelectedRows);
                  },
              evenRowBackgroundColor,
              defaultRowBackgroundColor,
              renderRowSubComponent,
              selectable,
              useCheckbox,
              rowSize,
              isCellBorder,
            })}
      </Body>

      {withFooter && (
        <Footer
          ref={footerRef}
          selectable={useCheckbox}
          headerBackgroundColor={headerBackgroundColor}
        >
          {footerGroups.map((footerGroup: HeaderGroup<object>) => (
            <HeaderTR
              key={footerGroup.getHeaderGroupProps().key}
              reactTableProps={{ ...footerGroup.getHeaderGroupProps() }}
            >
              {footerGroup.headers.map((column: HeaderGroup<object>) =>
                getFooterRowWhenResizing(column)
              )}
            </HeaderTR>
          ))}
        </Footer>
      )}
    </TableWrapper>
  );

  if (withMinimap) {
    return (
      <div className="relative h-full w-full overflow-auto">
        {renderTableComponent()}
        <Minimap
          numberOfColumns={visibleColumns.length}
          tableRef={tableRef}
          footerRef={footerRef}
        />
      </div>
    );
  }

  return renderTableComponent();
};

export default Table;
