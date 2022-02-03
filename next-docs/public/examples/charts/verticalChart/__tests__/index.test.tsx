/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import NoData from '../NoData';
import Active from '../Active';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Table Chart', () => {
  it('renders NoData', () => {
    const testRenderer = renderer.create(renderWithTheme(<NoData />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
