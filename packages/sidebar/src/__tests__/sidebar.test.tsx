import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  test('renders by default', () => {
    const sidebar = create(
      renderWithTheme(
        <Sidebar collapseIcon={<div />} expandIcon={<div />} logo={<div />} />
      )
    );

    expect(sidebar).toMatchSnapshot();
  });

  test('renders as collapsed', () => {
    const sidebar = create(
      renderWithTheme(
        <Sidebar
          initialState={false}
          collapseIcon={<div />}
          expandIcon={<div />}
          logo={<div />}
        />
      )
    );

    expect(sidebar).toMatchSnapshot();
  });
});
