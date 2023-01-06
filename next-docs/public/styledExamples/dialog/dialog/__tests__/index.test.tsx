/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import DialogHeader from '../DialogHeader';
import DialogHeader2 from '../DialogHeader2';
import NoBackground from '../NoBackground';
import NoClose from '../NoClose';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

describe('Dialog', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Dialog Header', () => {
    const testRenderer = renderer.create(renderWithTheme(<DialogHeader />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Another Dialog Header', () => {
    const testRenderer = renderer.create(renderWithTheme(<DialogHeader2 />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with No Background', () => {
    const testRenderer = renderer.create(renderWithTheme(<NoBackground />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with No Close', () => {
    const testRenderer = renderer.create(renderWithTheme(<NoClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
