/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import AccessValues from '../AccessValues';
import Default from '../Default';
import Rtl from '../Rtl';
import Sizes from '../Sizes';
import Vertical from '../Vertical';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInputGroup', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders vertical', () => {
    const testRenderer = renderer.create(renderWithTheme(<Vertical />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithTheme(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders and allows access to DOM and values', () => {
    const testRenderer = renderer.create(renderWithTheme(<AccessValues />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
