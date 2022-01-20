import React from 'react';
import { Button } from '@heathmont/moon-components';
import { rem, mq } from '@heathmont/moon-utils';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

type PaginationProps = {
  previousButtonLabel: string | JSX.Element;
  nextButtonLabel: string | JSX.Element;
  pageNumber: number;
  onChange: (pageNumber: number) => void;
  goToPageSection?: JSX.Element;
  changePageSizeSection?: JSX.Element;
  pageSizeSection?: JSX.Element;
  pageCount: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
};

const PaginationWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  flexDirection: 'column',
  [mq(theme.breakpoint.medium)]: {
    flexDirection: 'row',
  },
}));

const SectionWrapper = styled.div({
  margin: rem(10),
});

const ReactPaginateWrapper = styled.div(({ theme }): any => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  [mq(theme.breakpoint.medium)]: {
    width: 'auto',
    flexDirection: 'row',
  },
  '& > ul': {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: rem(10),
    flexWrap: 'wrap',
    [mq(theme.breakpoint.medium)]: {
      flexWrap: 'nowrap',
    },
    '& > li:not(.previous):not(.next)': {
      margin: `0 ${rem(2)}`,
      borderRadius: '50%',
      '& > a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: rem(32),
        width: rem(32),
        cursor: 'pointer',
      },
      '&.selected': {
        backgroundColor: theme.color.goku[80],
        '& > a': {
          outline: 'none',
        },
      },
    },
    '& > .previous, & > .next': {
      margin: `${rem(10)} 0`,
      width: '100%',
      textAlign: 'center',
    },
    '& > .previous': {
      [mq(theme.breakpoint.medium)]: {
        margin: `0 ${rem(10)} 0 0`,
      },
    },
    '& > .next': {
      [mq(theme.breakpoint.medium)]: {
        margin: `0 0 0 ${rem(10)}`,
      },
    },
    '& > .disabled': {
      'button, button:hover': {
        cursor: 'default',
        color: theme.colorNew.trunks,
        background: 'none',
        borderColor: theme.colorNew.beerus,
      },
    },
  },
}));

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onChange,
    previousButtonLabel,
    nextButtonLabel,
    pageNumber,
    goToPageSection,
    changePageSizeSection,
    pageSizeSection,
    pageCount,
    pageRangeDisplayed,
    marginPagesDisplayed,
  } = props;
  return (
    <PaginationWrapper>
      {!!pageSizeSection && (
        <SectionWrapper> {pageSizeSection} </SectionWrapper>
      )}
      <ReactPaginateWrapper>
        <ReactPaginate
          forcePage={pageNumber - 1}
          previousLabel={
            <Button variant="primary" size="xsmall">
              {previousButtonLabel}
            </Button>
          }
          nextLabel={
            <Button variant="primary" size="xsmall">
              {nextButtonLabel}
            </Button>
          }
          onPageChange={({ selected }) => onChange(selected + 1)}
          disableInitialCallback
          pageCount={pageCount}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={marginPagesDisplayed}
        />
        {!!changePageSizeSection && (
          <SectionWrapper> {changePageSizeSection} </SectionWrapper>
        )}
      </ReactPaginateWrapper>
      {!!goToPageSection && (
        <SectionWrapper> {goToPageSection} </SectionWrapper>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
