/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Modal from '../Modal';
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

describe('Search in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Modal', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Modal />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Search in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Modal', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Modal />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Search in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Modal', () => {
    const testRenderer = renderer.create(renderWithRtl(<Modal />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
