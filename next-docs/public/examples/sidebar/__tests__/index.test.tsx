/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Closed from '../Closed';
import Rtl from '../Rtl';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRtl = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

describe('Sidebar', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Caption', () => {
    const testRenderer = renderer.create(renderWithTheme(<Closed />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithThemeRtl(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
