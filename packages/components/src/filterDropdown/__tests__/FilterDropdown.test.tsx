import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import FilterDropdown from '../FilterDropdown';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('FilterDropdown', () => {
  test('renders by default', () => {
    const filterDropdown = create(
      renderWithTheme(
        <FilterDropdown
          searchPlaceholder="Search for a name..."
          onSearchChange={() => {}}
        />,
      ),
    );

    expect(filterDropdown).toMatchSnapshot();
  });

  test('renders without search input', () => {
    const filterDropdown = create(renderWithTheme(<FilterDropdown />));

    expect(filterDropdown).toMatchSnapshot();
  });

  describe('when renders with onSearchChange handler', () => {
    const onSearchChangeMock = jest.fn();
    let filterDropdown: ReactTestRenderer;

    beforeAll(() => {
      filterDropdown = create(
        renderWithTheme(
          <FilterDropdown
            searchPlaceholder="Search for a name..."
            onSearchChange={onSearchChangeMock}
          />,
        ),
      );
    });

    describe('and then changing search input', () => {
      beforeAll(() => {
        const searchInput = filterDropdown.root.findByType('input');
        act(() =>
          searchInput.props.onChange({ target: { value: 'searchValue' } }));
      });

      test('calls onSearchChange handler with value', () => {
        expect(onSearchChangeMock).toHaveBeenCalledWith('searchValue');
      });
    });
  });
});
