import React from 'react';
import styled from 'styled-components';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table';
import { useSticky } from 'react-table-sticky';
import { rem } from '@heathmont/moon-utils';

const Styles = styled.div(({ theme: { color, space, radius } }) => ({
  padding: rem(space.small),
  '.table': {
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
      '[data-sticky-last-left-th]': {
        backgroundColor: color.gohan[100],
      },
      '[data-sticky-last-left-td]': {
        backgroundColor: color.gohan[100],
      },
      '[data-sticky-first-right-td]': {
        backgroundColor: color.gohan[100],
      },
    },
  },
}));

const Header = styled.div(({ theme: { color, radius } }) => ({
  position: 'sticky',
  zIndex: 1,
  width: 'fit-content',
  top: 0,
  borderRadius: radius.default,
  backgroundColor: color.goku[100],
}));

const Body = styled.div({
  position: 'relative',
  zIndex: 0,
});

const TR = styled.div(({ theme: { color, radius } }) => ({
  borderRadius: radius.default,
  backgroundColor: color.gohan[100],
  marginBottom: rem(2),
}));

const TH = styled.div(({ theme: { color, radius, space } }) => ({
  padding: rem(space.default),
  color: color.bulma[100],
  backgroundColor: color.gohan[100],
  borderRadius: radius.default,
  overflow: 'hidden',
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
    width: rem(5),
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translateX(50%)',
    zIndex: 1,
    '&.isResizing': {
      background: color.piccolo[100],
    },
  },
}));

const TD = TH;

const Table: React.FC<any> = ({
  columns,
  data,
  defaultColumn,
  width,
  height,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout,
    useResizeColumns,
    useSticky
  );

  return (
    <Styles>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ width, height }}
      >
        <Header>
          {headerGroups.map(headerGroup => (
            <TR {...headerGroup.getHeaderGroupProps()}>
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
            </TR>
          ))}
        </Header>

        <Body {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TR {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
                  );
                })}
              </TR>
            );
          })}
        </Body>
      </div>
    </Styles>
  );
};

export default Table;
