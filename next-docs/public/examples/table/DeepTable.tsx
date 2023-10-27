import { ControlsChevronDown, ControlsChevronRight } from '@heathmont/moon-icons-tw';
import { Table } from '@heathmont/moon-table-tw';
import React from 'react';

const Example = () => {
  const columnsInitial = [
    {
      accessor: 'expander',
      width: 60,
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
        <span {...getToggleAllRowsExpandedProps()}>
          {isAllRowsExpanded ? <ControlsChevronDown /> : <ControlsChevronRight />}
        </span>
      ),
      Cell: ({ row }: any) =>
        row.canExpand ? (
          <span style={{ paddingLeft: `${row.depth * 2}rem` }}>
            {row.isExpanded ? <ControlsChevronDown /> : <ControlsChevronRight />}
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
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(index * 30)}</span>,
        visits: <span>{Math.floor(index * 100)}</span>,
        activity: Math.floor(index * 100),
        subRows: Array.from('_'.repeat(3)).map(() => ({
          firstName: 'Sub Test',
          age: <span>{Math.floor(index * 30)}</span>,
          visits: <span>{Math.floor(index * 100)}</span>,
          activity: Math.floor(index * 100),
          subRows: Array.from('_'.repeat(3)).map(() => ({
            firstName: 'Sub Test 2',
            age: <span>{Math.floor(index * 30)}</span>,
            visits: <span>{Math.floor(index * 100)}</span>,
            activity: Math.floor(index * 100),
            subRows: Array.from('_'.repeat(3)).map(() => ({
              firstName: 'Sub Test 2',
              age: <span>{Math.floor(index * 30)}</span>,
              visits: <span>{Math.floor(index * 100)}</span>,
              activity: Math.floor(index * 100),
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
      getOnRowClickHandler={(row: any) => () => {
        (row as any).canExpand
          ? () => (row as any).toggleRowExpanded()
          : undefined;
      }}
    />
  );
};

export default Example;
