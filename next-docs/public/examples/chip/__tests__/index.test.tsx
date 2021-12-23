/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Default from '../Default';
import Icons from '../Icons';
import Sizes from '../Sizes';
import States from '../States';


const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Chip', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders isActive', () => {
    const testRenderer = renderer.create(renderWithTheme(<States />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
