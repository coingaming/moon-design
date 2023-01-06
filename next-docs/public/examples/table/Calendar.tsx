import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

const Example = () => {
  const columnsInitial = [
    {
      Header: '',
      sticky: 'left',
      accessor: 'date',
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
      accessor: 'status',
      width: 100,
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
      getOnRowClickHandler={(row: any) => () => {}}
      variant="calendar"
      headerBackgroundColor="gohan"
      defaultRowBackgroundColor="gohan.40"
      evenRowBackgroundColor="gohan.80"
    />
  );
};

export default Example;
