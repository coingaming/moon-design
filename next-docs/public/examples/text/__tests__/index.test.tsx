/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Example from '../Example';
import Size from '../Size';
import Color from '../Color';
import IsBold from '../IsBold';
import TextAlign from '../TextAlign';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Text', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders size', () => {
    const testRenderer = renderer.create(renderWithTheme(<Size />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders color', () => {
    const testRenderer = renderer.create(renderWithTheme(<Color />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders isBold', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsBold />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders textAlign', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextAlign />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
