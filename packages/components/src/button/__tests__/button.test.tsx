import React from 'react';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { create } from 'react-test-renderer';
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
        renderWithTheme(<Button variant="secondary">Secondary Button</Button>)
      );

      expect(button).toMatchSnapshot();
    });

    test('renders as default', () => {
      const button = create(renderWithTheme(<Button>Default Button</Button>));

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

      test('Default renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button mockState="hover">Hover Default Button</Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Default renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button mockState="active">Active Default Button</Button>
          )
        );

        expect(button).toMatchSnapshot();
      });
    });
  });

  describe('variants', () => {
    describe('variants MockStates', () => {
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

      test('Default renders with hover', () => {
        const button = create(
          renderWithTheme(
            <Button mockState="hover">Hover Default Button</Button>
          )
        );

        expect(button).toMatchSnapshot();
      });

      test('Default renders as active', () => {
        const button = create(
          renderWithTheme(
            <Button mockState="active">Active Default Button</Button>
          )
        );

        expect(button).toMatchSnapshot();
      });
    });
  });
});
