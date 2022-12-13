/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import Bg from '../Bg';
import Default from '../Default';
import Disabled from '../Disabled';
import Error from '../Error';
import Hint from '../Hint';
import Readonly from '../Readonly';
import Sizes from '../Sizes';
import Types from '../Types';
import WithoutLabel from '../WithoutLabel';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);
const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);
const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('TextInput in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<WithoutLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Hint', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Hint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Error', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Bg', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Readonly', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Readonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('TextInput in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Hint', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Hint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Error', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Bg', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Readonly', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Readonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('TextInput in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Hint', () => {
    const testRenderer = renderer.create(renderWithRtl(<Hint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Error', () => {
    const testRenderer = renderer.create(renderWithRtl(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Bg', () => {
    const testRenderer = renderer.create(renderWithRtl(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Readonly', () => {
    const testRenderer = renderer.create(renderWithRtl(<Readonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithRtl(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
