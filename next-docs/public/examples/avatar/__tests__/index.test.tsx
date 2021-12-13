/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Image from '../Image';
import Letter from '../Letter';
import Fallbacks from '../Fallbacks';
import Colours from '../Colours';
import Statuses from '../Statuses';
import StatusPositions from '../StatusPositions';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Avatar', () => {
  it('renders Image', () => {
    const testRenderer = renderer.create(renderWithTheme(<Image />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Letters', () => {
    const testRenderer = renderer.create(renderWithTheme(<Letter />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Fallback if neither Image nor Letters', () => {
    const testRenderer = renderer.create(renderWithTheme(<Fallbacks />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports different colours', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different statuses', () => {
    const testRenderer = renderer.create(renderWithTheme(<Statuses />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports different status positions', () => {
    const testRenderer = renderer.create(renderWithTheme(<StatusPositions />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
