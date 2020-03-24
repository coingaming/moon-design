import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/sportsbet-themes';

import Heading from '../Heading';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Heading', () => {
  describe('Elements', () => {
    test('renders as <p> if no "as" prop provided', () => {
      const heading = create(
        renderWithTheme(<Heading size="alpha">Aplha Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('renders as an element if "as" prop provided', () => {
      const heading = create(
        renderWithTheme(
          <Heading size="alpha" as="h2">
            Alpha Heading
          </Heading>
        )
      );
      expect(heading).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    test('alpha size renders properly', () => {
      const heading = create(
        renderWithTheme(
          <Heading size="alpha" as="h1">
            Aplha Heading
          </Heading>
        )
      );
      expect(heading).toMatchSnapshot();
    });

    test('bravo size renders properly', () => {
      const heading = create(
        renderWithTheme(
          <Heading size="bravo" as="h1">
            Bravo Heading
          </Heading>
        )
      );
      expect(heading).toMatchSnapshot();
    });

    test('charlie size renders properly', () => {
      const heading = create(
        renderWithTheme(
          <Heading size="charlie" as="h1">
            Charlie Heading
          </Heading>
        )
      );
      expect(heading).toMatchSnapshot();
    });
    test('delta size renders properly', () => {
      const heading = create(
        renderWithTheme(
          <Heading size="delta" as="h1">
            Delta Heading
          </Heading>
        )
      );
      expect(heading).toMatchSnapshot();
    });

    test('echo size renders properly', () => {
      const heading = create(
        renderWithTheme(
          <Heading size="echo" as="h1">
            Echo Heading
          </Heading>
        )
      );
      expect(heading).toMatchSnapshot();
    });
  });

  test('renders with a color', () => {
    const heading = create(
      renderWithTheme(
        <Heading size="alpha" as="h1" color="piccolo.100">
          Alpha Heading
        </Heading>
      )
    );
    expect(heading).toMatchSnapshot();
  });
});
