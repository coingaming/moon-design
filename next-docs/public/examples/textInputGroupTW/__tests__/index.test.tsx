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
import AccessValues from '../AccessValues';
import Default from '../Default';
import Rtl from '../Rtl';
import Sizes from '../Sizes';
import Types from '../Types';
import Vertical from '../Vertical';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);
const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);
const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('TextInputGroup in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Vertical', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Vertical />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Rtl', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders AccessValues', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<AccessValues />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('TextInputGroup in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Vertical', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Vertical />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Rtl', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders AccessValues', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<AccessValues />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('TextInputGroup in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Vertical', () => {
    const testRenderer = renderer.create(renderWithRtl(<Vertical />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Rtl', () => {
    const testRenderer = renderer.create(renderWithRtl(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithRtl(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders AccessValues', () => {
    const testRenderer = renderer.create(renderWithRtl(<AccessValues />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
