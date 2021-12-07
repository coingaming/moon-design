/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

import DateTimeWithLabel from '../DateTimeWithLabel';
import DateTimeWithoutLabel from '../DateTimeWithoutLabel';
import DateTimeWithHint from '../DateTimeWithHint';
import DateTimeDisabled from '../DateTimeDisabled';
import DateTimeError from '../DateTimeError';
import DateTimeBgColor from '../DateTimeBgColor';
import DateTimeReadonly from '../DateTimeReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type DateTime', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<DateTimeWithLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<DateTimeWithoutLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateTimeWithHint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateTimeDisabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateTimeError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateTimeBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateTimeReadonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
