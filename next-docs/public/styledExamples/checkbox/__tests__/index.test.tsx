/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Checked from '../Checked';
import Disabled from '../Disabled';
import NoLabel from '../NoLabel';
import Readonly from '../Readonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Checkbox', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithTheme(<Checked />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders No label', () => {
    const testRenderer = renderer.create(renderWithTheme(<NoLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Read only', () => {
    const testRenderer = renderer.create(renderWithTheme(<Readonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
