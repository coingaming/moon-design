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

describe('IconButton in Light Theme', () => {
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
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('IconButton in Dark Theme', () => {
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
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('IconButton in RTL', () => {
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
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const testRenderer = renderer.create(renderWithRtl(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
