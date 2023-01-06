/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, moonDesignDark, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Spaces from '../Spaces';
import CustomizedArrow from '../CustomizedArrow';
import VisibleIndex from '../VisibleIndex';
import Indicators from '../Indicators';

/**
 * Utility function that mocks the `IntersectionObserver` API. Necessary for components that rely
 * on it, otherwise the tests will crash. Recommended to execute inside `beforeEach`.
 * @param intersectionObserverMock - Parameter that is sent to the `Object.defineProperty`
 * overwrite method. `jest.fn()` mock functions can be passed here if the goal is to not only
 * mock the intersection observer, but its methods.
 */
export function setupIntersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => [],
  unobserve = () => null,
} = {}): void {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = root;
    readonly rootMargin: string = rootMargin;
    readonly thresholds: ReadonlyArray<number> = thresholds;
    disconnect: () => void = disconnect;
    observe: (target: Element) => void = observe;
    takeRecords: () => IntersectionObserverEntry[] = takeRecords;
    unobserve: (target: Element) => void = unobserve;
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Carousel in Light Theme', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different Spaces', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Spaces />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Customized Arrows', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<CustomizedArrow />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders visible index', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<VisibleIndex />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders indicators', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Indicators />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Carousel in Dark Theme', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different Spaces', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Spaces />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Customized Arrows', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<CustomizedArrow />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders visible index', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<VisibleIndex />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders indicators', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Indicators />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Accordion in RTL', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with different Spaces', () => {
    const testRenderer = renderer.create(renderWithRtl(<Spaces />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Customized Arrows', () => {
    const testRenderer = renderer.create(renderWithRtl(<CustomizedArrow />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders visible index', () => {
    const testRenderer = renderer.create(renderWithRtl(<VisibleIndex />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders indicators', () => {
    const testRenderer = renderer.create(renderWithRtl(<Indicators />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
