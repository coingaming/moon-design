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
  it('renders Colours', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Colours />));
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
  it('renders LetterCases', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<LetterCases />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Tag in Dark Theme', () => {
  it('renders Deafult', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colours', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Colours />));
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
  it('renders LetterCases', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<LetterCases />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Tag in RTL', () => {
  it('renders Deafult', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Colours', () => {
    const testRenderer = renderer.create(renderWithRtl(<Colours />));
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
  it('renders LetterCases', () => {
    const testRenderer = renderer.create(renderWithRtl(<LetterCases />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
