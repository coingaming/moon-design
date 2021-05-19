import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Pagination from '../Pagination';
import GoToPage from '../GoToPage';
import ChangePageSize from '../ChangePageSize';

describe('Pagination', () => {
  test('renders correctly', () => {
    const pagination = create(
      renderWithTheme(
        <Pagination
          pageCount={20}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageNumber={10}
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
          onChange={() => {}}
        />,
      ),
    );

    expect(pagination).toMatchSnapshot();
  });

  test('renders correctly with "page size" section', () => {
    const pagination = create(
      renderWithTheme(
        <Pagination
          pageCount={20}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageNumber={10}
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
          onChange={() => {}}
          pageSizeSection={
            <>
              Showing 1 – 10 <span>of 100</span>
            </>
          }
        />,
      ),
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
          pageNumber={10}
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
          onChange={() => {}}
          goToPageSection={
            <GoToPage minPage={1} maxPage={20} onChange={() => {}}>
              Go to page
            </GoToPage>
          }
        />,
      ),
    );

    expect(pagination).toMatchSnapshot();
  });

  test('renders correctly with "change page size" section', () => {
    const pagination = create(
      renderWithTheme(
        <Pagination
          pageCount={20}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageNumber={10}
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
          onChange={() => {}}
          changePageSizeSection={
            <ChangePageSize
              pageSize={20}
              onChange={() => {}}
              options={[
                { label: '10', value: 10 },
                { label: '20', value: 20 },
                { label: '50', value: 50 },
                { label: '100', value: 100 },
              ]}
            >
              Rows: {20}
            </ChangePageSize>
          }
        />,
      ),
    );

    expect(pagination).toMatchSnapshot();
  });

  describe('when renders with onChange handler', () => {
    const onChangeMock = jest.fn();
    let pagination: ReactTestRenderer;

    beforeAll(() => {
      pagination = create(
        renderWithTheme(
          <Pagination
            pageCount={20}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageNumber={10}
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            onChange={onChangeMock}
          />,
        ),
      );
    });

    afterEach(() => {
      onChangeMock.mockClear();
    });

    describe('and then clicking on the previous button', () => {
      beforeAll(() => {
        const previousPageLink = pagination.root.findByProps({
          'aria-label': 'Previous page',
        });
        act(() =>
          previousPageLink.props.onKeyPress({ preventDefault: () => {} }));
      });

      test('calls onPageChange handler with previous page', () => {
        expect(onChangeMock).toHaveBeenCalledWith(9);
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
        expect(onChangeMock).toHaveBeenCalledWith(10);
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
        expect(onChangeMock).toHaveBeenCalledWith(1);
      });

      test('renders "previous" button with class name "disabled"', () => {
        const previousButton = pagination.root.findAllByType('li')[0];
        expect(previousButton.props.className).toBe('previous disabled');
      });
    });
  });
});
