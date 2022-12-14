/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer, { act } from 'react-test-renderer';
import Background from '../Background';
import Default from '../Default';
import ContentOutside from '../ContentOutside';
import ContentHeader from '../ContentHeader';
import Sizes from '../Sizes';
import ContentOutsideSizes from '../ContentOutsideSizes';
import OpenDefault from '../OpenDefault';
import Disabled from '../Disabled';
import Divider from '../Divider';
import Single from '../Single';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Accordion in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OpenDefault', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<OpenDefault />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Divider', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Divider />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Single', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Single />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentOutside', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<ContentOutside />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentHeader', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<ContentHeader />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentOutsideSizes', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<ContentOutsideSizes />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Background', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Background />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('expands Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findByType('button');
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Accordion in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OpenDefault', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<OpenDefault />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Divider', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Divider />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Single', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Single />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentOutside', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<ContentOutside />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentHeader', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<ContentHeader />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentOutsideSizes', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<ContentOutsideSizes />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Background', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Background />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('expands Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findByType('button');
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Accordion in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OpenDefault', () => {
    const testRenderer = renderer.create(renderWithRtl(<OpenDefault />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Divider', () => {
    const testRenderer = renderer.create(renderWithRtl(<Divider />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Single', () => {
    const testRenderer = renderer.create(renderWithRtl(<Single />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const testRenderer = renderer.create(renderWithRtl(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentOutside', () => {
    const testRenderer = renderer.create(renderWithRtl(<ContentOutside />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentHeader', () => {
    const testRenderer = renderer.create(renderWithRtl(<ContentHeader />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const testRenderer = renderer.create(renderWithRtl(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders ContentOutsideSizes', () => {
    const testRenderer = renderer.create(
      renderWithRtl(<ContentOutsideSizes />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Background', () => {
    const testRenderer = renderer.create(renderWithRtl(<Background />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('expands Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findByType('button');
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
