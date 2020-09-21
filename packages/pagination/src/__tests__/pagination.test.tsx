import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Pagination from '../Pagination';

describe('Pagination', () => {
  test('renders correctly', () => {
    const pagination = create(
      renderWithTheme(
        <Pagination
          pageCount={20}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          initialPage={11}
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
        />
      )
    );

    expect(pagination).toMatchSnapshot();
  });

  test('renders correctly with "items per page" section', () => {
    const pagination = create(
      renderWithTheme(
        <Pagination
          pageCount={20}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          initialPage={11}
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
          itemsPerPageLabel={
            <>
              Showing 1 – 10 <span>of 100</span>
            </>
          }
        />
      )
    );

    expect(pagination).toMatchSnapshot();
  });

  test('renders correctly with "go to page" section', () => {
    const pagination = create(
      renderWithTheme(
        <Pagination
          pageCount={20}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          initialPage={11}
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
          showGoToPageSection
          goToPageLabel="Go to page"
        />
      )
    );

    expect(pagination).toMatchSnapshot();
  });

  describe('when renders with onPageChange handler', () => {
    const onPageChangeMock = jest.fn();
    let pagination: ReactTestRenderer;

    beforeAll(() => {
      pagination = create(
        renderWithTheme(
          <Pagination
            pageCount={20}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            initialPage={11}
            disableInitialCallback
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            showGoToPageSection
            goToPageLabel="Go to page"
            onPageChange={onPageChangeMock}
          />
        )
      );
    });

    afterEach(() => {
      onPageChangeMock.mockClear();
    });

    describe('and then clicking on the previous button', () => {
      beforeAll(() => {
        const previousPageLink = pagination.root.findByProps({
          'aria-label': 'Previous page',
        });
        act(() =>
          previousPageLink.props.onKeyPress({ preventDefault: () => {} })
        );
      });

      test('calls onPageChange handler with previous page', () => {
        expect(onPageChangeMock).toHaveBeenCalledWith({ selected: 10 });
      });
    });

    describe('and then clicking on the next button', () => {
      beforeAll(() => {
        const nextPageLink = pagination.root.findByProps({
          'aria-label': 'Next page',
        });
        act(() => nextPageLink.props.onKeyPress({ preventDefault: () => {} }));
      });

      test('calls onPageChange handler with next page', () => {
        expect(onPageChangeMock).toHaveBeenCalledWith({ selected: 11 });
      });
    });

    describe('and then clicking on the first page', () => {
      beforeAll(() => {
        const firstPage = pagination.root.findByProps({
          'aria-label': 'Page 1',
        });
        act(() => firstPage.props.onKeyPress({ preventDefault: () => {} }));
      });

      test('calls onPageChange handler with first page', () => {
        expect(onPageChangeMock).toHaveBeenCalledWith({ selected: 0 });
      });

      test('renders "previous" button with class name "disabled"', () => {
        const previousButton = pagination.root.findAllByType('li')[0];
        expect(previousButton.props.className).toBe('previous disabled');
      });
    });

    describe('and then changing page using go to page form', () => {
      beforeAll(() => {
        const goToPageInput = pagination.root.findByType('input');
        act(() => goToPageInput.props.onChange({ target: { value: '20' } }));
        const goToPageForm = pagination.root.findByType('form');
        act(() => goToPageForm.props.onSubmit({ preventDefault: () => {} }));
      });

      test('calls onPageChangeMock handler with last page', () => {
        expect(onPageChangeMock).toHaveBeenCalledWith({ selected: 19 });
      });

      test('renders "next" button with class name "disabled"', () => {
        const nextButton = pagination.root.findAllByType('li')[
          pagination.root.findAllByType('li').length - 1
        ];
        expect(nextButton.props.className).toBe('next disabled');
      });
    });
  });
});
