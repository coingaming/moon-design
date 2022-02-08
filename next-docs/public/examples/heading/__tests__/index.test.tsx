/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Example from '../Example';
import Size from '../Size';
import Colors from '../Colors';
import IsRegular from '../IsRegular';
import TextAlign from '../TextAlign';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Heading', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders size', () => {
    const testRenderer = renderer.create(renderWithTheme(<Size />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders colors', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colors />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders isRegular', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsRegular />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders text align', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextAlign />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
