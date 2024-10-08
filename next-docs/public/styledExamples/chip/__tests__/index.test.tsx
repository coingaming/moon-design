/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Icons from '../Icons';
import Sizes from '../Sizes';
import Active from '../Active';
import Stroke from '../Stroke';
import IconsWithStroke from '../IconsWithStroke';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Chip', () => {
  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders isActive', () => {
    const testRenderer = renderer.create(renderWithTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with stroke', () => {
    const testRenderer = renderer.create(renderWithTheme(<Stroke />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Icons with stroke', () => {
    const testRenderer = renderer.create(renderWithTheme(<IconsWithStroke />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
