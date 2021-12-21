/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

import TextWithLabel from '../TextWithLabel';
import TextWithoutLabel from '../TextWithoutLabel';
import TextWithHint from '../TextWithHint';
import TextDisabled from '../TextDisabled';
import TextError from '../TextError';
import TextBgColor from '../TextBgColor';
import TextReadonly from '../TextReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Text', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextWithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextWithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextWithHint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextDisabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<TextReadonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
