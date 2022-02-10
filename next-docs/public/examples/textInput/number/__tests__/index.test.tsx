/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import NumberWithLabel from '../NumberWithLabel';
import NumberWithoutLabel from '../NumberWithoutLabel';
import NumberWithHint from '../NumberWithHint';
import NumberDisabled from '../NumberDisabled';
import NumberError from '../NumberError';
import NumberBgColor from '../NumberBgColor';
import NumberReadonly from '../NumberReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Number', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<NumberWithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<NumberWithoutLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<NumberWithHint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<NumberDisabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<NumberError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<NumberBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<NumberReadonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
