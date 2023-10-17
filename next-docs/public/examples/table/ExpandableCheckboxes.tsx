import { Checkbox, Chip, Tooltip, mergeClassnames } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";
import { Table } from "@heathmont/moon-table-tw";
import React, { useMemo, useState } from "react";

interface HeaderProps {
  rows: [];
  rowsById: { [key: string]: boolean };
  isAllRowsExpanded: boolean;
  getToggleAllRowsExpandedProps: () => React.HTMLAttributes<HTMLSpanElement>;
}

const Example = () => {
  const PREFIX = "expsel";

  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const columnShift = (depth: number) => {
    const shiftMap: { [key: number]: string }  = [
      'ps-0',
      'ps-[25px]',
      'ps-[50px]',
      'ps-[75px]',
      'ps-[100px]',
    ];

    return shiftMap[depth];
  }

  const checkIfSelected = (id: string, canExpand: boolean, rowsById: { [key: string]: boolean }) => {
    return canExpand
      ? Object.keys(rowsById)
      .filter((rowId) => rowId.indexOf(id) === 0 && rowId !== id)
      .every((rowId) => selected[rowId] === true)
      : selected[id] === true;
  }

  const checkIfIndeterminate = (id: string, rowsById: { [key: string]: boolean }) => {
    const matches =  Object.keys(rowsById)
      .filter((rowId) => rowId.indexOf(id) === 0 && rowId !== id);
      return !matches.every((rowId) => selected[rowId] === true) && matches.some((rowId) => selected[rowId] === true);
  }

  const columnsInitial = [
    {
      'Header': 'Expand/Select',
      'sticky': 'left',
      columns: [
        {
          'id': 'expsel',
          Header: ({
            rows,
            rowsById,
            getToggleAllRowsExpandedProps,
            isAllRowsExpanded,
          }: HeaderProps) => (
            <div className="flex items-center gap-x-1">
              <div className="flex items-center h-full">
                <Checkbox
                  id={ PREFIX && PREFIX.length ? `${PREFIX}_root` : 'root'}
                  checked={(Object.keys(rowsById).length === Object.keys(selected).length)}
                  indeterminate={!!Object.keys(selected).length && Object.keys(selected).length < Object.keys(rowsById).length}
                  onClick={(e: any) => { e.stopPropagation() }}
                />
              </div>
              {<span {...getToggleAllRowsExpandedProps()}>
                {isAllRowsExpanded ? '👇' : '👉'}
              </span>}
            </div>
          ),
          Cell: ({ row, rowsById }: any) => (
              <div className={mergeClassnames(
                    "flex items-center gap-x-1",
                    columnShift(row.depth),
                  )}
                onClick={(e) => {
                  if ((e.target as unknown as HTMLElement).tagName === 'SPAN') e.stopPropagation();
                }}
              >
                <div className="flex items-center h-full">
                  <Checkbox
                    id={ PREFIX && PREFIX.length ? `${PREFIX}_${row.id}` : row.id}
                    checked={checkIfSelected(row.id, row.canExpand, rowsById)}
                    indeterminate={checkIfIndeterminate(row.id, rowsById)}
                    onClick={(e: any) => e.stopPropagation()}
                  />
                </div>
                { row.canExpand ? (
                  <span {...row.getToggleRowExpandedProps()}>
                    {row.isExpanded ? '👇' : '👉'}
                  </span>
                ) : null }
              </div>
          )
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

  const tooltip = () => (
    <Tooltip>
      <Tooltip.Trigger className="max-h-6">
        <Chip
          variant="ghost"
          iconOnly={<OtherFrame className="text-moon-24 max-h-6" />}
        />
      </Tooltip.Trigger>
      <Tooltip.Content position="top-start">
        Round details
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );

  const makeData = () => [
    {
      firstName: 'Test lvl1',
      age: <span>36</span>,
      visits: <span>50</span>,
      progress: <span>20</span>,
      status: 19,
      activity: 54,
      actions: tooltip(),
      subRows: [
        {
          firstName: 'Sub test lvl2',
          age: <span>96</span>,
          visits: <span>8</span>,
          progress: <span>2</span>,
          status: 97,
          activity: 23,
          actions: tooltip(),
          subRows: [
            {
              firstName: 'Sub test lvl3',
              age: <span>63</span>,
              visits: <span>82</span>,
              progress: <span>59</span>,
              status: 52,
              activity: 46,
              actions: tooltip(),
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>64</span>,
              visits: <span>35</span>,
              progress: <span>78</span>,
              status: 65,
              activity: 5,
              actions: tooltip(),
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>12</span>,
              visits: <span>4</span>,
              progress: <span>44</span>,
              status: 98,
              activity: 5,
              actions: tooltip(),
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
          actions: tooltip(),
          subRows: [
            {
              firstName: 'Sub test lvl3',
              age: <span>89</span>,
              visits: <span>98</span>,
              progress: <span>54</span>,
              status: 24,
              activity: 43,
              actions: tooltip(),
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>52</span>,
              visits: <span>25</span>,
              progress: <span>25</span>,
              status: 97,
              activity: 35,
              actions: tooltip(),
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>55</span>,
              visits: <span>54</span>,
              progress: <span>24</span>,
              status: 56,
              activity: 33,
              actions: tooltip(),
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
          actions: tooltip(),
          subRows: [
            {
              firstName: 'Sub test lvl3',
              age: <span>4</span>,
              visits: <span>653</span>,
              progress: <span>36</span>,
              status: 44,
              activity: 43,
              actions: tooltip(),
            },
            {
              firstName: 'Sub test lvl3',
              age: <span>49</span>,
              visits: <span>45</span>,
              progress: <span>454</span>,
              status: 35,
              activity: 4,
              actions: tooltip(),
            },
          ],
        },
      ],
    }
  ];

  const columns = React.useMemo(() => columnsInitial, [selected]);
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
        setSelected(rows.reduce((acc: {[key: string]: boolean}, item: any) => {
            acc[`${item.id}`] = true;
            return acc;
          }, {})
        );
      }}
    />
  );
}

export default Example;
