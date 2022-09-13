/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Custom from '../Custom';
import Default from '../Default';
import Form from '../Form';
import Sizes from '../Sizes';
import Disabled from '../Disabled';
import WithIcons from '../WithIcons';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Switch', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders custom width and bg color', () => {
    const testRenderer = renderer.create(renderWithTheme(<Custom />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with HTML forms', () => {
    const testRenderer = renderer.create(renderWithTheme(<Form />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Disabled state', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with on/off icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithIcons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
