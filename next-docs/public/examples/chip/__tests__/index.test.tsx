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
import Sizes from '../Sizes';
import Variants from '../Variants';
import Active from '../Active';
import Icons from '../Icons';
import IsStroke from '../IsStroke';
import IsStrokeIcons from '../IsStrokeIcons';
import OnClick from '../OnClick';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Chip in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders IsStroke', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<IsStroke />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders IsStrokeIcons', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<IsStrokeIcons />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OnClick', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<OnClick />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Chip in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders IsStroke', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<IsStroke />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders IsStrokeIcons', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<IsStrokeIcons />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OnClick', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<OnClick />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Chip in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithRtl(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Active', () => {
    const testRenderer = renderer.create(renderWithRtl(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const testRenderer = renderer.create(renderWithRtl(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders IsStroke', () => {
    const testRenderer = renderer.create(renderWithRtl(<IsStroke />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders IsStrokeIcons', () => {
    const testRenderer = renderer.create(renderWithRtl(<IsStrokeIcons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OnClick', () => {
    const testRenderer = renderer.create(renderWithRtl(<OnClick />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
