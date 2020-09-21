import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import GoToPage from '../GoToPage';

describe('GoToPage', () => {
  test('renders correctly', () => {
    const goToPage = create(renderWithTheme(<GoToPage onChange={() => {}} />));

    expect(goToPage).toMatchSnapshot();
  });

  test('renders correctly with label', () => {
    const goToPage = create(
      renderWithTheme(<GoToPage onChange={() => {}} label="Go to page" />)
    );

    expect(goToPage).toMatchSnapshot();
  });

  describe('when renders with onChange handler', () => {
    const onChangeMock = jest.fn();
    let goToPage: ReactTestRenderer;

    beforeAll(() => {
      goToPage = create(renderWithTheme(<GoToPage onChange={onChangeMock} />));
    });

    afterEach(() => {
      onChangeMock.mockClear();
    });

    describe('and then entering a valid number', () => {
      beforeAll(() => {
        const input = goToPage.root.findByType('input');
        act(() => input.props.onChange({ target: { value: '123' } }));
        const form = goToPage.root.findByType('form');
        act(() => form.props.onSubmit({ preventDefault: () => {} }));
      });

      test('calls onChange handler', () => {
        expect(onChangeMock).toHaveBeenCalledWith(123);
      });
    });

    describe('and then entering an incorrect value', () => {
      beforeAll(() => {
        const input = goToPage.root.findByType('input');
        act(() => input.props.onChange({ target: { value: 'a123' } }));
        const form = goToPage.root.findByType('form');
        act(() => form.props.onSubmit({ preventDefault: () => {} }));
      });

      test('does not call onChange handler', () => {
        expect(onChangeMock).not.toHaveBeenCalled();
      });
    });
  });
});
