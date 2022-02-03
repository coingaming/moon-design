/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Primary from '../Primary';
import Secondary from '../Secondary';
import Tertiary from '../Tertiary';
import Sizes from '../Sizes';
import Animations from '../Animations';
import Icons from '../Icons';
import IsIcon from '../IsIcon';
import FullWidth from '../FullWidth';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Button', () => {
  it('renders Primary variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Primary />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Secondary variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Secondary />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Tertiary variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Tertiary />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Default variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Primary />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different animations', () => {
    const testRenderer = renderer.create(renderWithTheme(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders leading and trailing icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders rounded "isIcon" variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders "Full width" variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<FullWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
