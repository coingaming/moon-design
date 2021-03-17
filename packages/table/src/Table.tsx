import React, { useState } from 'react';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import {
  useTable,
  useResizeColumns,
  useExpanded,
  useBlockLayout,
  useFlexLayout,
} from 'react-table';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSticky } from 'react-table-sticky';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorNames } from '@heathmont/moon-themes';

const TableWrapper = styled.div<{
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
}>(({ theme: { color, radius }, isScrolledToLeft, isScrolledToRight }) => ({
  /**
   * Scroll Behavior
   * 1. Hide Scrollbars on browsers that don't support custom scrollbars.
   * 2. Auto-hide scrollbars on IE/Edge.
   * 3. Create 'padding' around the scrollbar.
   */
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none' /* [1] */,
  '-ms-overflow-style': '-ms-autohiding-scrollbar' /* [2] */,
  '::-webkit-scrollbar': {
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    backgroundClip: 'content-box' /* [3] */,
    borderRadius: rem(radius.largest),
    border: '3px solid transparent' /* [3] */,
  },
  ':hover::-webkit-scrollbar-thumb': {
    backgroundColor: color.goku[40],
  },
  '&.sticky': {
    overflow: 'scroll',
    '.body': {
      position: 'relative',
      zIndex: 0,
    },
    '[data-sticky-td]': {
      position: 'sticky',
    },
    ...(!isScrolledToLeft
      ? {
          '[data-sticky-last-left-td]': {
            boxShadow: `6px 0px 9px -10px ${rgba(color.trunks[100], 0.9)}`,
          },
        }
      : {}),

    ...(!isScrolledToRight
      ? {
          '[data-sticky-first-right-td]': {
            boxShadow: `-6px 0px 9px -10px ${rgba(color.trunks[100], 0.9)}`,
          },
        }
      : {}),
  },
}));

const Header = styled.div({
  position: 'sticky',
  zIndex: 1,
  top: 0,
});

const TH = styled.div<{
  headerBackgroundColor?: ColorNames;
}>(
  ({ theme, headerBackgroundColor }) => ({
    backgroundColor: headerBackgroundColor
      ? themed('color', headerBackgroundColor)(theme)
      : theme.color.goku[100],
  }),
  ({ theme: { color, space } }) => ({
    padding: rem(space.small),
    color: color.trunks[100],
    position: 'relative',
    fontSize: rem(12),
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '1px',
      backgroundColor: color.beerus[100],
      height: '70%',
      bottom: '15%',
      right: 0,
    },
    '&:last-child': {
      borderRight: 0,
    },
    '.resizer': {
      display: 'inline-block',
      width: rem(8),
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '1px',
        height: '70%',
        bottom: '15%',
        right: 0,
      },
      '&.isResizing': {
        '&::after': {
          background: color.piccolo[100],
        },
      },
    },
  })
);

const HeaderTR = styled.div<{ variant?: string }>(({ variant }) => ({
  ...(variant === 'calendar'
    ? {
        [TH]: {
          '&:first-child': {
            '&::after': {
              display: 'none',
            },
          },
        },
      }
    : {}),
}));

const Body = styled.div({
  position: 'relative',
  zIndex: 0,
});

const TD = styled.div<{
  variant?: string;
  defaultRowBackgroundColor?: ColorNames;
}>(
  ({ theme, defaultRowBackgroundColor }) => ({
    backgroundColor: defaultRowBackgroundColor
      ? themed('color', defaultRowBackgroundColor)(theme)
      : theme.color.gohan[100],
  }),
  ({ theme: { color, radius, space }, variant }) => ({
    padding: rem(space.default),
    paddingLeft: rem(space.small),
    paddingRight: rem(space.small),
    color: color.bulma[100],
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '1px',
      backgroundColor: color.beerus[100],
      height: '60%',
      bottom: '20%',
      right: 0,
    },
    '&:first-child': {
      borderTopLeftRadius: radius.default,
      borderBottomLeftRadius: radius.default,
    },
    '&:last-child': {
      borderTopRightRadius: radius.default,
      borderBottomRightRadius: radius.default,
      '&::after': {
        width: 0,
      },
    },
    ...(variant === 'calendar'
      ? {
          '&:first-child': {
            borderRadius: 0,
            backgroundColor: color.goku[100],
            '& + div': {
              borderTopLeftRadius: radius.default,
              borderBottomLeftRadius: radius.default,
            },
            '&::after': {
              display: 'none',
            },
          },
        }
      : {}),
  })
);

