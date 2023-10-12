import { Table } from "@heathmont/moon-table-tw";
import React from "react";

interface HeaderProps {
  isAllRowsExpanded: boolean;
  getToggleAllRowsExpandedProps: () => React.HTMLAttributes<HTMLSpanElement>;
}

const Example = () => {
  const columnsInitial = [
    {
      'Header': 'Expand/Select',
      'sticky': 'left',
      columns: [
        {
          'id': 'expander',
          Header: ({
            getToggleAllRowsExpandedProps,
            isAllRowsExpanded,
          }: HeaderProps) => (
            <span {...getToggleAllRowsExpandedProps()}>
              {isAllRowsExpanded ? '👇' : '👉'}
            </span>
          ),
          Cell: ({ row }: any) =>
            row.canExpand ? (
              <span
                {...row.getToggleRowExpandedProps({
                  style: {
                    paddingLeft: `${row.depth * 2}rem`,
                  },
                })}
              >
                {row.isExpanded ? '👇' : '👉'}
              </span>
            ) : null,
        },
      ],
    },
    {
      Header: 'Name',
      sticky: 'left',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
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
        {
          Header: 'Status',
          width: 60,
          accessor: 'status',
        },
        {
          Header: 'Profile Progress',
          Footer: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
    {
      Header: 'Actions',
      sticky: 'right',
      columns: [
        {
          Header: 'Actions',
          accessor: 'actions',
          Footer: '',
        },
      ],
    },
  ];

  const makeData = () => [
    {
      firstName: 'Test lvl1',
      age: <span>36</span>,
      visits: <span>50</span>,
      progress: <span>20</span>,
      status: 19,
      activity: 54,
      subRows: [
        {
          firstName: 'Sub test lvl2',
          age: <span>96</span>,
          visits: <span>8</span>,
          progress: <span>2</span>,
          status: 97,
          activity: 23,
          subRows: [
            {
              firstName: 'Sub test lvl3',
              age: <span>63</span>,
              visits: <span>82</span>,
              progress: <span>59</span>,
              status: 52,
              activity: 46,
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>64</span>,
              visits: <span>35</span>,
              progress: <span>78</span>,
              status: 65,
              activity: 5,
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>12</span>,
              visits: <span>4</span>,
              progress: <span>44</span>,
              status: 98,
              activity: 5,
            },
          ],
        },
        {
          firstName: 'Sub test lvl2',
          age: <span>74</span>,
          visits: <span>5</span>,
          progress: <span>1</span>,
          status: 86,
          activity: 2,
          subRows: [
            {
              firstName: 'Sub test lvl3',
              age: <span>89</span>,
              visits: <span>98</span>,
              progress: <span>54</span>,
              status: 24,
              activity: 43,
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>52</span>,
              visits: <span>25</span>,
              progress: <span>25</span>,
              status: 97,
              activity: 35,
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>55</span>,
              visits: <span>54</span>,
              progress: <span>24</span>,
              status: 56,
              activity: 33,
            },
          ],
        },
        {
          firstName: 'Sub test lvl2',
          age: <span>53</span>,
          visits: <span>63</span>,
          progress: <span>24</span>,
          status: 48,
          activity: 3,
          subRows: [
            {
              firstName: 'Sub test lvl3',
              age: <span>4</span>,
              visits: <span>653</span>,
              progress: <span>36</span>,
              status: 44,
              activity: 43,
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>49</span>,
              visits: <span>45</span>,
              progress: <span>454</span>,
              status: 35,
              activity: 4,
            },
          ],
        },
      ],
    }
  ];

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(), []);

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 150,
      maxWidth: 400,
    }), []);

  return (
    <Table
      columns={columns}
      defaultColumn={defaultColumn}
      data={data}
      width={800}
      height={400}
      selectable={true}
      useCheckbox={true}
      expandedByDefault={true}
      getOnRowSelect={() => (rows: any) => {
        //console.log(rows);
        //console.log(`IDs of selected rows - ${rows.map((row: any) => row.id)}`);
      }}
    />
  );
}

export default Example;
