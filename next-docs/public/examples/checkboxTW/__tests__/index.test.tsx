/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import WithLabel from '../WithLabel';
import Checked from '../Checked';
import NoLabel from '../NoLabel';
import Disabled from '../Disabled';
import ReadOnly from '../ReadOnly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Checkbox', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders checked', () => {
    const testRenderer = renderer.create(renderWithTheme(<Checked />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders without label', () => {
    const testRenderer = renderer.create(renderWithTheme(<NoLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders read only', () => {
    const testRenderer = renderer.create(renderWithTheme(<ReadOnly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
