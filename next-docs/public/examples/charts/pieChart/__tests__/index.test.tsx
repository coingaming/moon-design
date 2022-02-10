/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Loading from '../Loading';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Pie Chart', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Loading', () => {
    const testRenderer = renderer.create(renderWithTheme(<Loading />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
