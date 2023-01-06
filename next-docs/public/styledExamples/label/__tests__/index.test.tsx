/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Colours from '../Colours';
import Sizes from '../Sizes';
import Icons from '../Icons';
import LetterCases from '../LetterCases';

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

  it('renders with different Icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different LetterCases', () => {
    const testRenderer = renderer.create(renderWithTheme(<LetterCases />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
