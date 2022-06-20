/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer, { act } from 'react-test-renderer';
import Default from '../Default';
import ContentOutside from '../ContentOutside';
import Sizes from '../Sizes';
import Rtl from '../Rtl';
import WithoutButton from '../WithoutButton';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

describe('Accordion New', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders content outside', () => {
    const testRenderer = renderer.create(renderWithTheme(<ContentOutside />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes variants', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders without button', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithoutButton />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithTheme(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('expands', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findByType('button').parent;
      button && button?.props?.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
