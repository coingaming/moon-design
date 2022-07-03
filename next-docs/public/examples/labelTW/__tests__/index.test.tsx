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
import Colours from '../Colours';
import Sizes from '../Sizes';
import Icons from '../Icons';
import LetterCases from '../LetterCases';
import Default from '../Default';

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

describe('Label', () => {
  it('renders deafult', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders deafult rtl', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders deafult dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different Colours', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different Icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different LetterCases', () => {
    const testRenderer = renderer.create(renderWithTheme(<LetterCases />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
