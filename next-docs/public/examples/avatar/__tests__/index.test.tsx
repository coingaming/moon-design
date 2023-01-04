/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Colours from '../Colours';
import StatusOrigin from '../StatusOrigin';
import Active from '../Active';
import Sizes from '../Sizes';
import Variants from '../Variants';
import Default from '../Default';
import Rounded from '../Rounded';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Avatar in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Rounded', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Rounded />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colours', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders StatusOrigin', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<StatusOrigin />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Avatar in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Rounded', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Rounded />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colours', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders StatusOrigin', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<StatusOrigin />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Avatar in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithRtl(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Rounded', () => {
    const testRenderer = renderer.create(renderWithRtl(<Rounded />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colours', () => {
    const testRenderer = renderer.create(renderWithRtl(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithRtl(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders StatusOrigin', () => {
    const testRenderer = renderer.create(renderWithRtl(<StatusOrigin />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
