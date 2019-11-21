import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { IconCurrencyBtc } from '@heathmont/sportsbet-assets';

import { Card } from '../card';

describe('Card', () => {
  test('renders with flex layout', () => {
    const card = create(
      <Card template="front" flex>
        <p>Some content</p>
        <p>Some other content</p>
      </Card>
    );

    expect(card).toMatchSnapshot();
  });

  describe('Templates', () => {
    test('renders as front', () => {
      const card = create(
        <Card template="front">
          <p>Some content</p>
        </Card>
      );

      expect(card).toMatchSnapshot();
    });

    test('renders as front with backgroundIcon', () => {
      const card = create(
        <Card template="front" backgroundIcon={<IconCurrencyBtc />}>
          <p>Some content</p>
        </Card>
      );

      expect(card).toMatchSnapshot();
    });

    test('renders as outline', () => {
      const card = create(
        <Card template="outline">
          <p>Some content</p>
        </Card>
      );

      expect(card).toMatchSnapshot();
    });
  });
});
