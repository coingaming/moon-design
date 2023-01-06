/**
 * @jest-environment jsdom
 */
import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Animations from '../Animations';
import Disabled from '../Disabled';
import Icons from '../Icons';
import Sizes from '../Sizes';
import Variants from '../Variants';
import FullWidth from '../FullWidth';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Button', () => {
  it('renders different variants', () => {
    const testRenderer = renderer.create(renderWithTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Full width property', () => {
    const testRenderer = renderer.create(renderWithTheme(<FullWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders disabled state', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different animations', () => {
    const testRenderer = renderer.create(renderWithTheme(<Animations />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
