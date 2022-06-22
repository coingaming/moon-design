/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer, { act } from 'react-test-renderer';
import Default from '../Default';
import ContentOutside from '../ContentOutside';
import ContentHeader from '../ContentHeader';
import Sizes from '../Sizes';
import Rtl from '../Rtl';
import WithoutButton from '../WithoutButton';
import ContentOutsideSizes from '../ContentOutsideSizes';
import OpenDefault from '../OpenDefault';
import Disabled from '../Disabled';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Accordion', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders opened by default', () => {
    const testRenderer = renderer.create(renderWithTheme(<OpenDefault />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders without button', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithoutButton />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders content outside', () => {
    const testRenderer = renderer.create(renderWithTheme(<ContentOutside />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders header content', () => {
    const testRenderer = renderer.create(renderWithTheme(<ContentHeader />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithTheme(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes (content outside)', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<ContentOutsideSizes />)
    );
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
