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
import Direction from '../Direction';
import Sizes from '../Sizes';
import Variant from '../Variant';
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
  it('renders Direction', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Direction />));
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
  it('renders Variant', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Variant />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Input in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Direction', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Direction />));
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
  it('renders Variant', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Variant />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Input in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Direction', () => {
    const testRenderer = renderer.create(renderWithRtl(<Direction />));
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
  it('renders Variant', () => {
    const testRenderer = renderer.create(renderWithRtl(<Variant />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
