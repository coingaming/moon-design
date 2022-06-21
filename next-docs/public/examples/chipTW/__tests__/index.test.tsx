/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Sizes from '../Sizes';
import Variants from '../Variants';
import Active from '../Active';
import Icons from '../Icons';
import IsStroke from '../IsStroke';
import IsStrokeIcons from '../IsStrokeIcons';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Chip', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders variants', () => {
    const testRenderer = renderer.create(renderWithTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders active', () => {
    const testRenderer = renderer.create(renderWithTheme(<Active />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders stroke', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsStroke />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders stroke with icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsStrokeIcons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
