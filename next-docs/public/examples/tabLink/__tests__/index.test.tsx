/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Example from '../Example';
import ElementLeft from '../ElementLeft';
import Count from '../Count';
import Size from '../Size';
import IsTop from '../IsTop';
import Href from '../Href';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TabLink', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders element left', () => {
    const testRenderer = renderer.create(renderWithTheme(<ElementLeft />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders count', () => {
    const testRenderer = renderer.create(renderWithTheme(<Count />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders size', () => {
    const testRenderer = renderer.create(renderWithTheme(<Size />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders isTop', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsTop />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Href', () => {
    const testRenderer = renderer.create(renderWithTheme(<Href />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
