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
import CustomBg from '../CustomBg';
import Default from '../Default';
import Form from '../Form';
import Sizes from '../Sizes';
import Disabled from '../Disabled';
import WithIcons from '../WithIcons';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Switch in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CustomBg', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<CustomBg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Form', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Form />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIcons', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithIcons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Switch in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CustomBg', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<CustomBg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Form', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Form />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIcons', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithIcons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Switch in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CustomBg', () => {
    const testRenderer = renderer.create(renderWithRtl(<CustomBg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Form', () => {
    const testRenderer = renderer.create(renderWithRtl(<Form />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIcons', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithIcons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
