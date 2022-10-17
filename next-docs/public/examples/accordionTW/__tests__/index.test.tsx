/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer, { act } from 'react-test-renderer';
import Background from '../Background';
import Default from '../Default';
import ContentOutside from '../ContentOutside';
import ContentHeader from '../ContentHeader';
import Sizes from '../Sizes';
import WithoutButton from '../WithoutButton';
import ContentOutsideSizes from '../ContentOutsideSizes';
import OpenDefault from '../OpenDefault';
import Disabled from '../Disabled';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

describe('Accordion', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default rtl', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders opened by default', () => {
    const testRenderer = renderer.create(renderWithTheme(<OpenDefault />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders without button', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithoutButton />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders content outside', () => {
    const testRenderer = renderer.create(renderWithTheme(<ContentOutside />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders header content', () => {
    const testRenderer = renderer.create(renderWithTheme(<ContentHeader />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes (content outside)', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<ContentOutsideSizes />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('expands', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findByType('button');
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with background', () => {
    const testRenderer = renderer.create(renderWithTheme(<Background />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
