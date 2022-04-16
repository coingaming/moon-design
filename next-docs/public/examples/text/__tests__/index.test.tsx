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
import Uppercase from '../Uppercase';
import Underline from '../Underline';
import FontWeight from '../FontWeight';
import LineHeight from '../LineHeight';

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
  it('renders font-weight', () => {
    const testRenderer = renderer.create(renderWithTheme(<FontWeight />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders text-align', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextAlign />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders uppercase', () => {
    const testRenderer = renderer.create(renderWithTheme(<Uppercase />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders underline', () => {
    const testRenderer = renderer.create(renderWithTheme(<Underline />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders line height', () => {
    const testRenderer = renderer.create(renderWithTheme(<LineHeight />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders semantic tags', () => {
    const testRenderer = renderer.create(renderWithTheme(<SemanticTags />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
