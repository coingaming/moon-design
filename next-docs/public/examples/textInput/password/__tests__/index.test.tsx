/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

import PasswordWithLabel from '../PasswordWithLabel';
import PasswordWithoutLabel from '../PasswordWithoutLabel';
import PasswordWithHint from '../PasswordWithHint';
import PasswordDisabled from '../PasswordDisabled';
import PasswordError from '../PasswordError';
import PasswordBgColor from '../PasswordBgColor';
import PasswordReadonly from '../PasswordReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Password', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<PasswordWithLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<PasswordWithoutLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<PasswordWithHint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<PasswordDisabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<PasswordError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<PasswordBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<PasswordReadonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
