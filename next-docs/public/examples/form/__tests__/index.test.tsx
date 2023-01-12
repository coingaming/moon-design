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
import Default from '../Default';
import WithInsetInput from '../WithInsetInput';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);
const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);
const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Form in Light Theme', () => {
  it('renders with Input', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with InsetInput ', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<WithInsetInput />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Form in Dark Theme', () => {
  it('renders with Input', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with InsetInput', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<WithInsetInput />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Form in RTL', () => {
  it('renders with Input', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with InsetInput', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithInsetInput />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
