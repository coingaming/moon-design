import * as React from 'react';
import { create } from 'react-test-renderer';
import { Button } from '../';

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
      <Button modifier="primary" href="#some-anchor">
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
            Hover Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Highlight renders as active', () => {
        const button = create(
          <Button modifier="highlight" mockState="active">
            Active Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders with hover', () => {
        const button = create(
          <Button modifier="secondary" mockState="hover">
            Hover Primary Button
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      test('Secondary renders as active', () => {
        const button = create(
          <Button modifier="secondary" mockState="active">
            Active Primary Button
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
          Secondary Button
        </Button>
      );

      expect(button).toMatchSnapshot();
    });

    test('renders outline as secondary', () => {
      const button = create(
        <Button modifier="secondary" outline>
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
    });
  });
});
