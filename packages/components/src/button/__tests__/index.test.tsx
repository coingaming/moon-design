import * as React from "react";
import { create } from "react-test-renderer";
import { Button } from "../";

describe("Button", () => {
  test("renders as fullWidth", () => {
    const button = create(
      <Button modifier="primary" fullWidth>
        Full Width Primary Button
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  test("renders with spacing", () => {
    const button = create(
      <Button modifier="primary" spaced>
        Spaced Primary Button
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  test("renders as disabled", () => {
    const button = create(
      <Button modifier="primary" disabled>
        Disabled Primary Button
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  test("renders as an anchor tag", () => {
    const button = create(
      <Button modifier="primary" href="#some-anchor">
        Primary Button (Anchor)
      </Button>
    );

    expect(button).toMatchSnapshot();
  });

  describe("MockState", () => {
    test("renders with focus", () => {
      const button = create(
        <Button modifier="primary" mockState="focus">
          Focus Primary Button
        </Button>
      );

      expect(button).toMatchSnapshot();
    });

    test("renders as active", () => {
      const button = create(
        <Button modifier="primary" mockState="active">
          Active Primary Button
        </Button>
      );

      expect(button).toMatchSnapshot();
    });
  });

  describe("Modifiers", () => {
    test("renders as primary", () => {
      const button = create(<Button modifier="primary">Primary Button</Button>);

      expect(button).toMatchSnapshot();
    });

    test("renders as secondary", () => {
      const button = create(
        <Button modifier="secondary">Secondary Button</Button>
      );

      expect(button).toMatchSnapshot();
    });

    test("renders as optional", () => {
      const button = create(
        <Button modifier="optional">Optional Button</Button>
      );

      expect(button).toMatchSnapshot();
    });

    test("renders as alternate", () => {
      const button = create(
        <Button modifier="alternate">Alternate Button</Button>
      );

      expect(button).toMatchSnapshot();
    });
  });
});
