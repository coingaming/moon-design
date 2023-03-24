/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  moonDesignLight,
  moonDesignDark,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import WithButtons from '../WithButtons';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Pagination in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithChildren', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithButtons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Pagination in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithChildren', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithButtons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Pagination in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithChildren', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithButtons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
