import { Table } from '@heathmont/moon-table-tw';
import React from 'react';

const Example = () => {
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
      ],
    },
    {
      Header: 'Info1',
      columns: [
        {
          Header: 'Age1',
          accessor: 'age1',
          width: 50,
        },
        {
          Header: 'Visits1',
          accessor: 'visits1',
        },
        {
          Header: 'Activity1',
          accessor: 'activity1',
        },
      ],
    },
    {
      Header: 'Info2',
      columns: [
        {
          Header: 'Age2',
          accessor: 'age2',
          width: 50,
        },
        {
          Header: 'Visits2',
          accessor: 'visits2',
        },
        {
          Header: 'Activity2',
          accessor: 'activity2',
        },
      ],
    },
    {
      Header: 'Info3',
      columns: [
        {
          Header: 'Age3',
          accessor: 'age3',
          width: 50,
        },
        {
          Header: 'Visits3',
          accessor: 'visits3',
        },
        {
          Header: 'Activity3',
          accessor: 'activity3',
        },
      ],
    },
    {
      Header: 'Info4',
      columns: [
        {
          Header: 'Age4',
          accessor: 'age4',
          width: 50,
        },
        {
          Header: 'Visits4',
          accessor: 'visits4',
        },
        {
          Header: 'Activity4',
          accessor: 'activity4',
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
        lastName: 'Test',
        age: <span>{Math.floor(index * 30)}</span>,
        visits: <span>{Math.floor(index * 100)}</span>,
        activity: Math.floor(index * 100),
        progress: <span>{Math.floor(index * 100)}</span>,
        status: Math.floor(index * 100),
        age1: <span>{Math.floor(index * 30)}</span>,
        visits1: <span>{Math.floor(index * 100)}</span>,
        activity1: Math.floor(index * 100),
        age2: <span>{Math.floor(index * 30)}</span>,
        visits2: <span>{Math.floor(index * 100)}</span>,
        activity2: Math.floor(index * 100),
        age3: <span>{Math.floor(index * 30)}</span>,
        visits3: <span>{Math.floor(index * 100)}</span>,
        activity3: Math.floor(index * 100),
        age4: <span>{Math.floor(index * 30)}</span>,
        visits4: <span>{Math.floor(index * 100)}</span>,
        activity4: Math.floor(index * 100),
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

export default Example;
