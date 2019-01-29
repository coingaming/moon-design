import * as React from 'react';
import { create } from 'react-test-renderer';
import { CardBalance } from '../';

describe('CardBalance', () => {
  test('renders correctly', () => {
    const balance = create(
      <CardBalance
        from={{
          currency: 'Bitcoin',
          value: 1526.56,
          unit: 'mBTC',
          unitTitle: 'Millibitcoin',
        }}
        to={{
          currency: 'Dollars',
          value: 354568.68,
          unit: 'USD',
          unitTitle: 'US Dollars',
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
          value: 1526.56,
          unit: 'mBTC',
        }}
        to={{
          currency: 'Dollars',
          value: 354568.68,
          unit: 'USD',
        }}
      />
    );

    expect(balance).toMatchSnapshot();
  });
});
