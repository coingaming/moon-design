import React from 'react';
import styled from 'styled-components';
import ReactTable, {
  useTable,
  useBlockLayout,
  useResizeColumns,
} from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';

import makeData from './makeData';

const Styles = styled.div`
  padding: 1rem;
  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
    .th,
    .td {
      background-color: #232a33;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;
      &.sticky {
        position: sticky !important;
        left: 0;
        top: 0;
        z-index: 10;
      }
      :last-child {
        border-right: 0;
      }
      .resizer {
        display: inline-block;
        background: #0cd463;
        width: 10px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;
        &.isResizing {
          background: red;
        }
      }
    }
  }
`;

const Table: React.FC<any> = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

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
    useResizeColumns
  );

  return (
    <>
      {/* <button onClick={resetResizing}>Reset Resizing</button> */}
      <div style={{ overflowX: 'auto' }}>
        <div {...getTableProps()} className="table">
          <div>
            {headerGroups.map(headerGroup => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column, index) => (
                  <div
                    {...column.getHeaderProps()}
                    className={`th ${index === 0 ? 'sticky' : ''}`}
                  >
                    {column.render('Header')}
                    {/* Use column.getResizerProps to hook up the events correctly */}
                    <div
                      // @ts-ignore
                      {...column.getResizerProps()}
                      className={`resizer ${
                        // @ts-ignore
                        column.isResizing ? 'isResizing' : ''
                      }`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell, index) => {
                    return (
                      <div
                        {...cell.getCellProps()}
                        className={`td ${index === 0 ? 'sticky' : ''}`}
                      >
                        {cell.render('Cell')}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre> */}
    </>
  );
};

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        fixed: 'left',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
        width: 50,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        width: 60,
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
      {
        Header: 'Age 2',
        accessor: 'age2',
        width: 50,
      },
      {
        Header: 'Visits 2',
        accessor: 'visits2',
        width: 60,
      },
      {
        Header: 'Status 2',
        accessor: 'status2',
      },
      {
        Header: 'Profile Progress 2',
        accessor: 'progress2',
      },
      // {
      //   Header: 'Name',
      //   columns: [
      //     {
      //       Header: 'First Name',
      //       accessor: 'firstName',
      //       fixed: 'left',
      //     },
      //     {
      //       Header: 'Last Name',
      //       accessor: 'lastName',
      //     },
      //   ],
      // },
      // {
      //   Header: 'Info',
      //   columns: [
      //     {
      //       Header: 'Age',
      //       accessor: 'age',
      //       width: 50,
      //     },
      //     {
      //       Header: 'Visits',
      //       accessor: 'visits',
      //       width: 60,
      //     },
      //     {
      //       Header: 'Status',
      //       accessor: 'status',
      //     },
      //     {
      //       Header: 'Profile Progress',
      //       accessor: 'progress',
      //     },
      //   ],
      // },
      // {
      //   Header: 'Info 2',
      //   columns: [
      //     {
      //       Header: 'Age 2',
      //       accessor: 'age2',
      //       width: 50,
      //     },
      //     {
      //       Header: 'Visits 2',
      //       accessor: 'visits2',
      //       width: 60,
      //     },
      //     {
      //       Header: 'Status 2',
      //       accessor: 'status2',
      //     },
      //     {
      //       Header: 'Profile Progress 2',
      //       accessor: 'progress2',
      //     },
      //   ],
      // },
    ],
    []
  );

  const data = React.useMemo(() => makeData(10), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;
