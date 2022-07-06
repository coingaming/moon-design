/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Colours from '../Colours';
import StatusOrigin from '../StatusOrigin';
import Active from '../Active';
import Sizes from '../Sizes';
import Variants from '../Variants';
import Default from '../Default';
import Rounded from '../Rounded';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

describe('Avatar', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default rtl', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders default dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders variants', () => {
    const testRenderer = renderer.create(renderWithTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders rounded', () => {
    const testRenderer = renderer.create(renderWithTheme(<Rounded />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders colours', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports active', () => {
    const testRenderer = renderer.create(renderWithTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports status origins', () => {
    const testRenderer = renderer.create(renderWithTheme(<StatusOrigin />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
