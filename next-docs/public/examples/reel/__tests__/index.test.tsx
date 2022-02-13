/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Rtl from '../Rtl';
import Images from '../Images';
import CustomSpace from '../CustomSpace';
import Children from '../Children';

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

  it('renders child images correctly with custom height', () => {
    const testRenderer = renderer.create(renderWithTheme(<Images />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with custom space', () => {
    const testRenderer = renderer.create(renderWithTheme(<CustomSpace />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders child list items correctly', () => {
    const testRenderer = renderer.create(renderWithTheme(<Children />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
