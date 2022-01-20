/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Example from '../Example';
import Icons from '../Icons';
import BackgroundColor from '../BackgroundColor';
import Size from '../Size';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Badge', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with custom background color', () => {
    const testRenderer = renderer.create(renderWithTheme(<BackgroundColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with small size', () => {
    const testRenderer = renderer.create(renderWithTheme(<Size />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
