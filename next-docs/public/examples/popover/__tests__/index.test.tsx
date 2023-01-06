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
import Position from '../Position';
import TriggerElements from '../TriggerElements';
import WithClose from '../WithClose';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Popover in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders TriggerElements', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<TriggerElements />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Position', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Position />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Dropdown in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders TriggerElements', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<TriggerElements />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Position', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Position />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Dropdown in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders TriggerElements', () => {
    const testRenderer = renderer.create(renderWithRtl(<TriggerElements />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Position', () => {
    const testRenderer = renderer.create(renderWithRtl(<Position />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithClose />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
