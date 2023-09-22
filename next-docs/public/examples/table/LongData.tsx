import React from 'react';
import { Table } from '@heathmont/moon-table-tw';
import ClipProps from '@heathmont/moon-table-tw/lib/private/types/ClipProps';

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
      ],
    },
    {
      'Header': 'Amount',
      'sticky': 'right',
      'columns': [
        {
          'Header': 'Amount',
          'accessor': 'amount',
          'Footer': '',
        }
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
        amount: 22.90748093020859,
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 150,

      /* The next prop is commented to provide an opportunity
        to expand any table column as much as possible */
      /* maxWidth: 400, */
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
      width={800}
      height={400}
      withFooter={false}
      textClip={textClip}
    />
  );
};

export default Example;
