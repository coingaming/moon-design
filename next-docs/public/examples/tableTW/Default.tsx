import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

import makeData from './makeData';

function App() {
  const defaultColumn = React.useMemo(
    () => ({
      width: 150, // width is used for both the flex-basis and flex-grow
    }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Age',
        accessor: 'age',
        collapse: true,
        width: 24,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        collapse: true,
        width: 24,
      },
      {
        Header: 'Status',
        accessor: 'status',
        width: 24,
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        collapse: true,
        width: 24,
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return <Table columns={columns} data={data} defaultColumn={defaultColumn} />;
}

export default App;
