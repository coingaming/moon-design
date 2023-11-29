import React, { useEffect, useState } from "react";
import { Table } from "@heathmont/moon-table-tw";
import { Button, Chip, Modal, Tag, Tooltip } from "@heathmont/moon-core-tw";
import { ControlsClose, FilesExternalLink, Other3DotsHorizontal, TimeCalendarDate } from "@heathmont/moon-icons-tw";

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
          Header: () => {
            return (
              <div className="flex h-full items-center gap-x-1">
                <span>Deals</span>
                <Tooltip open={showTip}>
                  <Tooltip.Trigger className="max-h-6">
                    <Chip
                      variant={showTip ? undefined : "ghost"}
                      iconOnly={<FilesExternalLink
                        key="dealsExpand"
                        className="text-moon-20 cursor-pointer"
                        onClick={(e) => { expandDeals() }}
                      />}
                    />
                  </Tooltip.Trigger>
                    <Tooltip.Content position="top-start">
                      Click to open view
                    <Tooltip.Arrow />
                  </Tooltip.Content>
                </Tooltip>
              </div>
          )},
          accessor: 'deals',
          Footer: '',
        },
        {
          Header: 'Amount',
          accessor: 'amount',
          Footer: '',
          maxWidth: 90,
          width: 90,
        },
        {
          Header: 'Currency',
          accessor: 'currency',
          Footer: '',
          maxWidth: 90,
          width: 90,
        },
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
          minWidth: 150,
          width: 150,
        },
        {
          id: 'extraLongData_3',
          Header: 'Actions',
          accessor: 'actions',
          Footer: '',
          minWidth: 70,
          width: 70,
        },
      ],
    },
  ];

  const columnsExpandedDeals = [
    {
      id: 'deLeftSticky',
      Header: '',
      sticky: 'left',
      columns: [
        {
          id: 'de_0',
          Header: 'Location',
          accessor: 'location',
          Footer: '',
          minWidth: 100,
          maxWidth: 100,
        },
      ],
    },
    {
      id: 'deExtraLongData',
      Header: '',
      columns: [
        {
          id: 'de_1',
          Header: 'Deals',
          accessor: 'deals',
          Footer: '',
          width: 900,
        }
      ],
    },
    {
      id: 'deRightSticky',
      Header: '',
      sticky: 'right',
      columns: [
        {
          id: 'de_2',
          Header: 'Date range',
          accessor: 'daterange',
          Footer: '',
          minWidth: 200,
          maxWidth: 200,
        }
      ],
    },
  ];

  const [title, setTitle] = useState('');
  const [view, setView] = useState<React.JSX.Element | undefined>();
  const [isExpanded, setIsExpanded] = useState(false);

  /** This service variable is being used to show/hide the tip
   * that pays attention to the call view icon at the page start.
   */
  const [showTip, setShowTip] = useState(false);
  useEffect(() => {
    setShowTip(true);
  }, [setShowTip]);

  const expandDeals = () => {
    setShowTip(false);
    setTitle('Deals view');
    setView(<Table
        columns={dealExpandedColumns}
        data={data}
        width={1200}
        height={400}
        selectable={true}
        withFooter={false}
      />);
    setIsExpanded(true);
  }

  const collapseExpanded = () => setIsExpanded(false);

  const makeData = () => {
    return [
      {
        location: 'Lithuania',
        deals: '',
        daterange: <Chip size="sm" className="bg-transparent" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.10.01 - 23.10.31</Chip>,
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        actions: tooltip(),
      },
      {
        location: 'AMD',
        deals: '',
        daterange: <Chip size="sm" className="bg-transparent" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.10.01 - 23.10.31</Chip>,
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        actions: tooltip(),
      },
      {
        location: 'Europe',
        deals: rearrangeData([{'10.0': { start: '10000', end: '20000' }}, {'9.0': { start: '20000', end: '30000' }}, {'8.0': { start: '30000', end: '40000' }}, {'7.0': { start: '40000', end: '50000' }}, {'6.0': { start: '50000', end: '60000' }}]),
        daterange: <Chip size="sm" className="bg-transparent" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.10.01 - 23.10.31</Chip>,
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        actions: tooltip(),
      },
      {
        location: 'Europe',
        deals: rearrangeData([{'5.0': { start: '2', end: '3' }}]),
        daterange: <Chip size="sm" className="bg-transparent" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.12.01 -</Chip>,
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        actions: tooltip(),
      },
      {
        location: 'Europe',
        deals: rearrangeData([{'0.0': { start: '0' }}]),
        daterange: <Chip size="sm" className="bg-transparent" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.11.01 - 23.11.30</Chip>,
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        actions: tooltip(),
      },
      {
        location: 'Asia',
        deals: rearrangeData([{'6.0': { start: '3', end: '4' }}]),
        daterange: <Chip size="sm" className="bg-transparent" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.11.01 -</Chip>,
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        actions: tooltip(),
      },
      {
        location: 'Asia',
        deals: rearrangeData([{'5.0': { start: '0', end: '150000' }}, {'4.0': { start: '150000', end: '500000' }}]),
        daterange: <Chip size="sm" className="bg-transparent" iconLeft={<TimeCalendarDate className="text-moon-24" />}>23.05.01 - 23.10.31</Chip>,
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        actions: tooltip(),
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
      <div className="px-3 text-moon-14 flex items-center overflow-x-auto">
        {deals}
      </div>
    );
  }

  const tooltip = () => (
    <Tooltip>
      <Tooltip.Trigger className="max-h-6">
        <Chip
          variant="default"
          iconOnly={<Other3DotsHorizontal className="text-moon-24 max-h-6" />}
        />
      </Tooltip.Trigger>
        <Tooltip.Content position="top-start">
          Any activity
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 50,
      width: 150,
      maxWidth: Number.MAX_SAFE_INTEGER,
    }),
    []
  );

  const columns = React.useMemo(() => columnsInitial, [showTip]);
  const dealExpandedColumns = React.useMemo(() => columnsExpandedDeals, [])
  const data = React.useMemo(() => makeData(), []);

  return (
    <>
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        width={900}
        height={400}
        withFooter={false}
      />
      <Modal open={isExpanded} onClose={collapseExpanded}>
        <Modal.Backdrop />
        <Modal.Panel className="bg-zeno w-auto max-w-fit max-h-screen">
          <div className="px-4 pt-2 pb-4">
            <div className="flex justify-between items-center gap-x-4 w-full mb-3">
              <h3 className="text-moon-20 text-beerus font-light">
                {title}
              </h3>
              <Button
                className="bg-transparent p-0 outline-none"
                onClick={collapseExpanded}
              >
                <ControlsClose className="text-moon-32"/>
              </Button>
            </div>
            <div className="w-full bg-gohan rounded-md px-1 py-0.5">
              {view}
            </div>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
