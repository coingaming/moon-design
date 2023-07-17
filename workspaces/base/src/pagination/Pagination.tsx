import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import getPageInfo from './getPageInfo';
import serverContext from './private/helper/ServerOnlyContext';
import type PolymorphicNextPrevButtonProps from './private/type/NextPrevButton';
import type PolymorphicPagesProps from './private/type/PagesProps';
import type WithStyledChildren from './private/type/WithStyledChildren';

const [getCurrentPage, setCurrentPage] = serverContext(1);
const [getTotalPages, setTotalPages] = serverContext(1);

const PaginationRoot = ({
  className,
  children,
  currentPage,
  totalPages,
}: WithStyledChildren<{ currentPage: number; totalPages: number }>) => {
  setCurrentPage(currentPage);
  setTotalPages(totalPages);
  return (
    <div
      className={mergeClassnames(
        'flex justify-center items-center w-full select-none',
        className
      )}
    >
      {children}
    </div>
  );
};

export const PrevButton = <C extends React.ElementType = 'button'>({
  className,
  children,
  as,
  disabled,
  ...rest
}: PolymorphicNextPrevButtonProps<C>) => {
  const Component = as || 'button';
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const currentPage = getCurrentPage();
  const totalPages = getTotalPages();

  const { previousPage } = getPageInfo({
    page: currentPage,
    totalCount: 3000,
    pageSize: totalPages,
  });

  if (previousPage) {
    return (
      <Component
        {...rest}
        className={mergeClassnames(
          'moon-disabled:cursor-not-allowed moon-disabled:opacity-30',
          className
        )}
        aria-disabled={disabled}
        disabled={disabled}
      >
        {childrens?.map((ch) => ch)}
      </Component>
    );
  }
  return null;
};

export const NextButton = <C extends React.ElementType = 'button'>({
  className,
  children,
  as,
  disabled,
  ...rest
}: PolymorphicNextPrevButtonProps<C>) => {
  const Component = as || 'button';
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const currentPage = getCurrentPage();
  const totalPages = getTotalPages();

  const { nextPage } = getPageInfo({
    page: currentPage,
    totalCount: 3000,
    pageSize: totalPages,
  });
  if (nextPage) {
    return (
      <Component
        {...rest}
        className={mergeClassnames(
          'moon-disabled:cursor-not-allowed moon-disabled:opacity-30',
          className
        )}
        aria-disabled={disabled}
        disabled={disabled}
      >
        {childrens?.map((ch) => ch)}
      </Component>
    );
  }
  return null;
};

const TruncableElement = ({
  children,
  className,
  ...rest
}: WithStyledChildren<{}>) => (
  <span
    className={mergeClassnames(
      'truncable flex justify-center min-w-[2rem]',
      className
    )}
    {...rest}
  >
    {children}
  </span>
);

const Pages = ({ className, children }: WithStyledChildren<{}>) => {
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  return (
    <nav
      className={mergeClassnames(
        'flex gap-1 items-center justify-center w-full h-10 text-moon-14 flex-grow',
        className
      )}
      aria-label="pagination"
    >
      {childrens?.map((ch) => ch)}
    </nav>
  );
};

const Page = <C extends React.ElementType = 'a'>({
  as,
  className,
  page,
  children,
  selected,
  ...rest
}: PolymorphicPagesProps<C>) => {
  const Component = as || 'a';
  return (
    <Component
      key={page}
      aria-label={`page ${page}`}
      tabIndex={0}
      className={mergeClassnames(
        'flex items-center justify-center cursor-pointer w-8 h-8 rounded-moon-s-sm font-medium focus:outline-none transition-colors',
        className,
        selected
          ? 'text-goten bg-piccolo'
          : 'text-bulma hover:bg-jiren focus:bg-jiren'
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

const Pagination = Object.assign(PaginationRoot, {
  PrevButton,
  NextButton,
  TruncableElement,
  Pages,
  Page,
});

export default Pagination;
