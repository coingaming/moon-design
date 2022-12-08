/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  moonDesignLight,
  moonDesignDark,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import LargeWithOptionalExtras from '../LargeWithOptionalExtras';
import Default from '../Default';
import CustomHeight from '../CustomHeight';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

type BottomSheetPortal = (
  children: React.ReactNode,
  container: Element | DocumentFragment,
  key?: string | null | undefined
) => React.ReactPortal;

describe('BottomSheet in Light Theme', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as BottomSheetPortal;
  });
  it('renders Default', async () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders LargeWithOptionalExtras', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<LargeWithOptionalExtras />)
    );
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CustomHeight', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<CustomHeight />)
    );
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('BottomSheet in Dark Theme', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as BottomSheetPortal;
  });
  it('renders Default', async () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders LargeWithOptionalExtras', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<LargeWithOptionalExtras />)
    );
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CustomHeight', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<CustomHeight />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('BottomSheet in RTL', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as BottomSheetPortal;
  });
  it('renders Default', async () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders LargeWithOptionalExtras', () => {
    const testRenderer = renderer.create(
      renderWithRtl(<LargeWithOptionalExtras />)
    );
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders CustomHeight', () => {
    const testRenderer = renderer.create(renderWithRtl(<CustomHeight />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
