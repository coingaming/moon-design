/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  moonDesignLight,
  moonDesignDark,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import BigContent from '../BigContent';
import Default from '../Default';
import StyledContent from '../StyledContent';
import WithSelect from '../WithSelect';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

describe('Modal', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with a lot of content', () => {
    const testRenderer = renderer.create(renderWithTheme(<BigContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with styled content', () => {
    const testRenderer = renderer.create(renderWithTheme(<StyledContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with selects', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
