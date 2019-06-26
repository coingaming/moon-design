import * as React from 'react';
import { create } from 'react-test-renderer';
import { CardBalance } from '..';

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

  test('renders correctly with badge caption', () => {
    const balance = create(
      <CardBalance
        badgeCaption="Active"
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
