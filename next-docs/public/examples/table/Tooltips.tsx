import React from 'react';
import { Table } from '@heathmont/moon-table-tw';
import ClipProps from '@heathmont/moon-table-tw/lib/private/types/ClipProps';
import { Chip, Tooltip } from '@heathmont/moon-core-tw';
import { IconShare } from '@heathmont/moon-assets';

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
        },
        {
          'Header': 'User & Supplier user',
          'accessor': 'user',
          'Footer': '',
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
        },
        {
          'Header': 'Amount',
          'accessor': 'amount',
          'maxWidth': 100,
          'Footer': '',
        },
        {
          'Header': 'Currency',
          'accessor': 'currency',
          'maxWidth': 100,
          'Footer': '',
        },
        {
          'Header': 'Status',
          'accessor': 'status',
          'maxWidth': 200,
          'Footer': '',
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
        },
      ]
    }
  ];

  const tooltip = (className: string) => {
    return (
      <Tooltip>
        <Tooltip.Trigger>
          <Chip
            className='bg-transparent hover:bg-transparent'
          >
            <IconShare />
          </Chip>
        </Tooltip.Trigger>
        <Tooltip.Content
          position="top-start"
          className={className}
        >
          Round details
          <Tooltip.Arrow
            className={className}
          />
        </Tooltip.Content>
      </Tooltip>
    );
  };

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        uuid: '84837d8ac654aa4689efa4649-84837d8ac654aa4689efa4649756454a5646545546d54f6546f546',
        user: 'aleksandr@heathmonitoring.com',
        processTime: '2023-09-19T14:31:46.105Z',
        client: 'Bender (old) Coingaming',
        gameNameAndProvider: 'Pragmatic Play',
        amount: 22.97,
        currency: 'USD',
        status: 'SUCCESS',

        /**
         * The expression below sets a tooltip with transparent background in the second row only.
         */
        actions: index === 1 ? tooltip('bg-transparent') : tooltip('bg-goku'),
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 10,
      width: 150,
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
      getOnRowClickHandler={(row: { id: any }) => () => {}}
    />
  );
};

export default Example;
