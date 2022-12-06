import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

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
          sortType: 'basic',
          width: 50,
          Footer: '',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
          sortType: 'basic',
          Footer: '',
        },
        {
          Header: 'Activity',
          accessor: 'activity',
          sortType: 'basic',
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
          sortType: 'basic',
        },
      ],
    },
  ];
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 150,
      maxWidth: 400,
    }),
    []
  );
  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        firstName: `Test ${index}`,
        lastName: `Test ${index}`,
        age: <span>{Math.floor(index + Math.ceil(Math.random() * 10))}</span>,
        visits: <span>{Math.floor(index + Math.ceil(Math.random() * 10))}</span>,
        progress: <span>{Math.floor(index + Math.ceil(Math.random() * 10))}</span>,
        status: Math.floor(index + Math.ceil(Math.random() * 10)),
        activity: Math.floor(index + Math.ceil(Math.random() * 10)),
      };
    });
  };

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(40), []);

  return (
    <Table
      columns={columns}
      data={data}
      isSorting={true}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
    />
  );
};

export default Example;
