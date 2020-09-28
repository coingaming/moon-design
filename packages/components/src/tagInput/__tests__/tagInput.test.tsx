import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import { TagInputMain } from '../TagInput';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('TagInput', () => {
  test('renders correctly', () => {
    const tabLink = create(renderWithTheme(<TagInputMain />));

    expect(tabLink).toMatchSnapshot();
  });

  test('renders with focused state', () => {
    const tabLink = create(renderWithTheme(<TagInputMain focused />));

    expect(tabLink).toMatchSnapshot();
  });

  test('renders with error state', () => {
    const tabLink = create(renderWithTheme(<TagInputMain error />));

    expect(tabLink).toMatchSnapshot();
  });
});
