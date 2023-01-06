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
import FourChars from '../FourChars';
import OnlyDigits from '../OnlyDigits';
import ErrorState from '../ErrorState';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('AuthCode in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders FourChars', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<FourChars />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders OnlyDigits', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<OnlyDigits />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders ErrorState', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<ErrorState />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('AuthCode in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders FourChars', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<FourChars />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders OnlyDigits', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<OnlyDigits />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders ErrorState', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<ErrorState />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('AuthCode in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders FourChars', () => {
    const testRenderer = renderer.create(renderWithRtl(<FourChars />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders OnlyDigits', () => {
    const testRenderer = renderer.create(renderWithRtl(<OnlyDigits />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders ErrorState', () => {
    const testRenderer = renderer.create(renderWithRtl(<ErrorState />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
