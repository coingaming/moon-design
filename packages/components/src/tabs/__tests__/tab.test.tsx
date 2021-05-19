import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Tabs from '../Tabs';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Nav', () => {
  test('renders correctly', () => {
    const tabLink = create(
      renderWithTheme(<Tabs id="test-tabs" items={[0, 1, 2, 3, 4]} />),
    );

    expect(tabLink).toMatchSnapshot();
  });
});
