import React from 'react';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import 'jest-styled-components';

import SingleItemSelect from '../SingleItemSelect';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('SingleItemSelect', () => {
  test('renders by default', () => {
    const singleItemSelect = create(
      renderWithTheme(
        <SingleItemSelect
          onChange={() => {}}
          value=""
          options={[
            { label: 'Game 1', value: 1 },
            { label: 'Game 2', value: 2 },
            { label: 'Game 3', value: 3 },
          ]}
        />
      )
    );

    expect(singleItemSelect).toMatchSnapshot();
  });

  test('renders with pre-selected value', () => {
    const singleItemSelect = create(
      renderWithTheme(
        <SingleItemSelect
          onChange={() => {}}
          value={2}
          options={[
            { label: 'Game 1', value: 1 },
            { label: 'Game 2', value: 2 },
            { label: 'Game 3', value: 3 },
          ]}
        />
      )
    );

    expect(singleItemSelect).toMatchSnapshot();
  });

  describe('when renders with onChange handler', () => {
    const onChangeMock = jest.fn();
    let singleItemSelect: ReactTestRenderer;

    beforeAll(() => {
      singleItemSelect = create(
        renderWithTheme(
          <SingleItemSelect
            onChange={onChangeMock}
            value={2}
            options={[
              { label: 'Game 1', value: 1 },
              { label: 'Game 2', value: 2 },
              { label: 'Game 3', value: 3 },
            ]}
          />
        )
      );
    });

    describe('and then clicking on the first option', () => {
      beforeAll(() => {
        const input = singleItemSelect.root.findAllByType('button')[0];
        act(() => input.props.onClick({ preventDefault: () => {} }));
      });

      test('calls onChange handler with selected option', () => {
        expect(onChangeMock).toHaveBeenCalledWith(1);
      });
    });
  });
});
