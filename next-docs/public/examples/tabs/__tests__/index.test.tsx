/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import HorizontalVariants from '../HorizontalVariants';
import VerticalVariants from '../VerticalVariants';
import Small from '../Small';
import Variant from '../Variant';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Tabs', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders HorizontalVariants', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<HorizontalVariants />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders VerticalVariants', () => {
    const testRenderer = renderer.create(renderWithTheme(<VerticalVariants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Small', () => {
    const testRenderer = renderer.create(renderWithTheme(<Small />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Variant />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
