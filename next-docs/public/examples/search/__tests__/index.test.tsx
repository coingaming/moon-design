/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import PreviewSearch from '../PreviewSearch';
import PreviewSearchLoading from '../PreviewSearchLoading';
import OmitResults from "../OmitResults";

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Search', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<PreviewSearch />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Loading State', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<PreviewSearchLoading />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Without Results', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<OmitResults />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
