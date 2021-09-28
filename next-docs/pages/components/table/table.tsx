import React from 'react';
import { BodyTR, Table, TD } from '@heathmont/moon-table';

import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/Table';

const DefaultTablePreview = () => {
  const columnsInitial = [
    {
      Header: 'Name',
      sticky: 'left',
      Footer: 'Name footer',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
          Footer: '',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
          Footer: '',
        },
      ],
    },
    {
      Header: 'Info',
      Footer: 'Info footer',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
          width: 50,
          Footer: '',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
          Footer: '',
        },
        {
          Header: 'Activity',
          accessor: 'activity',
          Footer: '',
        },
        {
          Header: 'Status',
          width: 60,
          accessor: 'status',
          Footer: '',
        },
      ],
    },
    {
      Header: 'Progress',
      sticky: 'right',
      Footer: 'Progress footer',
      columns: [
        {
          Header: 'Profile Progress',
          Footer: '',
          accessor: 'progress',
        },
      ],
    },
  ];

  const makeData = (length) => {
    return Array.from('_'.repeat(length)).map(() => {
      return {
        firstName: 'Test',
        lastName: 'Test',
        age: <span>{Math.floor(Math.random() * 30)}</span>,
        visits: <span>{Math.floor(Math.random() * 100)}</span>,
        progress: <span>{Math.floor(Math.random() * 100)}</span>,
        status: Math.floor(Math.random() * 100),
        activity: Math.floor(Math.random() * 100),
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
      withFooter={true}
    />
  );
};

const ExpandedRowTablePreview = () => {
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
          }: any) => (
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

  const makeData = (length) => {
    return Array.from('_'.repeat(length)).map(() => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(Math.random() * 30)}</span>,
        visits: <span>{Math.floor(Math.random() * 100)}</span>,
        progress: <span>{Math.floor(Math.random() * 100)}</span>,
        status: Math.floor(Math.random() * 100),
        activity: Math.floor(Math.random() * 100),
        subRows: [
          {
            firstName: 'Sub Test',
            age: <span>{Math.floor(Math.random() * 30)}</span>,
            visits: <span>{Math.floor(Math.random() * 100)}</span>,
            progress: <span>{Math.floor(Math.random() * 100)}</span>,
            status: Math.floor(Math.random() * 100),
            activity: Math.floor(Math.random() * 100),
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

const ExpandedDeepTablePreview = () => {
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

const ExpandedCustomContentTablePreview = () => {
  const columnsInitial = [
    {
      id: 'expander',
      width: 50,
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
        <span {...getToggleAllRowsExpandedProps()}>
          Expand
          {isAllRowsExpanded ? '👇' : '👉'}
        </span>
      ),
      Cell: ({ row }: any) => <span>{row.isExpanded ? '👇' : '👉'}</span>,
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 50,
    },
  ];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map(() => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(Math.random() * 30)}</span>,
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
      getOnRowClickHandler={(row) =>
        row.depth === 0 ? () => row.toggleRowExpanded() : undefined
      }
      renderRowSubComponent={({ row, backgroundColor }) => {
        return (
          <BodyTR
            {...row.getRowProps()}
            key={row.getRowProps().key + '1'}
            hasParent={true}
            isLastRow={true}
            backgroundColor={backgroundColor}
          >
            <TD style={{ width: '100%', textAlign: 'center' }}>
              Custom content
            </TD>
          </BodyTR>
        );
      }}
    />
  );
};

const CalendarTablePreview = () => {
  const columnsInitial = [
    {
      Header: '',
      accessor: 'date',
      sticky: 'left',
      width: 160,
      withRowSpan: true,
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 100,
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
      width: 100,
      accessor: 'status',
    },
    {
      Header: 'Profile Progress',
      Footer: 'Profile Progress',
      accessor: 'progress',
    },
  ];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        date: `January ${Math.floor(index / 5) + 1}, 2020`,
        age: <span>{Math.floor(Math.random() * 30)}</span>,
        visits: <span>{Math.floor(Math.random() * 100)}</span>,
        progress: <span>{Math.floor(Math.random() * 100)}</span>,
        status: Math.floor(Math.random() * 100),
        activity: Math.floor(Math.random() * 100),
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 260,
      maxWidth: 400,
    }),
    []
  );

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(30), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
      variant="calendar"
      getOnRowClickHandler={(row) => () => {}}
      headerBackgroundColor="gohan.100"
      defaultRowBackgroundColor="gohan.40"
      evenRowBackgroundColor="gohan.80"
    />
  );
};

