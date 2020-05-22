import * as React from 'react';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/sportsbet-themes';
import 'jest-styled-components';

import Button from '../Button';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('Button', () => {
  test('renders correctly', () => {
    const button = create(
      renderWithTheme(<Button variant="primary">Primary Button</Button>)
    );

    expect(button).toMatchSnapshot();
  });

  test('renders as fullWidth', () => {
    const button = create(
      renderWithTheme(
        <Button variant="primary" fullWidth>
          Full Width Primary Button
        </Button>
      )
    );

    expect(button).toMatchSnapshot();
  });

  test('renders as disabled', () => {
    const button = create(
      renderWithTheme(
        <Button variant="primary" disabled>
          Disabled Primary Button
        </Button>
      )
    );

    expect(button).toMatchSnapshot();
  });

  test('renders rounded', () => {
    const button = create(
      renderWithTheme(
        <Button round variant="primary" uppercase>
          Round Primary Button
        </Button>
      )
    );

    expect(button).toMatchSnapshot();
  });

  test('renders uppercased', () => {
    const button = create(
      renderWithTheme(
        <Button variant="primary" uppercase>
          Uppercase Primary Button
        </Button>
      )
    );

    expect(button).toMatchSnapshot();
  });

  test('renders as an anchor tag', () => {
    const button = create(
      renderWithTheme(
        <Button variant="primary" as="a" href="#some-anchor">
          Primary Button (Anchor)
        </Button>
      )
    );

    expect(button).toMatchSnapshot();
  });

  describe('variants', () => {
    test('renders as primary', () => {
      const button = create(
        renderWithTheme(<Button variant="primary">Primary Button</Button>)
      );

      expect(button).toMatchSnapshot();
    });

    test('renders as highlight', () => {
      const button = create(
        renderWithTheme(<Button variant="highlight">Secondary Button</Button>)
      );

      expect(button).toMatchSnapshot();
    });

    test('renders as secondary', () => {
      const button = create(
        renderWithTheme(<Button variant="secondary">Optional Button</Button>)
      );

      expect(button).toMatchSnapshot();
    });

    test('renders as optional', () => {
      const button = create(
        renderWithTheme(<Button variant="optional">Optional Button</Button>)
      );

      expect(button).toMatchSnapshot();
    });

    describe('variants MockStates', () => {
      test('Primary renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="primary" mockState="hover">
              Hover Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Primary renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="primary" mockState="active">
              Active Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="highlight" mockState="hover">
              Hover Highlight Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="highlight" mockState="active">
              Active Highlight Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="secondary" mockState="hover">
              Hover Secondary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="secondary" mockState="active">
              Active Secondary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="optional" mockState="hover">
              Hover Optional Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="optional" mockState="active">
              Active Optional Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });
    });
  });

  describe('variants', () => {
    test('renders outline as primary', () => {
      const button = create(
        renderWithTheme(
          <Button variant="primary" outline>
            Primary Button
          </Button>
        )
      );

      expect(button).toMatchSnapshot();
    });

    test('renders outline as highlight', () => {
      const button = create(
        renderWithTheme(
          <Button variant="highlight" outline>
            Highlight Button
          </Button>
        )
      );

      expect(button).toMatchSnapshot();
    });

    test('renders outline as secondary', () => {
      const button = create(
        renderWithTheme(
          <Button variant="secondary" outline>
            Secondary Button
          </Button>
        )
      );

      expect(button).toMatchSnapshot();
    });

    test('renders outline as optional', () => {
      const button = create(
        renderWithTheme(
          <Button variant="optional" outline>
            Optional Button
          </Button>
        )
      );

      expect(button).toMatchSnapshot();
    });

    describe('variants MockStates', () => {
      test('Primary outline renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="primary" mockState="hover" outline>
              Hover Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Primary outline renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="primary" mockState="active" outline>
              Active Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight outline renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="highlight" mockState="hover" outline>
              Hover Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight outline renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="highlight" mockState="active">
              Active Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="secondary" mockState="hover">
              Hover Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="secondary" mockState="active">
              Active Primary Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button variant="optional" mockState="hover">
              Hover Optional Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button variant="optional" mockState="active">
              Active Optional Button
            </Button>
          )
        );

        expect(button).toMatchSnapshot();
      });
    });
  });
});