// start here
const DND_ITEM_TYPE = 'rowDnd';

const Row = ({ row, index, moveRow }) => {
  const dropRef = React.useRef(null);
  const dragRef = React.useRef(null);

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragIndex, hoverIndex);

      // item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: DND_ITEM_TYPE, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  preview(drop(dropRef));
  drag(dragRef);

  return (
    <tr ref={dropRef} style={{ opacity }}>
      <td ref={dragRef}>move</td>
      {row.cells.map((cell) => {
        return <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>;
      })}
    </tr>
  );
};
// end here

const HiddenTH = styled.div({
  height: '1px',
});

const Footer = styled.div(({ theme: { color, radius, space } }) => ({
  position: 'sticky',
  zIndex: 1,
  bottom: 0,
  [HeaderTR]: {
    '&:first-child': {
      [TH]: {
        boxShadow: `${rem(space.xsmall)} -${rem(space.xsmall)} ${rem(
          space.small
        )} ${rgba(color.trunks[100], 0.15)}, inset 0 1px 0 ${rgba(
          color.trunks[100],
          0.2
        )}`,
        '&:first-child': {
          borderTopLeftRadius: radius.default,
        },
        '&:last-child': {
          borderTopRightRadius: radius.default,
        },
      },
    },
  },
}));

const Table: React.FC<any> = ({
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
  evenRowBackgroundColor,
  headerBackgroundColor,
}) => {
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
      data,
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

  const moveRow = (dragIndex, hoverIndex) => {
    const dragRecord = records[dragIndex];
    setRecords(
      update(records, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      })
    );
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (!target) return;

    setIsScrolledToLeft(target.scrollLeft === 0);
    setIsScrolledToRight(
      target.scrollLeft + target.clientWidth === target.scrollWidth
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <TableWrapper
        {...getTableProps()}
        onScroll={handleScroll}
        className="sticky"
        isScrolledToLeft={isScrolledToLeft}
        isScrolledToRight={isScrolledToRight}
        style={{ width, height, maxWidth, maxHeight }}
      >
        <Header>
          {headerGroups.map((headerGroup) => (
            <HeaderTR {...headerGroup.getHeaderGroupProps()} variant={variant}>
              {headerGroup.headers.map((column) => (
                <TH
                  {...column.getHeaderProps()}
                  headerBackgroundColor={headerBackgroundColor}
                >
                  {column.render('Header')}
                  <div
                    // @ts-ignore
                    {...column.getResizerProps()}
                    className={`resizer ${
                      // @ts-ignore
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                </TH>
              ))}
            </HeaderTR>
          ))}

          <div {...lastHeaderGroup.getHeaderGroupProps()}>
            {lastHeaderGroup.headers.map((column: any) => (
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
          {rows.map(
            (row, index) =>
              prepareRow(row) || (
                <Row
                  index={index}
                  row={row}
                  moveRow={moveRow}
                  {...row.getRowProps()}
                  variant={variant}
                  onClick={
                    hasOnRowClickHandler ? () => onRowClick(row) : undefined
                  }
                  hasOnRowClickHandler={hasOnRowClickHandler}
                  evenRowBackgroundColor={evenRowBackgroundColor}
                />
              )
          )}
        </Body>

        {withFooter && (
          <Footer>
            {footerGroups.map((footerGroup) => (
              <HeaderTR
                {...footerGroup.getFooterGroupProps()}
                variant={variant}
              >
                {footerGroup.headers.map((column) => (
                  <TH {...column.getFooterProps()}>
                    {column.render('Footer')}

                    <div
                      // @ts-ignore
                      {...column.getResizerProps()}
                      className={`resizer ${
                        // @ts-ignore
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

export default Table;
