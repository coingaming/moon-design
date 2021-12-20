/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

import TimeWithLabel from '../TimeWithLabel';
import TimeWithoutLabel from '../TimeWithoutLabel';
import TimeWithHint from '../TimeWithHint';
import TimeDisabled from '../TimeDisabled';
import TimeError from '../TimeError';
import TimeBgColor from '../TimeBgColor';
import TimeReadonly from '../TimeReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Time', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<TimeWithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(renderWithTheme(<TimeWithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<TimeWithHint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<TimeDisabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<TimeError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<TimeBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<TimeReadonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
