/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Example from '../Example';
import Checked from '../Checked';
import Disabled from '../Disabled';
import NoLabel from "../NoLabel";
import ReverseDirection from "../RightOrientation";

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Checkbox', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders No label', () => {
    const testRenderer = renderer.create(renderWithTheme(<NoLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Reverse direction', () => {
    const testRenderer = renderer.create(renderWithTheme(<ReverseDirection />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithTheme(<Checked />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
