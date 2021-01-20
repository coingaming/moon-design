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
import { useSticky } from 'react-table-sticky';
import { rem } from '@heathmont/moon-utils';

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

const TH = styled.div(({ theme: { color, space } }) => ({
  padding: rem(space.small),
  color: color.trunks[100],
  backgroundColor: color.goku[100],
  overflow: 'hidden',
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
}));

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

const TD = styled.div<{ variant?: string }>(
  ({ theme: { color, radius, space }, variant }) => ({
    padding: rem(space.default),
    paddingLeft: rem(space.small),
    paddingRight: rem(space.small),
    color: color.bulma[100],
    backgroundColor: color.gohan[100],
    overflow: 'hidden',
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

const BodyTR = styled.div<{ variant?: string }>(
  ({ theme: { color }, variant }) => ({
    marginBottom: rem(2),
    '&:nth-child(even)': {
      [TD]: {
        backgroundColor: color.gohan[80],
        ...(variant === 'calendar'
          ? {
              '&:first-child': {
                backgroundColor: color.goku[100],
              },
            }
          : {}),
      },
    },
  })
);

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

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (!target) return;

    setIsScrolledToLeft(target.scrollLeft === 0);
    setIsScrolledToRight(
      target.scrollLeft + target.clientWidth === target.scrollWidth
    );
  };

  return (
    <TableWrapper
      {...getTableProps()}
      onScroll={handleScroll}
      className="sticky"
      isScrolledToLeft={isScrolledToLeft}
      isScrolledToRight={isScrolledToRight}
      style={{ width, height, maxWidth, maxHeight }}
    >
      <Header>
        {headerGroups.map(headerGroup => (
          <HeaderTR {...headerGroup.getHeaderGroupProps()} variant={variant}>
            {headerGroup.headers.map(column => (
              <TH {...column.getHeaderProps()}>
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
        {rows.map(row => {
          prepareRow(row);
          return (
            <BodyTR {...row.getRowProps()} variant={variant}>
              {row.cells.map(cell => {
                return (
                  <TD {...cell.getCellProps()} variant={variant}>
                    {cell.render('Cell')}
                  </TD>
                );
              })}
            </BodyTR>
          );
        })}
      </Body>

      {withFooter && (
        <Footer>
          {footerGroups.map(footerGroup => (
            <HeaderTR {...footerGroup.getFooterGroupProps()} variant={variant}>
              {footerGroup.headers.map(column => (
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
  );
};

export default Table;
