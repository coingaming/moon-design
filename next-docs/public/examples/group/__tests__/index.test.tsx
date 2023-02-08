/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import Default from '../Default';
import Sizes from '../Sizes';
import Types from '../Variant';
import States from '../States';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);
const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);
const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Input in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders different states', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<States />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Input in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders different states', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<States />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Input in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders different states', () => {
    const testRenderer = renderer.create(renderWithRtl(<States />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithRtl(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
