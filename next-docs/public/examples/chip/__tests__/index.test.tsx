/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Icons from '../Icons';
import IconsSmall from '../IconsSmall';
import Sizes from '../Sizes';
import Active from '../Active';
import ActiveStroke from '../ActiveStroke';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

describe('Chip', () => {
  it('renders with Icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Icons small size', () => {
    const testRenderer = renderer.create(renderWithTheme(<IconsSmall />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Icons RTL', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Icons with stroke', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders isActive', () => {
    const testRenderer = renderer.create(renderWithTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders isActive with stroke', () => {
    const testRenderer = renderer.create(renderWithTheme(<ActiveStroke />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
