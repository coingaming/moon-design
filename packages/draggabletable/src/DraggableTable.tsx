import React, { useState, useCallback } from 'react';
import {
  TableWrapper,
  Header,
  TH,
  HeaderTR,
  Body,
  BodyTR,
  TD,
  HiddenTH,
  Footer,
} from '@heathmont/moon-table';
import { ColorProps } from '@heathmont/moon-themes';
import update from 'immutability-helper';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  useTable,
  useResizeColumns,
  useExpanded,
  useBlockLayout,
  useFlexLayout,
  Column,
  Row,
  Cell,
  HeaderGroup,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import styled from 'styled-components';
import IconDrag from './private/icons/IconDrag';

const DndTD = styled(TD)<{
  variant?: string;
  dragIndicator?: boolean;
}>(({ theme: { colorNew }, variant, dragIndicator }) => ({
  ...(variant === 'calendar'
    ? {
        '&:first-child, &:nth-child(2)': {
          borderRadius: 0,
          backgroundColor: colorNew.goku,
          '&::after': {
            display: 'none',
          },
        },
      }
    : {}),
  ...(dragIndicator && { cursor: 'grab' }),
}));

const DndBodyTR = styled(BodyTR)<{
  variant?: string;
  hasOnRowClickHandler: boolean;
}>(
  ({ theme: { colorNew }, variant, hasOnRowClickHandler }) => ({
    ...(hasOnRowClickHandler
      ? {
          '&:hover': {
            zIndex: 1,
            position: 'relative',
            cursor: 'pointer',
            [TD]: {
              ...(variant === 'calendar'
                ? {
                    '&:first-child, &:nth-child(2)': {
                      boxShadow: 'none',
                    },
                  }
                : {}),
            },
          },
        }
      : {}),
    '&:nth-child(even), &:nth-child(odd)': {
      [TD]: {
        ...(variant === 'calendar'
          ? {
              '&:first-child, &:nth-child(2)': {
                backgroundColor: colorNew.goku,
                borderRadius: 0,
              },
            }
          : {}),
      },
    },
  }),
  'display: flex;',
  'flex: 1 0 auto;'
);

const DND_ITEM_TYPE = 'rowDnd';

interface RowProps<D extends object = {}> {
  row: Row<D>;
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
  dropRow: (row: Row<D>, index: number) => void;
  variant: string;
  onRowClick: (row: Row<D>) => void;
  hasOnRowClickHandler: boolean;
  backgroundColor: ColorProps;
}

const MRow: React.FC<RowProps> = ({
  row,
  index,
  moveRow,
  dropRow,
  variant,
  onRowClick,
  hasOnRowClickHandler,
  backgroundColor,
}) => {
  const dropRef = React.useRef<HTMLDivElement>(null);
  const dragRef = React.useRef(null);

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item: Row<{}>, monitor) {
      if (!dropRef.current) return;
      const dragItem = item;
      const dragIndex = dragItem.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverRowCenter =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverRowPosition = clientOffset
        ? clientOffset.y - hoverBoundingRect.top
        : 0;
      if (
        (dragIndex < hoverIndex && hoverRowPosition < hoverRowCenter) ||
        (dragIndex > hoverIndex && hoverRowPosition > hoverRowCenter)
      ) {
        return;
      }
      moveRow(dragIndex, hoverIndex);
      dragItem.index = hoverIndex;
    },
    drop(item: Row<{}>) {
      dropRow(row, item.index);
    },
  });

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: DND_ITEM_TYPE,
    item: { type: DND_ITEM_TYPE, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  preview(drop(dropRef));
  drag(dragRef);

  return (
    <DndBodyTR
      ref={dropRef}
      variant={variant}
      hasOnRowClickHandler={hasOnRowClickHandler}
      backgroundColor={backgroundColor}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <DndTD ref={dragRef} dragIndicator>
        <IconDrag fontSize="1.2rem" />
      </DndTD>
      {row.cells.map((cell: Cell<{}>) => (
        <DndTD
          {...cell.getCellProps()}
          onClick={hasOnRowClickHandler ? () => onRowClick(row) : undefined}
        >
          {cell.render('Cell')}
        </DndTD>
      ))}
    </DndBodyTR>
  );
};

