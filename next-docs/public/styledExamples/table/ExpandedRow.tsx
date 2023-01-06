import React from 'react';
import { Table } from '@heathmont/moon-table';

interface HeaderProps {
  isAllRowsExpanded: boolean;
  getToggleAllRowsExpandedProps: () => React.HTMLAttributes<HTMLSpanElement>;
}

const Example = () => {
  const columnsInitial = [
    {
      Header: 'Expand',
      sticky: 'left',
      columns: [
        {
          // Build our expander column
          id: 'expander', // Make sure it has an ID
          Header: ({
            getToggleAllRowsExpandedProps,
            isAllRowsExpanded,
          }: HeaderProps) => (
            <span {...getToggleAllRowsExpandedProps()}>
              {isAllRowsExpanded ? '👇' : '👉'}
            </span>
          ),
          Cell: ({ row }: any) =>
            // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
            // to build the toggle for expanding a row
            row.canExpand ? (
              <span
                {...row.getToggleRowExpandedProps({
                  style: {
                    // We can even use the row.depth property
                    // and paddingLeft to indicate the depth
                    // of the row
                    paddingLeft: `${row.depth * 2}rem`,
                  },
                })}
              >
                {row.isExpanded ? '👇' : '👉'}
              </span>
            ) : null,
        },
      ],
    },
    {
      Header: 'Name',
      sticky: 'left',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
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
        {
          Header: 'Status',
          width: 60,
          accessor: 'status',
        },
      ],
    },
    {
      Header: 'Progress',
      sticky: 'right',
      columns: [
        {
          Header: 'Profile Progress',
          Footer: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
  ];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(index * 30)}</span>,
        visits: <span>{Math.floor(index * 100)}</span>,
        progress: <span>{Math.floor(index * 100)}</span>,
        status: Math.floor(index * 100),
        activity: Math.floor(index * 100),
        subRows: [
          {
            firstName: 'Sub Test',
            age: <span>{Math.floor(index * 30)}</span>,
            visits: <span>{Math.floor(index * 100)}</span>,
            progress: <span>{Math.floor(index * 100)}</span>,
            status: Math.floor(index * 100),
            activity: Math.floor(index * 100),
          },
        ],
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
  const data = React.useMemo(() => makeData(40), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
      defaultRowBackgroundColor="gohan.40"
      evenRowBackgroundColor="gohan.80"
    />
  );
};

export default Example;
