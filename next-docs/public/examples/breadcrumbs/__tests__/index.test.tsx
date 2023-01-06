/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import OneItem from '../OneItem';
import TwoItems from '../TwoItems';
import FourItems from '../FourItems';
import Collapsed from '../Collapsed';
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

describe('Breadcrumb in Light Theme', () => {
  it('renders one item', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<OneItem />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders two items', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<TwoItems />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders four items', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<FourItems />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders collapsed', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Collapsed />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Breadcrumb in Dark Theme', () => {
  it('renders one item', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<OneItem />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders two items', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<TwoItems />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders four items', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<FourItems />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders collapsed', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Collapsed />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Breadcrumb in RTL', () => {
  it('renders one item', () => {
    const testRenderer = renderer.create(renderWithRtl(<OneItem />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders two items', () => {
    const testRenderer = renderer.create(renderWithRtl(<TwoItems />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders four items', () => {
    const testRenderer = renderer.create(renderWithRtl(<FourItems />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders collapsed', () => {
    const testRenderer = renderer.create(renderWithRtl(<Collapsed />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
