import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Switch from '../Switch';

describe('Switch', () => {
  test('renders by default', () => {
    const checkbox = create(renderWithTheme(<Switch id="test-switch-1" />));

    expect(checkbox).toMatchSnapshot();
  });

  test('renders as checked', () => {
    const checkbox = create(
      renderWithTheme(<Switch id="test-switch-2" checked />),
    );

    expect(checkbox).toMatchSnapshot();
  });
});
