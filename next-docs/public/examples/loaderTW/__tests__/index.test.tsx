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
import Sizes from '../Sizes';
import Colors from '../Colors';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

describe('Loader', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default rtl', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders colors', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
