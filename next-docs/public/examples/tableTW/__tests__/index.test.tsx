/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import CellBorder from '../CellBorder';
import RowGaps from '../RowGaps';
import RowSizes from '../RowSizes';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);
const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);
const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Table in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CellBorder', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<CellBorder />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders RowGaps', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<RowGaps />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders RowSizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<RowSizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Table in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CellBorder', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<CellBorder />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders RowGaps', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<RowGaps />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders RowSizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<RowSizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Table in RTL mode', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CellBorder', () => {
    const testRenderer = renderer.create(renderWithRtl(<CellBorder />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders RowGaps', () => {
    const testRenderer = renderer.create(renderWithRtl(<RowGaps />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders RowSizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<RowSizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
