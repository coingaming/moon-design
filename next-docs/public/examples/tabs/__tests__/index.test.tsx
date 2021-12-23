/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Default from '../Default';
import Fill from '../Fill';
import FillContainer from '../FillContainer';
import IsTop from '../IsTop';
import Small from '../Small';
import Variant from '../Variant';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Tabs', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Fill', () => {
    const testRenderer = renderer.create(renderWithTheme(<Fill />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Fill Container', () => {
    const testRenderer = renderer.create(renderWithTheme(<FillContainer />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Is Top', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsTop />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Small', () => {
    const testRenderer = renderer.create(renderWithTheme(<Small />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Variant />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
