/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Example1 from '../Example1';
import Example2 from '../Example2';
import Example3 from '../Example3';
import Example4 from '../Example4';
import Example5 from '../Example5';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Dialog Header', () => {
  it('renders Example 1', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example1 />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Example 2', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example2 />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Example 3', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example3 />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Example 4', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example4 />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Example 5', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example5 />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
