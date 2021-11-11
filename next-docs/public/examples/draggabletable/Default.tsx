import React from 'react';

import { DraggableTable } from '@heathmont/moon-components';

const Example = () => (
  <DraggableTable
    columns={[
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'User Type',
        accessor: 'userType',
      },
      {
        Header: 'Language',
        accessor: 'language',
      },
      {
        Header: 'Product',
        accessor: 'product',
      },
      {
        Header: 'Views',
        accessor: 'views',
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Tags',
        accessor: 'tags',
      },
    ]}
    data={[
      {
        id: 0,
        name: 'Amelia',
        status: 'ACTIVE',
        userType: 'REGISTERED',
        language: 'en',
        product: 'Jackets',
        views: '22',
        region: 'EU',
        tags: 'UK, DE',
      },
      {
        id: 1,
        name: 'Poppy',
        status: 'ACTIVE',
        userType: 'REGISTERED',
        language: 'en',
        product: 'Athletic',
        views: '0',
        region: 'All',
        tags: 'LatAm',
      },
      {
        id: 2,
        name: 'Olivia',
        status: 'INACTIVE',
        userType: 'ANONYMOUS',
        language: 'de',
        product: 'United',
        views: '6',
        region: 'EU',
        tags: 'FR',
      },
      {
        id: 3,
        name: 'Ava',
        status: 'ACTIVE',
        userType: 'REGISTERED',
        language: 'en',
        product: 'Jackets',
        views: '10',
        region: 'EU',
        tags: 'ET, LV',
      },
      {
        id: 4,
        name: 'Emily',
        status: 'ACTIVE',
        userType: 'ANONYMOUS',
        language: 'de',
        product: 'S',
        views: '71',
        region: 'EU',
        tags: 'UK, DE',
      },
    ]}
    onDropRow={(row: JSX.Element, index: number) => {}}
  />
);

export default Example;
