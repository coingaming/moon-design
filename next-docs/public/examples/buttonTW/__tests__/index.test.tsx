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
import Variants from '../Variants';
import Sizes from '../Sizes';
import Icons from '../Icons';
import FullWidth from '../FullWidth';
import Disabled from '../Disabled';
import Animations from '../Animations';
import AsLink from '../AsLink';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Button in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders AsLink', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<AsLink />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders FullWidth', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<FullWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Button in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders AsLink', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<AsLink />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders FullWidth', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<FullWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Button in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders AsLink', () => {
    const testRenderer = renderer.create(renderWithRtl(<AsLink />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithRtl(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const testRenderer = renderer.create(renderWithRtl(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders FullWidth', () => {
    const testRenderer = renderer.create(renderWithRtl(<FullWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const testRenderer = renderer.create(renderWithRtl(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
