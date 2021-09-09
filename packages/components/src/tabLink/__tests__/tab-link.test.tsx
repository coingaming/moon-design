/* eslint-disable no-console */
import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import TabLink from '../TabLink';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const TestLink = ({ children, ...props }: { children: string }) => (
  <a id="test-link" {...props}>
    {children}
  </a>
);

describe('Nav - TabLink', () => {
  test('renders as an anchor by default', () => {
    const tabLink = create(
      renderWithTheme(<TabLink href="#">Sample link</TabLink>)
    );

    expect(tabLink).toMatchSnapshot();
  });

  test('renders as active', () => {
    const tabLink = create(
      renderWithTheme(<TabLink className="active">Sample link</TabLink>)
    );

    expect(tabLink).toMatchSnapshot();
  });

  test('renders as a component', () => {
    const tabLink = create(
      renderWithTheme(<TabLink as={TestLink}>Sample link</TabLink>)
    );

    expect(tabLink).toMatchSnapshot();
  });

  test('renders as active', () => {
    const tabLink = create(
      renderWithTheme(<TabLink href="#">Sample link</TabLink>)
    );

    expect(tabLink).toMatchSnapshot();
  });
});
