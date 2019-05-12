import * as React from 'react';
import { create } from 'react-test-renderer';
import { Link } from '../';

describe('Link', () => {
  test('renders as a button by default', () => {
    const link = create(
      <Link>I look like a link, but really I'm a button</Link>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a anchor when `href` defined', () => {
    const link = create(<Link href="#test-path">I'm a link</Link>);

    expect(link).toMatchSnapshot();
  });

  test('renders as a secondary', () => {
    const link = create(
      <Link secondary href="#test-path">
        I'm a secondary link
      </Link>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a optional', () => {
    const link = create(
      <Link optional href="#test-path">
        I'm an optiona; link
      </Link>
    );

    expect(link).toMatchSnapshot();
  });

  describe('renders as disabled', () => {
    test('for button elements', () => {
      const link = create(
        <Link disabled>I look like a link, but really I'm a button</Link>
      );

      expect(link).toMatchSnapshot();
    });

    test('for anchor elements', () => {
      const link = create(
        <Link href="#test-path" disabled>
          I'm a link
        </Link>
      );

      expect(link).toMatchSnapshot();
    });
  });
});
