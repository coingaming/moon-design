import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

const Example = () => {
  const columnsInitial = [
    {
      Header: '',
      accessor: 'date',
      sticky: 'left',
      width: 100,
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
      width: 100,
    },
    {
      Header: 'Activity',
      accessor: 'activity',
      width: 100,
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
      width: 100,
    },
  ];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        date: `January ${Math.floor(index / 5) + 1}, 2020`,
        age: <span>{Math.floor(index * 30)}</span>,
        visits: <span>{Math.floor(index * 100)}</span>,
        progress: <span>{Math.floor(index * 100)}</span>,
        status: Math.floor(index * 100),
        activity: Math.floor(index * 100),
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
      getOnRowClickHandler={(row: any) => () => {}}
      headerBackgroundColor="gohan.100"
      defaultRowBackgroundColor="gohan.40"
      evenRowBackgroundColor="gohan.80"
    />
  );
};

export default Example;
