import React, { useState, Fragment, useRef, useEffect } from 'react';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import tint from 'polished/lib/color/tint';
import {
  useTable,
  useResizeColumns,
  useExpanded,
  useBlockLayout,
  useFlexLayout,
  TableInstance,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorNames } from '@heathmont/moon-themes';
import { Minimap } from './__private__/Minimap';

export const OuterWrapper = styled.div({
  position: 'relative',
  height: '100%',
  width: '100%'
})

export const TableWrapper = styled.div<{
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
}>(({ theme: { color, radius }, isScrolledToLeft, isScrolledToRight }) => ({
  /**
   * Scroll Behavior
   * 2. Auto-hide scrollbars on IE/Edge.
   * 3. Create 'padding' around the scrollbar.
   */
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'thin',
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

export const Header = styled.div({
  position: 'sticky',
  zIndex: 1,
  top: 0,
});

export const TH = styled.div<{
  headerBackgroundColor?: ColorNames;
}>(
  ({ theme, headerBackgroundColor }) => ({
    backgroundColor: themed('color', headerBackgroundColor)(theme),
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
  }),
);

export const HeaderTR = styled.div<{ variant?: string }>(({ variant }) => ({
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

export const Body = styled.div({
  position: 'relative',
  zIndex: 0,
});

export const TD = styled.div<{
  variant?: string;
  defaultRowBackgroundColor?: ColorNames;
  headerBackgroundColor?: ColorNames;
}>(
  ({ theme, defaultRowBackgroundColor }) => ({
    backgroundColor: themed('color', defaultRowBackgroundColor)(theme),
  }),
  ({ theme, variant, headerBackgroundColor }) => ({
    padding: rem(theme.space.default),
    paddingLeft: rem(theme.space.small),
    paddingRight: rem(theme.space.small),
    color: theme.color.bulma[100],
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '1px',
      backgroundColor: theme.color.beerus[100],
      height: '60%',
      bottom: '20%',
      right: 0,
    },
    '&:first-child': {
      borderTopLeftRadius: theme.radius.default,
      borderBottomLeftRadius: theme.radius.default,
    },
    '&:last-child': {
      borderTopRightRadius: theme.radius.default,
      borderBottomRightRadius: theme.radius.default,
      '&::after': {
        width: 0,
      },
    },
    ...(variant === 'calendar'
      ? {
        '&:first-child': {
          borderRadius: 0,
          backgroundColor: themed('color', headerBackgroundColor)(theme),
          '& + div': {
            borderTopLeftRadius: theme.radius.default,
            borderBottomLeftRadius: theme.radius.default,
          },
          '&::after': {
            display: 'none',
          },
        },
      }
      : {}),
  }),
);

export const BodyTR = styled.div<{
  variant?: string;
  hasOnRowClickHandler: boolean;
  headerBackgroundColor?: ColorNames;
  evenRowBackgroundColor?: ColorNames;
  depth?: number;
}>(
  ({ theme, evenRowBackgroundColor }) => ({
    '&:nth-child(even)': {
      [TD]: {
        backgroundColor: themed('color', evenRowBackgroundColor)(theme),
      },
    },
  }),
  ({
    theme, variant, hasOnRowClickHandler, headerBackgroundColor, depth,
  }) => ({
    marginTop: variant === 'calendar' && depth === 0 ? rem(8) : rem(2),
    '&:first-child': {
      marginTop: 0,
    },
    ...(hasOnRowClickHandler
      ? {
        '&:hover': {
          cursor: 'pointer',
          [TD]: {
            ...(variant === 'calendar'
              ? {
                '&:not(:first-child)': {
                  backgroundColor: tint(0.75, theme.color.piccolo[100]),
                },
              }
              : {
                backgroundColor: tint(0.75, theme.color.piccolo[100]),
              }),
          },
        },
      }
      : {}),
    [TD]: {
      ...(variant === 'calendar'
        ? {
          '&:first-child': {
            backgroundColor: themed('color', headerBackgroundColor)(theme),
          },
        }
        : {}),
    },
  }),
);

export const HiddenTH = styled.div({
  height: '1px',
});

export const Footer = styled.div(({ theme: { color, radius, space } }) => ({
  position: 'sticky',
  zIndex: 1,
  bottom: 0,
  [HeaderTR]: {
    '&:first-child': {
      [TH]: {
        boxShadow: `${rem(space.xsmall)} -${rem(space.xsmall)} ${rem(
          space.small,
        )} ${rgba(color.trunks[100], 0.15)}, inset 0 1px 0 ${rgba(
          color.trunks[100],
          0.2,
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

type Props = {
  columns: any
  data: any
  defaultColumn?: any
  width?: any
  height?: any
  maxWidth?: any
  maxHeight?: any
  variant?: string
  layout?: string
  withFooter?: boolean
  withMinimap?: boolean
  getOnRowClickHandler?: (row: any) => (row: any) => void | undefined
  defaultRowBackgroundColor?: ColorNames
  evenRowBackgroundColor?: ColorNames
  headerBackgroundColor?: ColorNames
  renderRowSubComponent?: (row: any, rowProps: any, visibleColumns: any) => any
  expandedByDefault?: boolean
}

const Table: React.FC<Props> = ({
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
  withMinimap = false,
  getOnRowClickHandler = () => undefined,
  defaultRowBackgroundColor = 'gohan.100',
  evenRowBackgroundColor = 'gohan.80',
  headerBackgroundColor = 'goku.100',
  renderRowSubComponent,
  expandedByDefault
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    visibleColumns,
    toggleAllRowsExpanded
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    layout === 'block' ? useBlockLayout : useFlexLayout,
    useResizeColumns,
    useSticky,
    useExpanded,
  ) as TableInstance & { toggleAllRowsExpanded: (isExpanded?: boolean) => void };
  const lastHeaderGroup = headerGroups[headerGroups.length - 1];
  const tableRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [scrollState, setScrollState] = useState({
    scrolledToLeft: true,
    scrolledToRight: true,
  });

  useEffect(() => {
    if (expandedByDefault === undefined) return
    toggleAllRowsExpanded(expandedByDefault)
  }, [expandedByDefault, toggleAllRowsExpanded])

  useEffect(() => {
    if (!tableRef?.current) return
    setScrollState(oldScrollState => ({...oldScrollState, scrolledToRight: tableRef.current!.scrollLeft + tableRef.current!.clientWidth === tableRef.current!.scrollWidth }))
  }, [tableRef])


  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (!event.currentTarget) return;

    const scrolledToLeft = event.currentTarget.scrollLeft === 0
    const scrolledToRight = event.currentTarget.scrollLeft + event.currentTarget.clientWidth === event.currentTarget.scrollWidth

    if (scrolledToLeft !== scrollState.scrolledToLeft || scrolledToRight !== scrollState.scrolledToRight) {
      setScrollState({ scrolledToLeft, scrolledToRight })
    }
  };

  const tableComponent = (
    <TableWrapper
      {...getTableProps()}
      ref={tableRef}
      onScroll={handleScroll}
      className="sticky"
      isScrolledToLeft={scrollState.scrolledToLeft}
      isScrolledToRight={scrollState.scrolledToRight}
      style={{
        width, height, maxWidth, maxHeight,
      }}
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
              style={{ ...column.getHeaderProps().style, position: 'relative' }}
            />
          ))}
        </div>
      </Header>

      <Body {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          const rowProps = row.getRowProps();
          const onRowClickHandler = getOnRowClickHandler(row);
          const hasOnRowClickHandler = typeof onRowClickHandler === 'function';

          return (
            <Fragment key={`${row.id}-${rowProps.key}`}>
              <BodyTR
                {...rowProps}
                depth={row.depth}
                variant={variant}
                onClick={
                  hasOnRowClickHandler
                    ? () => { if (onRowClickHandler) onRowClickHandler(row) }
                    : undefined
                }
                hasOnRowClickHandler={hasOnRowClickHandler}
                headerBackgroundColor={headerBackgroundColor}
                evenRowBackgroundColor={evenRowBackgroundColor}
              >
                {row.cells.map((cell: any) => (
                    <TD
                      {...cell.getCellProps()}
                      variant={variant}
                      defaultRowBackgroundColor={defaultRowBackgroundColor}
                    >
                      {cell.render('Cell')}
                    </TD>
                ))}
              </BodyTR>
              {row.isExpanded
                && !!renderRowSubComponent
                && renderRowSubComponent(row, rowProps, visibleColumns)}
            </Fragment>
          );
        })}
      </Body>

      {withFooter && (
        <Footer ref={footerRef}>
          {footerGroups.map((footerGroup) => (
            <HeaderTR {...footerGroup.getFooterGroupProps()} variant={variant}>
              {footerGroup.headers.map((column) => (
                <TH
                  {...column.getFooterProps()}
                  headerBackgroundColor={headerBackgroundColor}
                >
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
  );

  if (withMinimap) {
    return (
      <OuterWrapper>
        {tableComponent}
        <Minimap numberOfColumns={visibleColumns.length} tableRef={tableRef} footerRef={footerRef} />
      </OuterWrapper>
    )
  } else {
    return tableComponent
  }
};

export default Table;
