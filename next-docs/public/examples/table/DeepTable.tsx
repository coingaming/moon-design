import React from 'react';

import { Table } from '@heathmont/moon-table';

const Example = () => {
  const columnsInitial = [
    {
      accessor: 'expander',
      width: 60,
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
        <span {...getToggleAllRowsExpandedProps()}>
          {isAllRowsExpanded ? '👇' : '👉'}
        </span>
      ),
      Cell: ({ row }: any) =>
        row.canExpand ? (
          <span style={{ paddingLeft: `${row.depth * 2}rem` }}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ) : null,
    },
    {
      Header: 'Name',
      accessor: 'firstName',
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 50,
    },
    {
      Header: 'Visits',
      accessor: 'visits',
    },
    {
      Header: 'Activity',
      accessor: 'activity',
    },
  ];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map(() => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(Math.random() * 30)}</span>,
        visits: <span>{Math.floor(Math.random() * 100)}</span>,
        activity: Math.floor(Math.random() * 100),
        subRows: Array.from('_'.repeat(3)).map(() => ({
          firstName: 'Sub Test',
          age: <span>{Math.floor(Math.random() * 30)}</span>,
          visits: <span>{Math.floor(Math.random() * 100)}</span>,
          activity: Math.floor(Math.random() * 100),
          subRows: Array.from('_'.repeat(3)).map(() => ({
            firstName: 'Sub Test 2',
            age: <span>{Math.floor(Math.random() * 30)}</span>,
            visits: <span>{Math.floor(Math.random() * 100)}</span>,
            activity: Math.floor(Math.random() * 100),
            subRows: Array.from('_'.repeat(3)).map(() => ({
              firstName: 'Sub Test 2',
              age: <span>{Math.floor(Math.random() * 30)}</span>,
              visits: <span>{Math.floor(Math.random() * 100)}</span>,
              activity: Math.floor(Math.random() * 100),
            })),
          })),
        })),
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(20), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
      defaultRowBackgroundColor="gohan.40"
      evenRowBackgroundColor="gohan.80"
      getOnRowClickHandler={(row) =>
        row.canExpand ? () => row.toggleRowExpanded() : undefined
      }
    />
  );
};

export default Example;
