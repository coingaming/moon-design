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
import Disabled from '../Disabled';
import Customization from '../Customization';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Tag in Light Theme', () => {
  it('renders Deafult', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Tag in Dark Theme', () => {
  it('renders Deafult', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Tag in RTL', () => {
  it('renders Deafult', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(renderWithRtl(<Customization />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
