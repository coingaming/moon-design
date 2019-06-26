import * as React from 'react';
import { create } from 'react-test-renderer';
import { Link } from '..';

describe('Link', () => {
  test('renders as a link by default', () => {
    const link = create(<Link to="#test">I look like a link</Link>);

    expect(link).toMatchSnapshot();
  });

  test('renders as a button if prop as="button" was passed', () => {
    const link = create(
      <Link to="#test" as="button">
        I look like a link, but really I'm a button
      </Link>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a anchor when `href` defined', () => {
    const link = create(<Link to="#test-path">I'm a link</Link>);

    expect(link).toMatchSnapshot();
  });

  test('renders as a secondary', () => {
    const link = create(
      <Link secondary to="#test-path">
        I'm a secondary link
      </Link>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a optional', () => {
    const link = create(
      <Link optional to="#test-path">
        I'm an optiona; link
      </Link>
    );

    expect(link).toMatchSnapshot();
  });

  describe('renders as disabled', () => {
    test('for anchor elements', () => {
      const link = create(
        <Link to="#test-path" disabled>
          I'm a link
        </Link>
      );

      expect(link).toMatchSnapshot();
    });

    test('for button elements', () => {
      const link = create(
        <Link as="button" to="#test" disabled>
          I look like a link, but really I'm a button
        </Link>
      );

      expect(link).toMatchSnapshot();
    });
  });
});
