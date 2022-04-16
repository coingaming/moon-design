/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Size from '../Size';
import ButtonSm from '../ButtonSm';
import ButtonMd from '../ButtonMd';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Dialog Footer', () => {
  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Size />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Button MD', () => {
    const testRenderer = renderer.create(renderWithTheme(<ButtonMd />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Button SM', () => {
    const testRenderer = renderer.create(renderWithTheme(<ButtonSm />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