interface DraggableTableProps<D extends object = {}> {
  columns: ReadonlyArray<Column<D>>;
  data: readonly D[];
  defaultColumn?: Partial<Column<D>>;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  variant: string;
  layout?: string;
  withFooter?: boolean;
  onRowClick: (row: Row<D>) => void;
  onDropRow: (row: Row<D>, index: number) => void;
  defaultRowBackgroundColor?: ColorProps;
  evenRowBackgroundColor?: ColorProps;
  headerBackgroundColor?: ColorProps;
}

const DraggableTable: React.FC<DraggableTableProps> = ({
  columns,
  data,
  defaultColumn,
  width,
  height,
  maxWidth,
  maxHeight,
  variant,
  layout,
  withFooter = false,
  onRowClick,
  onDropRow,
  defaultRowBackgroundColor = 'gohan.100',
  evenRowBackgroundColor = 'gohan.80',
  headerBackgroundColor = 'goku.100',
}) => {
  const HTML5BE = HTML5Backend;
  const [records, setRecords] = React.useState(data);

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRecord = records[dragIndex];
      setRecords(
        update(records, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRecord],
          ],
        })
      );
    },
    [records]
  );

  const dropRow = (row: Row<{}>, index: number) => onDropRow(row, index);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: records,
      defaultColumn,
    },
    layout === 'block' ? useBlockLayout : useFlexLayout,
    useResizeColumns,
    useSticky,
    useExpanded
  );

  const lastHeaderGroup = headerGroups[headerGroups.length - 1];
  const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
  const [isScrolledToRight, setIsScrolledToRight] = useState(false);
  const hasOnRowClickHandler = typeof onRowClick === 'function';

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (!target) return;

    setIsScrolledToLeft(target.scrollLeft === 0);
    setIsScrolledToRight(
      target.scrollLeft + target.clientWidth === target.scrollWidth
    );
  };

  return (
    <DndProvider backend={HTML5BE}>
      <TableWrapper
        {...getTableProps()}
        onScroll={handleScroll}
        className="sticky"
        isScrolledToLeft={isScrolledToLeft}
        isScrolledToRight={isScrolledToRight}
        style={{
          width,
          height,
          maxWidth,
          maxHeight,
        }}
      >
        <Header>
          {headerGroups.map((headerGroup) => (
            <HeaderTR {...headerGroup.getHeaderGroupProps()}>
              <TH>
                <IconDrag header="header" fontSize="1.2rem" />
              </TH>
              {headerGroup.headers.map((column) => (
                <TH
                  {...column.getHeaderProps()}
                  headerBackgroundColor={headerBackgroundColor}
                >
                  {column.render('Header')}
                  <div
                    {...column.getResizerProps()}
                    className={`resizer ${
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                </TH>
              ))}
            </HeaderTR>
          ))}

          <div {...lastHeaderGroup.getHeaderGroupProps()}>
            {lastHeaderGroup.headers.map((column: HeaderGroup<{}>) => (
              <HiddenTH
                {...column.getHeaderProps()}
                style={{
                  ...column.getHeaderProps().style,
                  position: 'relative',
                }}
              />
            ))}
          </div>
        </Header>

        <Body {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            const backgroundColor =
              index % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;
            return (
              <MRow
                index={index}
                row={row}
                {...row.getRowProps()}
                variant={variant}
                moveRow={moveRow}
                dropRow={dropRow}
                onRowClick={onRowClick}
                hasOnRowClickHandler={hasOnRowClickHandler}
                backgroundColor={backgroundColor}
              />
            );
          })}
        </Body>

        {withFooter && (
          <Footer>
            {footerGroups.map((footerGroup) => (
              <HeaderTR {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <TH {...column.getFooterProps()}>
                    {column.render('Footer')}

                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? 'isResizing' : ''
                      }`}
                    />
                  </TH>
                ))}
              </HeaderTR>
            ))}
          </Footer>
        )}
      </TableWrapper>
    </DndProvider>
  );
};

export default DraggableTable;
