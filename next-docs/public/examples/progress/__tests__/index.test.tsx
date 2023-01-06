/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Colors from '../Colors';
import Values from '../Values';
import Sizes from '../Sizes';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Progress in Light theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Values', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Values />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Progress in Dark theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Values', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Values />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Progress in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Values', () => {
    const testRenderer = renderer.create(renderWithRtl(<Values />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithRtl(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
