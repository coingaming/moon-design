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
import Backdrop from '../Backdrop';
import Close from '../Close';
import Default from '../Default';
import Positions from '../Positions';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Drawer in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Positions />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Backdrop', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Backdrop />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Close', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Close />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Drawer in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Positions />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Backdrop', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Backdrop />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Close', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Close />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Drawer in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithRtl(<Positions />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Backdrop', () => {
    const testRenderer = renderer.create(renderWithRtl(<Backdrop />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Close', () => {
    const testRenderer = renderer.create(renderWithRtl(<Close />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
