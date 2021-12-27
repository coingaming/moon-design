/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Colours from '../Colours';
import Sizes from '../Sizes';
import SizesList from '../SizesList';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Label', () => {
  it('renders with different Colours', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different SizesList', () => {
    const testRenderer = renderer.create(renderWithTheme(<SizesList />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
