import React from 'react';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import Sidebar from '../Sidebar';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

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
          isOpen={false}
          collapseIcon={<div />}
          expandIcon={<div />}
          logo={<div />}
        />
      )
    );

    expect(sidebar).toMatchSnapshot();
  });
});
