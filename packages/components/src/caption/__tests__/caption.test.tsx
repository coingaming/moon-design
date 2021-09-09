import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Caption from '../Caption';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Caption', () => {
  describe('Elements', () => {
    test('renders as <span> by default', () => {
      const caption = create(renderWithTheme(<Caption>Caption</Caption>));
      expect(caption).toMatchSnapshot();
    });
    test('renders as an element if "as" prop provided', () => {
      const text = create(
        renderWithTheme(<Caption as="p">Caption with Paragraph tag</Caption>)
      );
      expect(text).toMatchSnapshot();
    });
  });

  test('renders default color', () => {
    const caption = create(renderWithTheme(<Caption>Caption</Caption>));
    expect(caption).toMatchSnapshot();
  });

  test('renders with a color', () => {
    const caption = create(
      renderWithTheme(<Caption color="piccolo.100">Caption</Caption>)
    );
    expect(caption).toMatchSnapshot();
  });
});
