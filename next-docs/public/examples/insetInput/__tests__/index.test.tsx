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
import Bg from '../Bg';
import Default from '../Default';
import Types from '../Types';
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

describe('InsetInput in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders different states', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<States />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with custom styles', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('TextInput in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders different states', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<States />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with custom styles', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('TextInput in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders different states', () => {
    const testRenderer = renderer.create(renderWithRtl(<States />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with custom styles', () => {
    const testRenderer = renderer.create(renderWithRtl(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithRtl(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
