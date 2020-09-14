/* eslint-disable no-console */
import React from 'react';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import HeaderBack from '../HeaderBack';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const TestLink = ({ children, ...props }: { children: string }) => (
  <a id="test-link" {...props}>
    {children}
  </a>
);

describe('Header - Back', () => {
  test('renders as an anchor by default', () => {
    const headerBack = create(
      renderWithTheme(<HeaderBack href="#">Sample link</HeaderBack>)
    );

    expect(headerBack).toMatchSnapshot();
  });

  test('renders as a button', () => {
    const headerBack = create(
      renderWithTheme(
        <HeaderBack element="button" onClick={() => console.log('clicked')}>
          Sample link
        </HeaderBack>
      )
    );

    expect(headerBack).toMatchSnapshot();
  });

  test('renders as a component', () => {
    const headerBack = create(
      renderWithTheme(<HeaderBack element={TestLink}>Sample link</HeaderBack>)
    );

    expect(headerBack).toMatchSnapshot();
  });
});
