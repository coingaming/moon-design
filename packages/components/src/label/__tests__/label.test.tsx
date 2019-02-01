import * as React from 'react';
import { create } from 'react-test-renderer';
import { Label, Select } from '../../';

const TestSelect = () => (
  <Select>
    <option value="">Select an option</option>
    <option value="never-gonna">Never gonna</option>
    <option value="give-you-up">give you up</option>
    <option value="let-you-down">let you down</option>
  </Select>
);

describe('Label', () => {
  test('renders above input', () => {
    const label = create(
      <Label text="Example label">
        <TestSelect />
      </Label>
    );

    expect(label).toMatchSnapshot();
  });

  describe('renders as flex', () => {
    test('equal spacing by default', () => {
      const label = create(
        <Label text="Example label" flex>
          <TestSelect />
        </Label>
      );

      expect(label).toMatchSnapshot();
    });

    test("adjusts input's flex-grow when defined", () => {
      const label2 = create(
        <Label text="Example label" flex inputGrow={2}>
          <TestSelect />
        </Label>
      );

      const label3 = create(
        <Label text="Example label" flex inputGrow={3}>
          <TestSelect />
        </Label>
      );

      expect(label2).toMatchSnapshot();
      expect(label3).toMatchSnapshot();
    });
  });
});
