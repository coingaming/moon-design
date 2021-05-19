import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import ChangePageSize from '../ChangePageSize';

const pageSizeOptions = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

describe('ChangePageSize', () => {
  test('renders correctly', () => {
    const changePageSize = create(
      renderWithTheme(
        <ChangePageSize
          pageSize={20}
          onChange={() => {}}
          options={pageSizeOptions}
        >
          Rows: 20
        </ChangePageSize>,
      ),
    );

    expect(changePageSize).toMatchSnapshot();
  });

  describe('when renders with onChange handler', () => {
    const onChangeMock = jest.fn();
    let changePageSize: ReactTestRenderer;

    beforeAll(() => {
      changePageSize = create(
        renderWithTheme(
          <ChangePageSize
            pageSize={20}
            onChange={onChangeMock}
            options={pageSizeOptions}
          >
            Rows: 20
          </ChangePageSize>,
        ),
      );
    });

    afterEach(() => {
      onChangeMock.mockClear();
    });

    describe('and then clicking on the button', () => {
      beforeAll(() => {
        const changeePageSizeButton = changePageSize.root.findByType('button');

        act(() => changeePageSizeButton.props.onClick());
      });

      test('renders dropdown', () => {
        expect(changePageSize.root.findByType('ul')).toBeDefined();
      });

      describe('and then clicking on the first option', () => {
        beforeAll(() => {
          const dropdown = changePageSize.root.findByType('ul');
          const firstOption = dropdown.findAllByType('button')[0];

          act(() => firstOption.props.onClick());
        });

        test('calls onChange handler', () => {
          expect(onChangeMock).toHaveBeenCalledWith(pageSizeOptions[0].value);
        });
      });
    });
  });
});
