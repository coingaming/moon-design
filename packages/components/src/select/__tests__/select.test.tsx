import React from 'react';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import Select from '../Select';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

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
      renderWithTheme(
        <Select>
          <TestOptions />
        </Select>
      )
    );

    expect(select).toMatchSnapshot();
  });

  describe('renders with label', () => {
    test('above the input', () => {
      const select = create(
        renderWithTheme(
          <Select label="Example label">
            <TestOptions />
          </Select>
        )
      );

      expect(select).toMatchSnapshot();
    });

    describe('as a flex layout', () => {
      test('evenly spaced by default', () => {
        const select = create(
          renderWithTheme(
            <Select label="Example label" flex>
              <TestOptions />
            </Select>
          )
        );

        expect(select).toMatchSnapshot();
      });

      test('with adjusted input size', () => {
        const select = create(
          renderWithTheme(
            <Select label="Example label" flex inputGrow={2}>
              <TestOptions />
            </Select>
          )
        );

        expect(select).toMatchSnapshot();
      });
    });
  });

  describe('renders as disabled', () => {
    test('for default select input', () => {
      const select = create(
        renderWithTheme(
          <Select disabled>
            <TestOptions />
          </Select>
        )
      );

      expect(select).toMatchSnapshot();
    });
  });

  describe('renders as full-width', () => {
    test('for default select input', () => {
      const select = create(
        renderWithTheme(
          <Select fullWidth>
            <TestOptions />
          </Select>
        )
      );

      expect(select).toMatchSnapshot();
    });
  });
});
