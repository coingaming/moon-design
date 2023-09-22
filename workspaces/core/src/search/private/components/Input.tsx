import React, { forwardRef, Ref, useContext, LegacyRef } from 'react';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import GenericSearch from '../../../private/icons/GenericSearch';
import { SearchContext } from '../utils/context';

const Wrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={mergeClassnames(
      'flex items-center ps-3 gap-2 moon-search-input',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const Icon = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof GenericSearch>) => (
  <GenericSearch
    className={mergeClassnames(
      'w-6 h-6 pointer-events-none text-bulma',
      className
    )}
    {...props}
  />
);

const InnerInput = forwardRef(
  (
    {
      placeholder,
      autoFocus,
      className,
      ...props
    }: React.HTMLAttributes<HTMLInputElement> & { autoFocus?: boolean },
    ref: Ref<HTMLInputElement>
  ) => {
    const { search, onChangeOpen, onChangeSearch, inputRef } =
      useContext(SearchContext);
    const ariaLabelValue = props['aria-label'] ? props['aria-label'] : 'Search';
    return (
      <input
        ref={(ref || inputRef) as LegacyRef<HTMLInputElement>}
        spellCheck={false}
        className={mergeClassnames(
          'moon-search-input py-2 px-0 border-0 w-full focus:outline-none focus:border-0',
          'focus:ring-0 bg-transparent placeholder-bulma text-bulma',
          className
        )}
        onClick={() => {
          onChangeOpen(true);
        }}
        onChange={(e) => {
          onChangeSearch(e.currentTarget.value);
        }}
        onFocus={(e) => {
          e.currentTarget.select();
          onChangeOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && search) {
            e.preventDefault();
            e.stopPropagation();
            onChangeSearch('');
          }
        }}
        placeholder={placeholder}
        value={search}
        type="text"
        autoFocus={autoFocus}
        autoComplete="off"
        aria-label={ariaLabelValue}
        {...props}
      />
    );
  }
);

export const ButtonClear = ({
  children,
  className,
  onClick,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const { onChangeSearch } = useContext(SearchContext);
  return (
    <button
      tabIndex={-1}
      type="button"
      className={mergeClassnames(
        'cursor-pointer text-trunks text-moon-14 transition absolute end-4',
        'top-1/2 transform -translate-y-1/2',
        className
      )}
      onClick={(e) => {
        onChangeSearch('');
        const inputElement = e.currentTarget.parentNode?.querySelectorAll(
          '.moon-search-input'
        )[0] as HTMLInputElement;
        if (inputElement) {
          inputElement.focus();
        }
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export const Input = Object.assign(Wrapper, {
  Icon,
  Input: InnerInput,
  ButtonClear,
});
