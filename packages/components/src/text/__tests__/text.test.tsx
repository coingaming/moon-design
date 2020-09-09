import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Text from '../Text';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Text', () => {
  describe('Elements', () => {
    test('renders as <p> if no "as" prop provided', () => {
      const text = create(renderWithTheme(<Text>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('renders as an element if "as" prop provided', () => {
      const text = create(renderWithTheme(<Text as="span">Text</Text>));
      expect(text).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    test('renders default font size', () => {
      const text = create(renderWithTheme(<Text>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('10rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={10}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('12rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={12}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('14rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={14}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('16rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={16}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('18rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={18}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('20rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={20}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('24rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={24}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('32rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={32}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('48rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={48}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('56rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={56}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('64rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={64}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    test('72rem size renders properly', () => {
      const text = create(renderWithTheme(<Text size={72}>Text</Text>));
      expect(text).toMatchSnapshot();
    });

    describe('Colors', () => {
      test('renders default color', () => {
        const text = create(renderWithTheme(<Text>Text</Text>));
        expect(text).toMatchSnapshot();
      });

      test('renders with a color', () => {
        const text = create(
          renderWithTheme(<Text color="piccolo.100">Text</Text>)
        );
        expect(text).toMatchSnapshot();
      });
    });

    describe('Boldness', () => {
      test('renders default boldness', () => {
        const text = create(renderWithTheme(<Text>Text</Text>));
        expect(text).toMatchSnapshot();
      });

      test('renders with semibold font weight', () => {
        const text = create(renderWithTheme(<Text isBold>Text</Text>));
        expect(text).toMatchSnapshot();
      });
    });
  });
});
