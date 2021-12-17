/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

import EmailWithLabel from '../EmailWithLabel';
import EmailWithoutLabel from '../EmailWithoutLabel';
import EmailWithHint from '../EmailWithHint';
import EmailDisabled from '../EmailDisabled';
import EmailError from '../EmailError';
import EmailBgColor from '../EmailBgColor';
import EmailReadonly from '../EmailReadonly';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Email', () => {
  it('renders with label', () => {
    const testRenderer = renderer.create(renderWithTheme(<EmailWithLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<EmailWithoutLabel />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<EmailWithHint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<EmailDisabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<EmailError />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<EmailBgColor />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<EmailReadonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
