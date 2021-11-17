import React from 'react';

import { Table } from '@heathmont/moon-table';

const Example = () => {
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

export default Example;
