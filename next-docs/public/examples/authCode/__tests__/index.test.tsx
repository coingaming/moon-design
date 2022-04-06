/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import FourChars from "../FourChars";
import OnlyDigits from "../OnlyDigits";
import ErrorState from "../ErrorState";

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('AuthCode', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Custom length', () => {
    const testRenderer = renderer.create(renderWithTheme(<FourChars />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Only digits', () => {
    const testRenderer = renderer.create(renderWithTheme(<OnlyDigits />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Error state', () => {
    const testRenderer = renderer.create(renderWithTheme(<ErrorState />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
