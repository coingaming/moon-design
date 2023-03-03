/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Disabled from '../Disabled';
import Customization from '../Customization';
import AsFormItem from '../AsFormItem';
import Uncontrolled from '../Uncontrolled';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('RadioButton in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoLabel', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<AsFormItem />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<Uncontrolled />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RadioButton in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoLabel', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<Customization />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<AsFormItem />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Uncontrolled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RadioButton in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders NoLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<Customization />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const testRenderer = renderer.create(renderWithRtl(<AsFormItem />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const testRenderer = renderer.create(renderWithRtl(<Uncontrolled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
