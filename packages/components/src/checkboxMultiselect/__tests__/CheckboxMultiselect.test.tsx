import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import CheckboxMultiselect from '../CheckboxMultiselect';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('CheckboxMultiselect', () => {
  test('renders by default', () => {
    const checkboxMultiselect = create(
      renderWithTheme(
        <CheckboxMultiselect
          onChange={() => {}}
          value={[]}
          options={[
            { label: 'Game 1', value: 1, id: '1' },
            { label: 'Game 2', value: 2, id: '2' },
            { label: 'Game 3', value: 3, id: '3' },
          ]}
        />,
      ),
    );

    expect(checkboxMultiselect).toMatchSnapshot();
  });

  test('renders with pre-selected value', () => {
    const checkboxMultiselect = create(
      renderWithTheme(
        <CheckboxMultiselect
          onChange={() => {}}
          value={[1, 2]}
          options={[
            { label: 'Game 1', value: 1, id: '1' },
            { label: 'Game 2', value: 2, id: '2' },
            { label: 'Game 3', value: 3, id: '3' },
          ]}
        />,
      ),
    );

    expect(checkboxMultiselect).toMatchSnapshot();
  });

  describe('when renders with onChange handler', () => {
    const onChangeMock = jest.fn();
    let checkboxMultiselect: ReactTestRenderer;

    beforeAll(() => {
      checkboxMultiselect = create(
        renderWithTheme(
          <CheckboxMultiselect
            onChange={onChangeMock}
            value={[]}
            options={[
              { label: 'Game 1', value: 1, id: '1' },
              { label: 'Game 2', value: 2, id: '2' },
              { label: 'Game 3', value: 3, id: '3' },
            ]}
          />,
        ),
      );
    });

    describe('and then clicking on the first option', () => {
      beforeAll(() => {
        const input = checkboxMultiselect.root.findAllByType('input')[0];
        act(() => input.props.onChange({ target: { checked: true } }));
      });

      test('calls onChange handler with selected option', () => {
        expect(onChangeMock).toHaveBeenCalledWith([1]);
      });
    });
  });

  test('renders with item count', () => {
    const checkboxMultiselect = create(
      renderWithTheme(
        <CheckboxMultiselect
          onChange={() => {}}
          value={[]}
          options={[
            {
              label: 'Game 1', value: 1, id: '1', count: 1,
            },
            {
              label: 'Game 2', value: 2, id: '2', count: 5,
            },
          ]}
        />,
      ),
    );

    const countItems = checkboxMultiselect.root.findAll(
      (el) => el.props['test-id'] === 'select-count',
    );
    expect(countItems).toBeDefined();
  });
});
