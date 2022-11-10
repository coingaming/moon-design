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
import Default from '../Default';
import WithLabel from '../WithLabel';
import Checked from '../Checked';
import Colors from '../Colors';
import Disabled from '../Disabled';
import ReadOnly from '../ReadOnly';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Checkbox in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Checked />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<ReadOnly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Checkbox in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Checked />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<ReadOnly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Checkbox in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithRtl(<Checked />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const testRenderer = renderer.create(renderWithRtl(<ReadOnly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithRtl(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
