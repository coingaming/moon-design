import React, { useState } from 'react';
import { Table } from '@heathmont/moon-table-tw';
import { Checkbox } from '@heathmont/moon-core-tw';

interface HeaderProps {
  rows: [];
  rowsById: { [key: string]: boolean };
}

const Example = () => {
  /**
   *  The PREFIX is necessary if you use several different tables with checkboxes on the same page.
   *  Each table should have its own unique PREFIX to avoid assigning identical indexes to elements.
   *  When using only one table, the PREFIX can be omitted.
   */
  const PREFIX = "any_unique_string_for_each_table";

  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const columnsInitial = [
    {
      'Header': 'Select',
      'sticky': 'left',
      'Footer': '',
      columns: [
        {
          'id': '_any_unique_string_required',
          Header: ({
            rows,
            rowsById,
          }: HeaderProps) => (
            <div className="flex items-center h-full">
              <Checkbox
                id={ PREFIX && PREFIX.length ? `${PREFIX}_root` : 'root' }
                checked={(Object.keys(rowsById).length === Object.keys(selected).length)}
                indeterminate={!!Object.keys(selected).length && Object.keys(selected).length < Object.keys(rowsById).length}
                onClick={(e) => { e.stopPropagation() }}
              />
            </div>
          ),
          Cell: ({ row, rowsById }: any) => (
              <div className="flex items-center h-full">
                <Checkbox
                  id={ PREFIX && PREFIX.length ? `${PREFIX}_${row.id}` : row.id }
                  checked={selected[row.id] === true}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
          ),
          Footer: '',
        },
      ],
    },
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
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        firstName: 'Test',
        lastName: 'Test',
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

  const columns = React.useMemo(() => columnsInitial, [selected]);
  const data = React.useMemo(() => makeData(40), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
      withFooter={true}
      selectable={true}
      useCheckbox={true}
      getOnRowSelect={() => (rows) => {
        console.log(`IDs of selected rows - ${rows.map((row: any) => row.id)}`);
        setSelected(rows.reduce((acc: {[key: string]: boolean}, item) => {
          acc[item.id] = true;
          return acc;
        }, {})
      );
      }}
    />
  );
};

export default Example;
