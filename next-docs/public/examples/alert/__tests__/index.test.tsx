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
import Customization from '../Customization';
import WithClose from '../WithClose';
import WithIcon from '../WithIcon';
import WithTitle from '../WithTitle';
import WithIconAndClose from '../WithIconAndClose';
import HandleClose from '../HandleClose';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Alert in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIcon', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithTitle', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithTitle />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIconAndClose', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<WithIconAndClose />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders HandleClose', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<HandleClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Alert in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIcon', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithTitle', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithTitle />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIconAndClose', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<WithIconAndClose />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders HandleClose', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<HandleClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Alert in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(renderWithRtl(<Customization />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIcon', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithTitle', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithTitle />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithIconAndClose', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithIconAndClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders HandleClose', () => {
    const testRenderer = renderer.create(renderWithRtl(<HandleClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
