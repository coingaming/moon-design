/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Default from '../Default';
import NoLabel from '../NoLabel';
import Disabled from '../Disabled';
import Checked from '../Checked';
import ReadOnly from '../ReadOnly';
import WithLabel from '../WithLabel';
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

describe('RadioButton in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoLabel', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<NoLabel />));
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
});

describe('RadioButton in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoLabel', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<NoLabel />));
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
});

describe('RadioButton in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<NoLabel />));
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
});
