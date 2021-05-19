import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Link from '../Link';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Link', () => {
  test('renders as a link by default', () => {
    const link = create(
      renderWithTheme(<Link href="#test">I look like a link</Link>),
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a button if prop as="button" was passed', () => {
    const link = create(
      renderWithTheme(
        <Link as="button">I look like a link, but really I'm a button</Link>,
      ),
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a anchor when `href` defined', () => {
    const link = create(renderWithTheme(<Link href="#test">I'm a link</Link>));

    expect(link).toMatchSnapshot();
  });

  test('renders as a secondary', () => {
    const link = create(
      renderWithTheme(
        <Link href="#test" secondary>
          I'm a secondary link
        </Link>,
      ),
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a optional', () => {
    const link = create(
      renderWithTheme(
        <Link href="#test" optional>
          I'm an optiona; link
        </Link>,
      ),
    );

    expect(link).toMatchSnapshot();
  });

  describe('renders as disabled', () => {
    test('for anchor elements', () => {
      const link = create(
        renderWithTheme(
          <Link href="#test" disabled>
            I'm a link
          </Link>,
        ),
      );

      expect(link).toMatchSnapshot();
    });

    test('for button elements', () => {
      const link = create(
        renderWithTheme(
          <Link as="button" disabled>
            I look like a link, but really I'm a button
          </Link>,
        ),
      );

      expect(link).toMatchSnapshot();
    });
  });
});
