/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

import DateWithLabel from '../DateWithLabel';
import DateWithoutLabel from '../DateWithoutLabel';
import DateWithHint from '../DateWithHint';
import DateDisabled from '../DateDisabled';
import DateError from '../DateError';
import DateBgColor from '../DateBgColor';
import DateReadonly from '../DateReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Date', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateWithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateWithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateWithHint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateDisabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateReadonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
