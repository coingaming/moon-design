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
        Footer: 'Age',
        accessor: 'age',
        collapse: true,
        width: 40,
        disableResizing: true,
      },
      {
        Header: 'Visits',
        Footer: 'Visits',
        accessor: 'visits',
        collapse: true,
      },
      {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status',
        collapse: true,
        width: 300,
        disableResizing: true,
      },
      {
        Header: 'Profile Progress',
        Footer: 'Profile Progress',
        accessor: 'progress',
        collapse: true,
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(10), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      withCellBorder={true}
      withFooter
      withMinimap
    />
  );
}

export default App;
