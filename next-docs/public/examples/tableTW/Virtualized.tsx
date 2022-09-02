import { Table } from '@heathmont/moon-table-tw';
import React from 'react';
import makeData from './makeData';

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Row Index',
        accessor: (row: unknown, i: number) => i,
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
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
    ],
    []
  );

  // implement your own makeData function
  const data = React.useMemo(() => makeData(100000), []);

  return <Table columns={columns} data={data} />;
}

export default App;
