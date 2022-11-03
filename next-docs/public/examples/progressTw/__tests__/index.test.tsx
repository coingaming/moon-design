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

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Progress', () => {
  it('renders Default in Light theme', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Default in Dark theme', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Default in RTL', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Sizes in Light theme', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Sizes in Dark theme', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Sizes in RTL', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Values in Light theme', () => {
    const testRenderer = renderer.create(renderWithTheme(<Values />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Values in Dark theme', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Values />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Values in RTL', () => {
    const testRenderer = renderer.create(renderWithRtl(<Values />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Colors in Light theme', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Colors in Dark theme', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Colors in RTL', () => {
    const testRenderer = renderer.create(renderWithRtl(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
