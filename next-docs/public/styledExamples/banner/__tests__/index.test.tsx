/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Buttons from '../Buttons';
import Default from '../Default';
import HeaderIcon from '../HeaderIcon';
import Mobile from '../Mobile';
import Singleline from '../Singleline';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

describe('Banner', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with buttons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Buttons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with buttons RTL', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Buttons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with header icon', () => {
    const testRenderer = renderer.create(renderWithTheme(<HeaderIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders in mobile mode', () => {
    const testRenderer = renderer.create(renderWithTheme(<Mobile />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders in single line mode', () => {
    const testRenderer = renderer.create(renderWithTheme(<Singleline />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
