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
import LargeWithOptionalExtras from '../LargeWithOptionalExtras';
import Default from '../Default';
import CustomHeight from '../CustomHeight';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

describe('Bottomsheet', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with a form and drag handle and shadow and backdrop', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<LargeWithOptionalExtras />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with custom height & table', () => {
    const testRenderer = renderer.create(renderWithTheme(<CustomHeight />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
