/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import Default from '../Default';
import DefaultPills from '../DefaultPills';
import NoPanels from '../NoPanels';
import Segment from '../Segment';
import Sizes from '../Sizes';
import WithCustomStyles from '../WithCustomStyles';
import WithHandler from '../WithHandler';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);
const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);
const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Tabs in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Segment', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Segment />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders DefaultPills', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<DefaultPills />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoPanels', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<NoPanels />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithCustomStyles', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<WithCustomStyles />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithHandler', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithHandler />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Tabs in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Segment', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Segment />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders DefaultPills', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<DefaultPills />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoPanels', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<NoPanels />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithCustomStyles', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<WithCustomStyles />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithHandler', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithHandler />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Tabs in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Segment', () => {
    const testRenderer = renderer.create(renderWithRtl(<Segment />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders DefaultPills', () => {
    const testRenderer = renderer.create(renderWithRtl(<DefaultPills />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoPanels', () => {
    const testRenderer = renderer.create(renderWithRtl(<NoPanels />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithCustomStyles', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithCustomStyles />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithHandler', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithHandler />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
