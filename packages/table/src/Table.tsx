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
      '.header': {
        position: 'sticky',
        zIndex: 1,
        width: 'fit-content',
        top: 0,
        borderRadius: radius.default,
        backgroundColor: color.goku[100],
      },
      '.footer': {
        position: 'sticky',
        zIndex: 1,
        width: 'fit-content',
        bottom: 0,
        borderRadius: radius.default,
        backgroundColor: color.goku[100],
      },
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

const TR = styled.div(({ theme: { color, radius } }) => ({
  borderRadius: radius.default,
  backgroundColor: color.gohan[100],
  marginBottom: rem(2),
}));

const TH = styled.div(({ theme: { color, space } }) => ({
  padding: rem(space.default),
  color: color.bulma[100],
  borderRight: `1px solid ${color.beerus[100]}`,
  overflow: 'hidden',
  '&:last-child': {
    borderRight: 0,
  },
  '.resizer': {
    display: 'inline-block',
    width: '5px',
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

  // Workaround as react-table footerGroups doesn't provide the same internal data than headerGroups
  // const footerGroups = headerGroups.slice().reverse();

  return (
    <Styles>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ width, height }}
      >
        <div className="header">
          {headerGroups.map(headerGroup => (
            <TR {...headerGroup.getHeaderGroupProps()} className="tr">
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
        </div>

        <div {...getTableBodyProps()} className="body">
          {rows.map(row => {
            prepareRow(row);
            return (
              <TR {...row.getRowProps()} className="tr">
                {row.cells.map(cell => {
                  return (
                    <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
                  );
                })}
              </TR>
            );
          })}
        </div>

        {/* <div className="footer">
          {footerGroups.map(footerGroup => (
            <div {...footerGroup.getHeaderGroupProps()} className="tr">
              {footerGroup.headers.map(column => (
                <div {...column.getHeaderProps()} className="td">
                  {column.render('Footer')}
                </div>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </Styles>
  );
};

export default Table;
