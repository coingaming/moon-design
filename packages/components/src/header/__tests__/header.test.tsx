import React from 'react';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import Header, { HeaderTitle } from '../Header';
import HeaderBack from '../HeaderBack';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Header', () => {
  test('renders correctly with title', () => {
    const header = create(
      renderWithTheme(
        <Header>
          <HeaderTitle>Page Title</HeaderTitle>
        </Header>,
      ),
    );

    expect(header).toMatchSnapshot();
  });

  test('renders correctly with title and back button', () => {
    const header = create(
      renderWithTheme(
        <Header>
          <HeaderBack href="../">Back to Cashier</HeaderBack>
          <HeaderTitle>Page Title</HeaderTitle>
        </Header>,
      ),
    );

    expect(header).toMatchSnapshot();
  });
});
