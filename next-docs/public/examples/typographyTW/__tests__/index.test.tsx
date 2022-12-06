/**
 * @jest-environment jsdom
 */

import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import React from 'react';
import Text from '../Text';
import Heading from '../Heading';
import Caption from '../Caption';
import Colors from '../Colors';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);
const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);
const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Typography in Light Theme', () => {
  it('renders Text', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Text />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Heading', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Heading />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Caption', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Caption />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Typography in Dark Theme', () => {
  it('renders Text', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Text />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Heading', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Heading />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Caption', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Caption />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Typography in RTL', () => {
  it('renders Text', () => {
    const testRenderer = renderer.create(renderWithRtl(<Text />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Heading', () => {
    const testRenderer = renderer.create(renderWithRtl(<Heading />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Caption', () => {
    const testRenderer = renderer.create(renderWithRtl(<Caption />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const testRenderer = renderer.create(renderWithRtl(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
