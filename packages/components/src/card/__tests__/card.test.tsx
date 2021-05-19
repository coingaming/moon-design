import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { IconCurrencyBtc } from '@heathmont/moon-assets';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Card from '../Card';

describe('Card', () => {
  test('renders with flex layout', () => {
    const card = create(
      renderWithTheme(
        <Card template="front" flex>
          <p>Some content</p>
          <p>Some other content</p>
        </Card>,
      ),
    );

    expect(card).toMatchSnapshot();
  });

  describe('Templates', () => {
    test('renders as front', () => {
      const card = create(
        renderWithTheme(
          <Card template="front">
            <p>Some content</p>
          </Card>,
        ),
      );

      expect(card).toMatchSnapshot();
    });

    test('renders as front with backgroundIcon', () => {
      const card = create(
        renderWithTheme(
          <Card template="front" backgroundIcon={<IconCurrencyBtc />}>
            <p>Some content</p>
          </Card>,
        ),
      );

      expect(card).toMatchSnapshot();
    });

    test('renders as outline', () => {
      const card = create(
        renderWithTheme(
          <Card template="outline">
            <p>Some content</p>
          </Card>,
        ),
      );

      expect(card).toMatchSnapshot();
    });
  });
});
