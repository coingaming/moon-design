import React from 'react';
import { Table } from '@heathmont/moon-table-tw';
import ClipProps from '@heathmont/moon-table-tw/lib/private/types/ClipProps';
import { Tag } from '@heathmont/moon-core-tw';

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
          'Footer': '',
        },
        {
          'Header': 'Currency',
          'accessor': 'currency',
          'Footer': '',
          /*'maxWidth': Number.MAX_SAFE_INTEGER,
          'width': 80 */
        },
      ],
    },
    {
      'Header': 'Status',
      'sticky': 'right',
      'columns': [
        {
          'Header': 'Status',
          'accessor': 'status',
          'Footer': '',
        },
      ]
    }
  ];

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
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 10,
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
