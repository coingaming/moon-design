import React from 'react';
import { Table } from '@heathmont/moon-table-tw';
import ClipProps from '@heathmont/moon-table-tw/lib/private/types/ClipProps';
import { Chip, Tag, Tooltip } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => {
  const columnsInitial = [
    {
      'Header': 'Transactions',
      'sticky': 'left',
      columns: [
        {
          'Header': 'Transaction UUID',
          'accessor': 'uuid',
          'Footer': '',
          'width': 250,
        },
        {
          'Header': 'User & Supplier user',
          'accessor': 'user',
          'Footer': '',
          'minWidth': 80,
          'width': 240,
        },
      ],
    },
    {
      'Header': 'Info',
      'columns': [
        {
          'Header': 'Process time',
          'accessor': 'processTime',
          'Footer': '',
        },
        {
          'Header': 'Client',
          'accessor': 'client',
          'Footer': '',
        },
        {
          'Header': 'Game name & provider',
          'accessor': 'gameNameAndProvider',
          'Footer': '',
          'width': 120,
        },
        {
          'Header': 'Amount',
          'accessor': 'amount',
          'Footer': '',
          'minWidth': 60,
          'width': 70,
        },
        {
          'Header': 'Currency',
          'accessor': 'currency',
          'Footer': '',
          'minWidth': 75,
          'width': 80,
        },
        {
          'Header': 'Status',
          'accessor': 'status',
          'Footer': '',
          'minWidth': 80,
          'width': 90
        },
        {
          'Header': 'Kind',
          'accessor': 'kind',
          'Footer': '',
          'minWidth': 50,
          'width': 60
        },
      ],
    },
    {
      'Header': 'Actions',
      'sticky': 'right',
      'columns': [
        {
          'Header': 'Actions',
          'accessor': 'actions',
          'Footer': '',
          'minWidth': 60,
          'width': 80,
        },
      ],
    },
  ];

  const tooltip = () => (
    <Tooltip>
      <Tooltip.Trigger className="max-h-6">
        <Chip
          variant="ghost"
          iconOnly={<OtherFrame className="text-moon-24" />}
        />
      </Tooltip.Trigger>
      <Tooltip.Content position="top-start">
        Round details
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        uuid: '84837d8ac654aa4689efa4649-84837d8ac654aa4689efa4649756454a5646545546d54f6546f546',
        user: 'aleksandr@heathmonitoring.com',
        processTime: '2023-09-19T14:31:46.105Z',
        client: 'Bender (old) Coingaming',
        gameNameAndProvider: 'Pragmatic Play',
        amount: 22.97,
        currency: <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>,
        status: <Tag className="bg-roshi-10 text-lg text-roshi max-w-fit">SUCCESS</Tag>,
        kind: <Tag className="bg-roshi-10 text-lg text-roshi max-w-fit">BET</Tag>,
        actions: tooltip(),
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: Number.MAX_SAFE_INTEGER,
    }),
    []
  );

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(40), []);
  const textClip = 'clip' as ClipProps;

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={900}
      height={400}
      withFooter={false}
      textClip={textClip}
    />
  );
};

export default Example;
