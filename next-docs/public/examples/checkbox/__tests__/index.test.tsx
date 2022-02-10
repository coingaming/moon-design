/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Example from '../Example';
import Checked from '../Checked';
import Disabled from '../Disabled';
import AriaLabel from '../AriaLabel';
import AriaLabelList from '../AriaLabelList';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Checkbox', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithTheme(<Checked />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Aria Label', () => {
    const testRenderer = renderer.create(renderWithTheme(<AriaLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Aria Label List', () => {
    const testRenderer = renderer.create(renderWithTheme(<AriaLabelList />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
