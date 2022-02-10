/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Label from '../Label';
import Rtl from '../Rtl';
import FlexSpace from '../FlexSpace';
import AdjustedInputSize from '../AdjustedInputSize';
import Disabled from '../Disabled';
import FullWidth from '../FullWidth';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

describe('Reel', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<Label />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with flex evenly spaced by default', () => {
    const testRenderer = renderer.create(renderWithTheme(<FlexSpace />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with flex with adjusted input size', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<AdjustedInputSize />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders as disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders as full-width', () => {
    const testRenderer = renderer.create(renderWithTheme(<FullWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
