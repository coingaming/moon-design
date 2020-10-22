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
    const goToPage = create(
      renderWithTheme(<GoToPage minPage={1} maxPage={20} onChange={() => {}} />)
    );

    expect(goToPage).toMatchSnapshot();
  });

  test('renders correctly with label', () => {
    const goToPage = create(
      renderWithTheme(
        <GoToPage minPage={1} maxPage={20} onChange={() => {}}>
          Go to page
        </GoToPage>
      )
    );

    expect(goToPage).toMatchSnapshot();
  });

  describe('when renders with onChange handler', () => {
    const onChangeMock = jest.fn();
    let goToPage: ReactTestRenderer;

    beforeAll(() => {
      goToPage = create(
        renderWithTheme(
          <GoToPage minPage={1} maxPage={20} onChange={onChangeMock} />
        )
      );
    });

    afterEach(() => {
      onChangeMock.mockClear();
    });

    describe('and then entering a valid number', () => {
      beforeAll(() => {
        const input = goToPage.root.findByType('input');
        act(() => input.props.onChange({ target: { value: '10' } }));
        const form = goToPage.root.findByType('form');
        act(() => form.props.onSubmit({ preventDefault: () => {} }));
      });

      test('calls onChange handler', () => {
        expect(onChangeMock).toHaveBeenCalledWith(10);
      });
    });

    describe('and then entering a number that less than minPage', () => {
      beforeAll(() => {
        const input = goToPage.root.findByType('input');
        act(() => input.props.onChange({ target: { value: '0' } }));
        const form = goToPage.root.findByType('form');
        act(() => form.props.onSubmit({ preventDefault: () => {} }));
      });

      test('calls onChange handler with minPage', () => {
        expect(onChangeMock).toHaveBeenCalledWith(1);
      });
    });

    describe('and then entering a number that more than maxPage', () => {
      beforeAll(() => {
        const input = goToPage.root.findByType('input');
        act(() => input.props.onChange({ target: { value: '21' } }));
        const form = goToPage.root.findByType('form');
        act(() => form.props.onSubmit({ preventDefault: () => {} }));
      });

      test('calls onChange handler with maxPage', () => {
        expect(onChangeMock).toHaveBeenCalledWith(20);
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
