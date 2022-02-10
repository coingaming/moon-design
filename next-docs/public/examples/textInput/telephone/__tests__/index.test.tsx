/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import TelephoneWithLabel from '../TelephoneWithLabel';
import TelephoneWithoutLabel from '../TelephoneWithoutLabel';
import TelephoneWithHint from '../TelephoneWithHint';
import TelephoneDisabled from '../TelephoneDisabled';
import TelephoneError from '../TelephoneError';
import TelephoneBgColor from '../TelephoneBgColor';
import TelephoneReadonly from '../TelephoneReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Tel', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<TelephoneWithLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<TelephoneWithoutLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<TelephoneWithHint />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<TelephoneDisabled />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<TelephoneError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<TelephoneBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<TelephoneReadonly />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
