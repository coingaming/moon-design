/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Example from '../Example';
import Colors from '../Colors';
import SemanticTags from '../SemanticTags';
import TextAlign from '../TextAlign';
import Sizes from '../Sizes';
import FontWeight from '../FontWeight';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Caption', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders colors', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders font weights', () => {
    const testRenderer = renderer.create(renderWithTheme(<FontWeight />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders text-align', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextAlign />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders semantic tags', () => {
    const testRenderer = renderer.create(renderWithTheme(<SemanticTags />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
