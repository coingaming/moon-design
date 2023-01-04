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

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Modal in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders BigContent', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<BigContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders StyledContent', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<StyledContent />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithSelect', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Modal in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders BigContent', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<BigContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders StyledContent', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<StyledContent />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithSelect', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Modal in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders BigContent', () => {
    const testRenderer = renderer.create(renderWithRtl(<BigContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders StyledContent', () => {
    const testRenderer = renderer.create(renderWithRtl(<StyledContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders WithSelect', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
