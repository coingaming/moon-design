import React from "react";
import { Table } from "@heathmont/moon-table-tw";
import { Chip } from "@heathmont/moon-core-tw";
import { TimeCalendarDate } from "@heathmont/moon-icons-tw";

const Example = () => {
  const columnsInitial = [
    {
      id: 'leftSticky',
      Header: '',
      sticky: 'left',
      columns: [
        {
          id: 'extraLongData_0',
          Header: 'Location',
          accessor: 'location',
          Footer: '',
          minWidth: 90,
          width: 100,
        },
      ],
    },
    {
      id: 'extraLongData',
      Header: '',
      columns: [
        {
          id: 'extraLongData_1',
          Header: 'Deals',
          accessor: 'deals',
          Footer: '',
        }
      ],
    },
    {
      id: 'rightSticky',
      Header: '',
      sticky: 'right',
      columns: [
        {
          id: 'extraLongData_2',
          Header: 'Date range',
          accessor: 'daterange',
          Footer: '',
          minWidth: 90,
          width: 90,
        },
        {
          id: 'extraLongData_3',
          Header: 'Actions',
          accessor: 'actions',
          Footer: '',
          minWidth: 50,
          width: 50,
        },
      ],
    },
  ];

  const makeData = () => {
    return [
      {
        location: 'Lithuania',
        deals: '',
        daterange: <Chip size="sm" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.10.01 - 23.10.31</Chip>,
        actions: '',
      },
      {
        location: 'AMD',
        deals: '',
        daterange: <Chip size="sm" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.10.01 - 23.10.31</Chip>,
        actions: '',
      },
      {
        location: 'Europe',
        deals: rearrangeData([{'10.0': { start: '10000', end: '20000' }}, {'9.0': { start: '20000', end: '30000' }}, {'8.0': { start: '30000', end: '40000' }}, {'7.0': { start: '40000', end: '50000' }}, {'6.0': { start: '50000', end: '60000' }}]),
        daterange: <Chip size="sm" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.10.01 - 23.10.31</Chip>,
        actions: '',
      },
      {
        location: 'Europe',
        deals: rearrangeData([{'5.0': { start: '2', end: '3' }}]),
        daterange: <Chip size="sm" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.12.01 -</Chip>,
        actions: '',
      },
      {
        location: 'Europe',
        deals: rearrangeData([{'0.0': { start: '0' }}]),
        daterange: <Chip size="sm" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.11.01 - 23.11.30</Chip>,
        actions: '',
      },
      {
        location: 'Asia',
        deals: rearrangeData([{'6.0': { start: '3', end: '4' }}]),
        daterange: <Chip size="sm" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.11.01 -</Chip>,
        actions: '',
      },
      {
        location: 'Asia',
        deals: rearrangeData([{'5.0': { start: '0', end: '150000' }}, {'4.0': { start: '150000', end: '500000' }}]),
        daterange: <Chip size="sm" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.05.01 - 23.10.31</Chip>,
        actions: '',
      },
    ];
  }

  const rearrangeData = (data: {[key: string]: { start?: string; end?: string }}[]) => {
    const deals = data.map((value, index, src) => {
      const [key, range] = Object.entries(value)[0];
      return (
        <>
          <span className="mr-[5px]">{key}</span>
          <span>({range.start ? range.start : ''}</span>
          <span>-</span>
          <span>{range.end ? range.end : ''})</span>
          {(index < src.length - 1) && <span className="mx-2">|</span>}
        </>
      );
    });

    return (
      <div className="px-3 text-moon-14 flex items-center overflow-clip">
        {deals}
      </div>
    );
  }

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 50,
      width: 150,
      maxWidth: Number.MAX_SAFE_INTEGER,
    }),
    []
  );

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={900}
      height={400}
      withFooter={false}
    />
  );
};

export default Example;
