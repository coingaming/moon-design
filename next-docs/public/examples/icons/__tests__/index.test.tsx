/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Customization from '../Customization';
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

describe('Icons in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Icons in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Icons in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(renderWithRtl(<Customization />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
