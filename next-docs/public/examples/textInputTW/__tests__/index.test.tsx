/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import Bg from '../Bg';
import Default from '../Default';
import Disabled from '../Disabled';
import Error from '../Error';
import Hint from '../Hint';
import Readonly from '../Readonly';
import Sizes from '../Sizes';
import Types from '../Types';
import WithoutLabel from '../WithoutLabel';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Date', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders different sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
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
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<Readonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different types', () => {
    const testRenderer = renderer.create(renderWithTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
