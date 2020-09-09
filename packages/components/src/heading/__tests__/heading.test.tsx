import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Heading from '../Heading';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Heading', () => {
  describe('Elements', () => {
    test('renders as <h3> if no "as" prop provided', () => {
      const heading = create(renderWithTheme(<Heading>Text</Heading>));
      expect(heading).toMatchSnapshot();
    });

    test('renders as an element if "as" prop provided', () => {
      const heading = create(
        renderWithTheme(<Heading as="h6">Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    test('renders default font size', () => {
      const heading = create(renderWithTheme(<Heading>Heading</Heading>));
      expect(heading).toMatchSnapshot();
    });

    test('16rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={16}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('18rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={18}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('20rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={20}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('24rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={24}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('32rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={32}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('48rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={48}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('56rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={56}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('64rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={64}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    test('72rem size renders properly', () => {
      const heading = create(
        renderWithTheme(<Heading size={72}>Heading</Heading>)
      );
      expect(heading).toMatchSnapshot();
    });

    describe('Colors', () => {
      test('renders default color', () => {
        const heading = create(renderWithTheme(<Heading>Heading</Heading>));
        expect(heading).toMatchSnapshot();
      });

      test('renders with a color', () => {
        const heading = create(
          renderWithTheme(<Heading color="piccolo.100">Heading</Heading>)
        );
        expect(heading).toMatchSnapshot();
      });
    });

    describe('Boldness', () => {
      test('renders default boldness', () => {
        const heading = create(renderWithTheme(<Heading>Heading</Heading>));
        expect(heading).toMatchSnapshot();
      });

      test('renders with regular font weight', () => {
        const heading = create(
          renderWithTheme(<Heading isRegular>Heading</Heading>)
        );
        expect(heading).toMatchSnapshot();
      });
    });
  });
});
