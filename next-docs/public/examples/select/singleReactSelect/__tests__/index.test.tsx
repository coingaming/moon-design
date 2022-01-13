/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

import Disabled from '../Disabled';
import Error from '../Error';
import Hint from '../Hint';
import ListWidth from '../ListWidth';
import OptionsContent from '../OptionsContent';
import Options from '../Options';
import WithLabel from '../WithLabel';
import WithoutLabel from '../WithoutLabel';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Multi Select', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<Hint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('with diferent option', () => {
    const testRenderer = renderer.create(renderWithTheme(<Options />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('options wrapper width', () => {
    const testRenderer = renderer.create(renderWithTheme(<ListWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('options content', () => {
    const testRenderer = renderer.create(renderWithTheme(<OptionsContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
