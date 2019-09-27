import * as React from 'react';
import { create } from 'react-test-renderer';

import { Badge } from '../../badge/badge';
import { CardBalance } from '../balance';

describe('CardBalance', () => {
  test('renders correctly', () => {
    const balance = create(
      <CardBalance
        from={{
          currency: 'Bitcoin',
          value: '1526.56',
          unit: 'mBTC',
          unitTitle: 'Millibitcoin',
        }}
      />
    );

    expect(balance).toMatchSnapshot();
  });

  test('renders with currency if no unitTitle provided', () => {
    const balance = create(
      <CardBalance
        from={{
          currency: 'Bitcoin',
          value: '1526.56',
          unit: 'mBTC',
        }}
      />
    );

    expect(balance).toMatchSnapshot();
  });

  test('renders correctly with a badge', () => {
    const balance = create(
      <CardBalance
        badge={<Badge>Active</Badge>}
        from={{
          currency: 'Bitcoin',
          value: '1526.56',
          unit: 'mBTC',
          unitTitle: 'Millibitcoin',
        }}
      />
    );

    expect(balance).toMatchSnapshot();
  });
});
