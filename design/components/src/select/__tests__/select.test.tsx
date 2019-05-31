import * as React from 'react';
import { create } from 'react-test-renderer';
import { Select } from '../';

const TestOptions = () => (
  <React.Fragment>
    <option value="">Select an option</option>
    <option value="never-gonna">Never gonna</option>
    <option value="give-you-up">give you up</option>
    <option value="let-you-down">let you down</option>
  </React.Fragment>
);

describe('Select', () => {
  test('renders a select input with options', () => {
    const select = create(
      <Select>
        <TestOptions />
      </Select>
    );

    expect(select).toMatchSnapshot();
  });

  describe('renders with label', () => {
    test('above the input', () => {
      const select = create(
        <Select label="Example label">
          <TestOptions />
        </Select>
      );

      expect(select).toMatchSnapshot();
    });

    describe('as a flex layout', () => {
      test('evenly spaced by default', () => {
        const select = create(
          <Select label="Example label" flex>
            <TestOptions />
          </Select>
        );

        expect(select).toMatchSnapshot();
      });

      test('with adjusted input size', () => {
        const select = create(
          <Select label="Example label" flex inputGrow={2}>
            <TestOptions />
          </Select>
        );

        expect(select).toMatchSnapshot();
      });
    });
  });

  describe('renders as disabled', () => {
    test('for default select input', () => {
      const select = create(
        <Select disabled>
          <TestOptions />
        </Select>
      );

      expect(select).toMatchSnapshot();
    });
  });

  describe('renders as full-width', () => {
    test('for default select input', () => {
      const select = create(
        <Select fullWidth>
          <TestOptions />
        </Select>
      );

      expect(select).toMatchSnapshot();
    });
  });
});
