import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import usePagination from './private/hooks/usePagination';
import usePaginationContext from './private/hooks/usePaginationContext';
import PaginationContext from './private/types/PaginationContext';
import type PaginationProps from './private/types/PaginationProps';
import type PolymorphicNextPrevButtonProps from './private/types/PolymorphicNextPrevButtonProps';
import type PolymorphicPagesProps from './private/types/PolymorphicPagesProps';
import type TruncableElementProps from './private/types/TruncableElementProps';
import type UsePagination from './private/types/UsePagination';
import type WithChildren from './private/types/WithChildren';

const PaginationRoot: React.FC<WithChildren<PaginationProps>> = ({
  children,
  className,
  currentPage = 0,
  setCurrentPage = () => {},
  totalPages,
  edgePageCount = 1,
  middlePagesSiblingCount,
}) => {
  const pagination = usePagination({
    currentPage,
    setCurrentPage,
    totalPages,
    edgePageCount,
    middlePagesSiblingCount,
  });
  return (
    <PaginationContext.Provider value={pagination}>
      <div
        className={mergeClassnames(
          'flex justify-center items-center w-full select-none',
          className
        )}
      >
        {children}
      </div>
    </PaginationContext.Provider>
  );
};

export const PrevButton = <C extends React.ElementType = 'button'>({
  className,
  children,
  as,
  ...rest
}: PolymorphicNextPrevButtonProps<C>) => {
  const Component = as || 'button';
  const { currentPage, setCurrentPage }: UsePagination =
    usePaginationContext('PrevButton');
  const previous = () => {
    if (currentPage + 1 > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const disabled = currentPage === 0;
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];

  if (typeof children === 'function') {
    return (
      <Component
        {...rest}
        className={mergeClassnames(className)}
        onClick={() => previous()}
        aria-disabled={disabled}
        disabled={disabled}
      >
        {children({ disabled })}
      </Component>
    );
  }

  return (
    <Component
      {...rest}
      className={mergeClassnames(
        'moon-disabled:cursor-not-allowed moon-disabled:opacity-30',
        className
      )}
      onClick={() => previous()}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {childrens?.map((ch) => ch)}
    </Component>
  );
};

export const NextButton = <C extends React.ElementType = 'button'>({
  className,
  children,
  as,
  ...rest
}: PolymorphicNextPrevButtonProps<C>) => {
  const Component = as || 'button';
  const pagination: UsePagination = usePaginationContext('NextButton');
  const next = () => {
    if (pagination.currentPage + 1 < pagination.pages.length) {
      pagination.setCurrentPage(pagination.currentPage + 1);
    }
  };
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const disabled = pagination.currentPage === pagination.pages.length - 1;

  if (typeof children === 'function') {
    return (
      <Component
        {...rest}
        className={mergeClassnames(className)}
        onClick={() => next()}
        aria-disabled={disabled}
        disabled={disabled}
      >
        {children({ disabled })}
      </Component>
    );
  }
  return (
    <Component
      {...rest}
      className={mergeClassnames(
        'moon-disabled:cursor-not-allowed moon-disabled:opacity-30',
        className
      )}
      onClick={() => next()}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {childrens?.map((ch) => ch)}
    </Component>
  );
};

const TruncableElement = ({
  prev,
  children,
}: WithChildren<TruncableElementProps>) => {
  const pagination: UsePagination = usePaginationContext('TruncableElement');

  const { isPreviousTruncable, isNextTruncable } = pagination;

  return (isPreviousTruncable && prev === true) ||
    (isNextTruncable && !prev) ? (
    <span className="truncable flex justify-center min-w-[2rem]">
      {children}
    </span>
  ) : null;
};

const Pages = <C extends React.ElementType = 'a'>({
  as,
  className,
  truncableText = '...',
  ...rest
}: PolymorphicPagesProps<C>) => {
  const Component = as || 'a';
  const pagination: UsePagination = usePaginationContext('Pagination.Pages');

  const renderPage = (page: number) => (
    <Component
      key={page}
      aria-label={`page ${page}`}
      tabIndex={0}
      onClick={() => pagination.setCurrentPage(page - 1)}
      className={mergeClassnames(
        'flex items-center justify-center cursor-pointer w-8 h-8 rounded-moon-s-sm font-medium focus:outline-none transition-colors',
        className,
        pagination.currentPage + 1 === page
          ? 'text-goten bg-piccolo'
          : 'text-bulma hover:bg-jiren focus:bg-jiren'
      )}
      {...rest}
    >
      {page}
    </Component>
  );

  return (
    <nav
      className={mergeClassnames(
        'flex gap-1 items-center justify-center w-full h-10 text-moon-14 flex-grow',
        className
      )}
      aria-label="pagination"
    >
      {pagination.previousPages.map(renderPage)}
      <TruncableElement prev>{truncableText}</TruncableElement>
      {pagination.middlePages.map(renderPage)}
      <TruncableElement>{truncableText}</TruncableElement>
      {pagination.nextPages.map(renderPage)}
    </nav>
  );
};

const Pagination = Object.assign(PaginationRoot, {
  Pages,
  PrevButton,
  NextButton,
});

export default Pagination;
