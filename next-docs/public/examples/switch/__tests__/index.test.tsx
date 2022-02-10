/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Caption from '../Caption';
import Sizes from '../Sizes';
import Theme from '../Theme';
import ThemeCaption from '../ThemeCaption';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

describe('Switch', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(
      renderWithThemeRTL(<Default isRtl={true} />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Caption', () => {
    const testRenderer = renderer.create(renderWithTheme(<Caption />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Theme variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Theme />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Theme variant with Caption', () => {
    const testRenderer = renderer.create(renderWithTheme(<ThemeCaption />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
