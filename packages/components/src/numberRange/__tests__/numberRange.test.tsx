/* eslint-disable no-console */
import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import NumberRange from '../NumberRange';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Number Range', () => {
  test('renders correctly', () => {
    const NumberRangeEl = create(
      renderWithTheme(
        <NumberRange
          text="Enter a minimum, maximum or range limit"
          lteLabel="Max"
          gteLabel="Min"
          value={{ gte: 16, lte: 20 }}
          onChange={(value) => console.log(value)}
          lteDisabled={false}
          lteError={false}
          gteDisabled={false}
          gteError={false}
          maxWidth={246}
        />
      )
    );

    expect(NumberRangeEl).toMatchSnapshot();
  });
});
