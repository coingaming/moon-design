/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Example from '../Example';
import BackButton from '../BackButton';
import CloseButton from '../CloseButton';
import Icons from '../Icons';
import IsDivider from '../IsDivider';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Header', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Example />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with back button', () => {
    const testRenderer = renderer.create(renderWithTheme(<BackButton />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with close button', () => {
    const testRenderer = renderer.create(renderWithTheme(<CloseButton />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with icons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Icons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with is divider', () => {
    const testRenderer = renderer.create(renderWithTheme(<IsDivider />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
