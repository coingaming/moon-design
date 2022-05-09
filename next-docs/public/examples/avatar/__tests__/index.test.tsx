/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Colours from '../Colours';
import StatusOrigin from '../StatusOrigin';
import ActiveStatus from '../ActiveStatus';
import Sizes from '../Sizes';
import Variants from '../Variants';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Avatar', () => {
  it('renders different Variants', () => {
    const testRenderer = renderer.create(renderWithTheme(<Variants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Colours', () => {
    const testRenderer = renderer.create(renderWithTheme(<Colours />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports different statuses', () => {
    const testRenderer = renderer.create(renderWithTheme(<ActiveStatus />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('supports different status origins', () => {
    const testRenderer = renderer.create(renderWithTheme(<StatusOrigin />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
