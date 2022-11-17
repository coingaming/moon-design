/**
 * @jest-environment jsdom
 */

import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Default from '../Default';
import Positions from '../Positions';
import Types from '../Types';
import Variants from '../Variants';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Snackbar in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Positions />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Types />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Variants />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Snackbar in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Positions />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Types />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Variants />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Snackbar in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithRtl(<Positions />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Types', () => {
    const testRenderer = renderer.create(renderWithRtl(<Types />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const testRenderer = renderer.create(renderWithRtl(<Variants />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
