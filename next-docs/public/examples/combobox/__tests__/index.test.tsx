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
import Disabled from '../Disabled';
import Error from '../Error';
import Options from '../Options';
import WithLabel from '../WithLabel';
import WithoutLabel from '../WithoutLabel';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Select in Light Theme', () => {
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<WithoutLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Error', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Options', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Options />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Select in Dark Theme', () => {
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Error', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Options', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Options />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Select in RTL', () => {
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Error', () => {
    const testRenderer = renderer.create(renderWithRtl(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Options', () => {
    const testRenderer = renderer.create(renderWithRtl(<Options />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
