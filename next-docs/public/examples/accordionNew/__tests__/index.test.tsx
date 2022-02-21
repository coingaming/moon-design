/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import ContentOutside from '../ContentOutside';
import DisableOpen from '../DisableOpen';
import HeaderContent from '../HeaderContent';
import OpenByDefault from '../OpenByDefault';
import Sizes from '../Sizes';
import SizesContentOutside from '../SizesContentOutside';
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

  it('renders open by default', () => {
    const testRenderer = renderer.create(renderWithTheme(<OpenByDefault />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders disable open', () => {
    const testRenderer = renderer.create(renderWithTheme(<DisableOpen />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders content outside', () => {
    const testRenderer = renderer.create(renderWithTheme(<ContentOutside />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders header content', () => {
    const testRenderer = renderer.create(renderWithTheme(<HeaderContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes variants', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes variants with content outside', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<SizesContentOutside />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders without button', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithoutButton />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
