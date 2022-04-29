import React from 'react';
import 'jest-styled-components';
import { ShopCrypto } from '@heathmont/moon-icons';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import { rem } from "@heathmont/moon-utils";
import Card from '../Card';

describe('Card', () => {
  test('renders with flex layout', () => {
    const card = create(
      renderWithTheme(
        <Card template="front" flex>
          <p>Some content</p>
          <p>Some other content</p>
        </Card>
      )
    );

    expect(card).toMatchSnapshot();
  });

  describe('Templates', () => {
    test('renders as front', () => {
      const card = create(
        renderWithTheme(
          <Card template="front">
            <p>Some content</p>
          </Card>
        )
      );

      expect(card).toMatchSnapshot();
    });

    test('renders as front with backgroundIcon', () => {
      const card = create(
        renderWithTheme(
          <Card template="front" backgroundIcon={<ShopCrypto fontSize={rem(16)}/>}>
            <p>Some content</p>
          </Card>
        )
      );

      expect(card).toMatchSnapshot();
    });

    test('renders as outline', () => {
      const card = create(
        renderWithTheme(
          <Card template="outline">
            <p>Some content</p>
          </Card>
        )
      );

      expect(card).toMatchSnapshot();
    });
  });
});
