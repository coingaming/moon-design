import React from 'react';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import Toggle from '../Toggle';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Toggle', () => {
  test('renders correctly', () => {
    const toggle = create(renderWithTheme(<Toggle />));

    expect(toggle).toMatchSnapshot();
  });

  test('positioned static when "topRight=false"', () => {
    const toggle = create(renderWithTheme(<Toggle topRight={false} />));

    expect(toggle).toMatchSnapshot();
  });
});
