import React, { useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import styled from 'styled-components';
import { rem, mq } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-components';

import GoToPage from './GoToPage';

type PaginationProps = {
  itemsPerPageLabel?: string | JSX.Element;
  goToPageLabel?: string | JSX.Element;
  previousButtonLabel: string | JSX.Element;
  nextButtonLabel: string | JSX.Element;
} & ReactPaginateProps;

const PaginationWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const ItemsPerPage = styled.div(({ theme }) => ({
  color: theme.color.bulma[100],
  fontSize: rem(12),
  fontWeight: theme.fontWeight.semibold,
  order: 0,
  margin: `${rem(12)} 0`,
  [mq(theme.breakpoint.small)]: {
    margin: 0,
  },
  [mq(theme.breakpoint.xlarge)]: {
    order: -1,
  },
  '& > span': {
    color: theme.color.trunks[100],
  },
}));

const ReactPaginateWrapper = styled.div(({ theme }) => ({
  width: '100%',
  marginBottom: rem(10),
  [mq(theme.breakpoint.xlarge)]: {
    width: 'auto',
    marginBottom: 0,
  },
  '& > ul': {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: rem(10),
    flexWrap: 'wrap',
    [mq(theme.breakpoint.small)]: {
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
      marginTop: rem(10),
      width: '100%',
      textAlign: 'center',
      order: 1,
      [mq(theme.breakpoint.small)]: {
        order: 0,
      },
    },
    '& > .previous': {
      [mq(theme.breakpoint.small)]: {
        margin: `0 ${rem(10)} 0 0`,
      },
    },
    '& > .next': {
      [mq(theme.breakpoint.small)]: {
        margin: `0 0 0 ${rem(10)}`,
      },
    },
    '& > .disabled': {
      'button, button:hover': {
        cursor: 'default',
        color: theme.color.trunks[100],
        background: 'none',
        borderColor: theme.color.beerus[100],
      },
    },
  },
}));

const Pagination: React.FC<PaginationProps> = props => {
  const {
    itemsPerPageLabel,
    goToPageLabel,
    onPageChange,
    previousButtonLabel,
    nextButtonLabel,
    pageCount,
    initialPage,
  } = props;
  const [forcePage, setForcePage] = useState(initialPage);

  const handleGoToPage = (page: number) => {
    const currentPage = page - 1;
    if (currentPage < 0 || currentPage > pageCount - 1) return;
    if (onPageChange) onPageChange({ selected: currentPage });
    setForcePage(currentPage);
  };

  return (
    <PaginationWrapper>
      <ReactPaginateWrapper>
        <ReactPaginate
          forcePage={forcePage}
          containerClassName=""
          previousLabel={
            <Button variant="primary">{previousButtonLabel}</Button>
          }
          nextLabel={<Button variant="primary">{nextButtonLabel}</Button>}
          {...props}
        />
      </ReactPaginateWrapper>
      {!!itemsPerPageLabel && <ItemsPerPage>{itemsPerPageLabel}</ItemsPerPage>}
      {!!goToPageLabel && (
        <GoToPage label={goToPageLabel} onChange={handleGoToPage} />
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
