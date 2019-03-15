import * as React from 'react';
import { create } from 'react-test-renderer';
import { colors } from '@heathmont/sportsbet-tokens';
import { Heading } from '../';

describe('Heading', () => {
  describe('Elements', () => {
    test('renders as <p> if no element prop provided', () => {
      const heading = create(<Heading size="alpha">Aplha Heading</Heading>);
      expect(heading).toMatchSnapshot();
    });

    test('renders as an element if element prop provided', () => {
      const heading = create(
        <Heading size="alpha" element="h2">
          Alpha Heading
        </Heading>
      );
      expect(heading).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    test('alpha size renders properly', () => {
      const heading = create(
        <Heading size="alpha" element="h1">
          Aplha Heading
        </Heading>
      );
      expect(heading).toMatchSnapshot();
    });

    test('bravo size renders properly', () => {
      const heading = create(
        <Heading size="bravo" element="h1">
          Bravo Heading
        </Heading>
      );
      expect(heading).toMatchSnapshot();
    });

    test('charlie size renders properly', () => {
      const heading = create(
        <Heading size="charlie" element="h1">
          Charlie Heading
        </Heading>
      );
      expect(heading).toMatchSnapshot();
    });
    test('delta size renders properly', () => {
      const heading = create(
        <Heading size="delta" element="h1">
          Delta Heading
        </Heading>
      );
      expect(heading).toMatchSnapshot();
    });

    test('echo size renders properly', () => {
      const heading = create(
        <Heading size="echo" element="h1">
          Echo Heading
        </Heading>
      );
      expect(heading).toMatchSnapshot();
    });
  });

  test('renders with a color', () => {
    const heading = create(
      <Heading size="alpha" element="h1" color={colors.brand}>
        Aplha Heading
      </Heading>
    );
    expect(heading).toMatchSnapshot();
  });
});
