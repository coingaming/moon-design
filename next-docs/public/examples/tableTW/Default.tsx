import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

import makeData from './makeData';

function App() {
  const defaultColumn = React.useMemo(
    () => ({
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 300,
    }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Age',
        accessor: 'age',
        collapse: true,
        width: 40,
        disableResizing: true,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        collapse: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        collapse: true,
        width: 300,
        disableResizing: true,
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        collapse: true,
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      withCellBorder={true}
    />
  );
}

export default App;
