/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Loading from '../Loading';
import Active from '../Active';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Table Chart', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Loading', () => {
    const testRenderer = renderer.create(renderWithTheme(<Loading />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