const TableWithMinimapPreview = () => {
  const columnsInitial = [
    {
      Header: 'Name',
      sticky: 'left',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
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
    return Array.from('_'.repeat(length)).map(() => {
      return {
        firstName: 'Test',
        lastName: 'Test',
        age: <span>{Math.floor(Math.random() * 30)}</span>,
        visits: <span>{Math.floor(Math.random() * 100)}</span>,
        progress: <span>{Math.floor(Math.random() * 100)}</span>,
        status: Math.floor(Math.random() * 100),
        activity: Math.floor(Math.random() * 100),
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
      withMinimap
    />
  );
};

export default function PageTable() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Table</h1>
        <p className="text-lg mt-4">Lightweight, fast and extendable table.</p>
        <p className="text-lg mt-4">
          Based on{' '}
          <a
            className="underline"
            href="https://github.com/tannerlinsley/react-table"
          >
            react-table
          </a>
          .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={
            <div className="flex justify-around items-center w-full">
              <DefaultTablePreview />
            </div>
          }
          code={`import { Table } from '@heathmont/moon-components';

const columnsInitial = [
  {
    Header: 'Name',
    sticky: 'left',
    Footer: 'Name footer',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
        Footer: '',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        Footer: '',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info footer',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
        width: 50,
        Footer: '',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        Footer: '',
      },
      {
        Header: 'Activity',
        accessor: 'activity',
        Footer: '',
      },
      {
        Header: 'Status',
        width: 60,
        accessor: 'status',
        Footer: '',
      },
    ],
  },
  {
    Header: 'Progress',
    sticky: 'right',
    Footer: 'Progress footer',
    columns: [
      {
        Header: 'Profile Progress',
        Footer: '',
        accessor: 'progress',
      },
    ],
  },
];

const makeData = (length) => {
  return Array.from('_'.repeat(length)).map(() => {
    return {
      firstName: 'Test',
      lastName: 'Test',
      age: <span>{Math.floor(Math.random() * 30)}</span>,
      visits: <span>{Math.floor(Math.random() * 100)}</span>,
      progress: <span>{Math.floor(Math.random() * 100)}</span>,
      status: Math.floor(Math.random() * 100),
      activity: Math.floor(Math.random() * 100),
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
    withFooter={true}
  />
);
`}
        />
      </section>

      {/* Expanded Rows */}
      <section className="mt-8">
        <Preview
          title="Expanded Rows "
          preview={
            <div className="flex justify-around items-center w-full">
              <ExpandedRowTablePreview />
            </div>
          }
          code={`import { Table } from '@heathmont/moon-components';
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
        }: any) => (
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
                  paddingLeft: \`\${row.depth * 2}rem\`,
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

const makeData = (length) => {
  return Array.from('_'.repeat(length)).map(() => {
    return {
      firstName: 'Test',
      age: <span>{Math.floor(Math.random() * 30)}</span>,
      visits: <span>{Math.floor(Math.random() * 100)}</span>,
      progress: <span>{Math.floor(Math.random() * 100)}</span>,
      status: Math.floor(Math.random() * 100),
      activity: Math.floor(Math.random() * 100),
      subRows: [
        {
          firstName: 'Sub Test',
          age: <span>{Math.floor(Math.random() * 30)}</span>,
          visits: <span>{Math.floor(Math.random() * 100)}</span>,
          progress: <span>{Math.floor(Math.random() * 100)}</span>,
          status: Math.floor(Math.random() * 100),
          activity: Math.floor(Math.random() * 100),
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
`}
        />
      </section>

      {/* Expanded Rows with deep nesting */}
      <section className="mt-8">
        <Preview
          title="Expanded Rows with deep nesting"
          preview={
            <div className="flex justify-around items-center w-full">
              <ExpandedDeepTablePreview />
            </div>
          }
          code={`import { Table } from '@heathmont/moon-components';

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
        <span style={{ paddingLeft: \`\${row.depth * 2}rem\` }}>
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
);`}
        />
      </section>

      {/* Expanded rows with custom content */}
      <section className="mt-8">
        <Preview
          title="Expanded rows with custom content"
          preview={
            <div className="flex justify-around items-center w-full">
              <ExpandedCustomContentTablePreview />
            </div>
          }
          code={`import { Table } from '@heathmont/moon-components';

const columnsInitial = [
  {
    id: 'expander',
    width: 50,
    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
      <span {...getToggleAllRowsExpandedProps()}>
        Expand
        {isAllRowsExpanded ? '👇' : '👉'}
      </span>
    ),
    Cell: ({ row }: any) => <span>{row.isExpanded ? '👇' : '👉'}</span>,
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 50,
  },
];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map(() => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(Math.random() * 30)}</span>,
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
      getOnRowClickHandler={(row) =>
        row.depth === 0 ? () => row.toggleRowExpanded() : undefined
      }
      renderRowSubComponent={({ row, backgroundColor }) => {
        return (
          <BodyTR
            {...row.getRowProps()}
            key={row.getRowProps().key + '1'}
            hasParent={true}
            isLastRow={true}
            backgroundColor={backgroundColor}
          >
            <TD style={{ width: '100%', textAlign: 'center' }}>
              Custom content
            </TD>
          </BodyTR>
        );
      }}
    />
  );

`}
        />
      </section>

      {/* With minimap */}
      <section className="mt-8">
        <Preview
          title="With minimap"
          preview={
            <div className="flex justify-around items-center w-full">
              <TableWithMinimapPreview />
            </div>
          }
          code={`import { Table } from '@heathmont/moon-components';

const columnsInitial = [
  {
    Header: 'Name',
    sticky: 'left',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
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
  return Array.from('_'.repeat(length)).map(() => {
    return {
      firstName: 'Test',
      lastName: 'Test',
      age: <span>{Math.floor(Math.random() * 30)}</span>,
      visits: <span>{Math.floor(Math.random() * 100)}</span>,
      progress: <span>{Math.floor(Math.random() * 100)}</span>,
      status: Math.floor(Math.random() * 100),
      activity: Math.floor(Math.random() * 100),
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
    withMinimap
  />
);
`}
        />
      </section>

      {/* Calendar */}
      <section className="mt-8">
        <Preview
          title="Calendar"
          preview={
            <div className="flex justify-around items-center w-full">
              <CalendarTablePreview />
            </div>
          }
          code={`import { Table } from '@heathmont/moon-components';

const columnsInitial = [
  {
    Header: '',
    accessor: 'date',
    sticky: 'left',
    width: 160,
    withRowSpan: true,
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 100,
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
    width: 100,
    accessor: 'status',
  },
  {
    Header: 'Profile Progress',
    Footer: 'Profile Progress',
    accessor: 'progress',
  },
];

const makeData = (length: number) => {
  return Array.from('_'.repeat(length)).map((_, index) => {
    return {
      date: \`January \${Math.floor(index / 5) + 1}, 2020\`,
      age: <span>{Math.floor(Math.random() * 30)}</span>,
      visits: <span>{Math.floor(Math.random() * 100)}</span>,
      progress: <span>{Math.floor(Math.random() * 100)}</span>,
      status: Math.floor(Math.random() * 100),
      activity: Math.floor(Math.random() * 100),
    };
  });
};

const defaultColumn = React.useMemo(
  () => ({
    minWidth: 100,
    width: 260,
    maxWidth: 400,
  }),
  []
);

const columns = React.useMemo(() => columnsInitial, []);
const data = React.useMemo(() => makeData(30), []);

return (
  <Table
    columns={columns}
    data={data}
    defaultColumn={defaultColumn}
    width={800}
    height={400}
    variant="calendar"
    getOnRowClickHandler={(row) => () => {}}
    headerBackgroundColor="gohan.100"
    defaultRowBackgroundColor="gohan.40"
    evenRowBackgroundColor="gohan.80"
  />
);
`}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <PropsTable
          data={[
            {
              name: 'width',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Width of the table',
            },
            {
              name: 'height',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Height of the table',
            },
            {
              name: 'maxWidth',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Max width of the table',
            },
            {
              name: 'maxHeight',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Max height of the table',
            },
          ]}
        />
      </section>
    </>
  );
}
