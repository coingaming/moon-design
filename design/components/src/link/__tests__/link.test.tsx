import * as React from 'react';
import { create } from 'react-test-renderer';
import { Link } from '../';
import { BrowserRouter } from 'react-router-dom';

describe('Link', () => {
  test('renders as a link by default', () => {
    const link = create(
      <BrowserRouter>
        <Link to="#test">I look like a link</Link>
      </BrowserRouter>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a button if prop as="button" was passed', () => {
    const link = create(
      <BrowserRouter>
        <Link to="#test" as="button">
          I look like a link, but really I'm a button
        </Link>
      </BrowserRouter>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a anchor when `href` defined', () => {
    const link = create(
      <BrowserRouter>
        <Link to="#test-path">I'm a link</Link>
      </BrowserRouter>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a secondary', () => {
    const link = create(
      <BrowserRouter>
        <Link secondary to="#test-path">
          I'm a secondary link
        </Link>
      </BrowserRouter>
    );

    expect(link).toMatchSnapshot();
  });

  test('renders as a optional', () => {
    const link = create(
      <BrowserRouter>
        <Link optional to="#test-path">
          I'm an optiona; link
        </Link>
      </BrowserRouter>
    );

    expect(link).toMatchSnapshot();
  });

  describe('renders as disabled', () => {
    test('for anchor elements', () => {
      const link = create(
        <BrowserRouter>
          <Link to="#test-path" disabled>
            I'm a link
          </Link>
        </BrowserRouter>
      );

      expect(link).toMatchSnapshot();
    });

    test('for button elements', () => {
      const link = create(
        <BrowserRouter>
          <Link as="button" to="#test" disabled>
            I look like a link, but really I'm a button
          </Link>
        </BrowserRouter>
      );

      expect(link).toMatchSnapshot();
    });
  });
});
