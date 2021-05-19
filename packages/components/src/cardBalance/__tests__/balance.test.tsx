import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Badge from '../../badge/Badge';
import CardBalance from '../CardBalance';

describe('CardBalance', () => {
  test('renders correctly', () => {
    const balance = create(
      renderWithTheme(
        <CardBalance
          from={{
            currency: 'Bitcoin',
            value: '1526.56',
            unit: 'mBTC',
            unitTitle: 'Millibitcoin',
          }}
        />,
      ),
    );

    expect(balance).toMatchSnapshot();
  });

  test('renders with currency if no unitTitle provided', () => {
    const balance = create(
      renderWithTheme(
        <CardBalance
          from={{
            currency: 'Bitcoin',
            value: '1526.56',
            unit: 'mBTC',
          }}
        />,
      ),
    );

    expect(balance).toMatchSnapshot();
  });

  test('renders correctly with a badge', () => {
    const balance = create(
      renderWithTheme(
        <CardBalance
          badge={<Badge>Active</Badge>}
          from={{
            currency: 'Bitcoin',
            value: '1526.56',
            unit: 'mBTC',
            unitTitle: 'Millibitcoin',
          }}
        />,
      ),
    );

    expect(balance).toMatchSnapshot();
  });
});
