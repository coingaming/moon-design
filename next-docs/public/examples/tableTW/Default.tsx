import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

import makeData from './makeData';

function App() {
  const defaultColumn = React.useMemo(
    () => ({
      width: 150, // width is used for both the flex-basis and flex-grow
    }),
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
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
            collapse: true,
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            collapse: true,
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            collapse: true,
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(20), []);

  return <Table columns={columns} data={data} defaultColumn={defaultColumn}/>;
}

export default App;
