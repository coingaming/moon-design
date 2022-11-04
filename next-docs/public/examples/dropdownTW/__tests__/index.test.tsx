/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import OptionsVariants from '../OptionsVariants';
import Select from '../Select';
import SelectStates from '../SelectStates';
import TriggerElements from '../TriggerElements';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

describe('Dropdown', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different options variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<OptionsVariants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders select', () => {
    const testRenderer = renderer.create(renderWithTheme(<Select />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders select states', () => {
    const testRenderer = renderer.create(renderWithTheme(<SelectStates />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different trigger elements', () => {
    const testRenderer = renderer.create(renderWithTheme(<TriggerElements />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
