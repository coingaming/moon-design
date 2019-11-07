import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../button';

describe('Button', () => {
  test('renders correctly', () => {
    const button = create(<Button modifier="primary">Primary Button</Button>);

    expect(button).toMatchSnapshot();
  });

  test('renders as fullWidth', () => {
    const button = create(
      <Button modifier="primary" fullWidth>
        Full Width Primary Button
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  test('renders as disabled', () => {
    const button = create(
      <Button modifier="primary" disabled>
        Disabled Primary Button
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  test('renders rounded', () => {
    const button = create(
      <Button round modifier="primary" uppercase>
        Round Primary Button
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  test('renders uppercased', () => {
    const button = create(
      <Button modifier="primary" uppercase>
        Uppercase Primary Button
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  test('renders as an anchor tag', () => {
    const button = create(
      <Button modifier="primary" as="a" href="#some-anchor">
        Primary Button (Anchor)
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  describe('Modifiers', () => {
    test('renders as primary', () => {
      const button = create(<Button modifier="primary">Primary Button</Button>);

      expect(button).toMatchSnapshot();
    });

    test('renders as highlight', () => {
      const button = create(
        <Button modifier="highlight">Secondary Button</Button>
      );

      expect(button).toMatchSnapshot();
    });

    test('renders as secondary', () => {
      const button = create(
        <Button modifier="secondary">Optional Button</Button>
      );

      expect(button).toMatchSnapshot();
    });

    test('renders as optional', () => {
      const button = create(
        <Button modifier="optional">Optional Button</Button>
      );

      expect(button).toMatchSnapshot();
    });

    describe('Modifiers MockStates', () => {
      test('Primary renders with hover', () => {
        const button = create(
          <Button modifier="primary" mockState="hover">
            Hover Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Primary renders as active', () => {
        const button = create(
          <Button modifier="primary" mockState="active">
            Active Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight renders with hover', () => {
        const button = create(
          <Button modifier="highlight" mockState="hover">
            Hover Highlight Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight renders as active', () => {
        const button = create(
          <Button modifier="highlight" mockState="active">
            Active Highlight Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders with hover', () => {
        const button = create(
          <Button modifier="secondary" mockState="hover">
            Hover Secondary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders as active', () => {
        const button = create(
          <Button modifier="secondary" mockState="active">
            Active Secondary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders with hover', () => {
        const button = create(
          <Button modifier="optional" mockState="hover">
            Hover Optional Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders as active', () => {
        const button = create(
          <Button modifier="optional" mockState="active">
            Active Optional Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });
    });
  });

  describe('Modifiers', () => {
    test('renders outline as primary', () => {
      const button = create(
        <Button modifier="primary" outline>
          Primary Button
        </Button>
      );

      expect(button).toMatchSnapshot();
    });

    test('renders outline as highlight', () => {
      const button = create(
        <Button modifier="highlight" outline>
          Highlight Button
        </Button>
      );

      expect(button).toMatchSnapshot();
    });

    test('renders outline as secondary', () => {
      const button = create(
        <Button modifier="secondary" outline>
          Secondary Button
        </Button>
      );

      expect(button).toMatchSnapshot();
    });

    test('renders outline as optional', () => {
      const button = create(
        <Button modifier="optional" outline>
          Optional Button
        </Button>
      );

      expect(button).toMatchSnapshot();
    });

    describe('Modifiers MockStates', () => {
      test('Primary outline renders with hover', () => {
        const button = create(
          <Button modifier="primary" mockState="hover" outline>
            Hover Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Primary outline renders as active', () => {
        const button = create(
          <Button modifier="primary" mockState="active" outline>
            Active Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight outline renders with hover', () => {
        const button = create(
          <Button modifier="highlight" mockState="hover" outline>
            Hover Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight outline renders as active', () => {
        const button = create(
          <Button modifier="highlight" mockState="active" outline>
            Active Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders with hover', () => {
        const button = create(
          <Button modifier="secondary" mockState="hover" outline>
            Hover Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders as active', () => {
        const button = create(
          <Button modifier="secondary" mockState="active" outline>
            Active Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders with hover', () => {
        const button = create(
          <Button modifier="optional" mockState="hover" outline>
            Hover Optional Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Optional renders as active', () => {
        const button = create(
          <Button modifier="optional" mockState="active" outline>
            Active Optional Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });
    });
  });
});
