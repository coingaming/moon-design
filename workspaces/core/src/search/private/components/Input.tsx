import React, { ReactNode, forwardRef, Ref, useContext, LegacyRef } from 'react';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import GenericSearch from '../../../private/icons/GenericSearch';
import { SearchContext } from '../utils/context';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center space-x-1.5 pl-3 moon-search-input">
    {children}
  </div>
}

const Icon = ({ className }: { className?: string }) => {
  return <GenericSearch
    className={
      mergeClassnames("w-6 h-6 pointer-events-none text-bulma", className)
    } />
}

const InnerInput = forwardRef(({
  placeholder,
  autoFocus,
  className
}: {
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
},
  ref: Ref<HTMLInputElement>) => {
  const { search, onChangeOpen, onChangeSearch, inputRef } = useContext(SearchContext);

  return <input
    ref={(ref || inputRef) as LegacyRef<HTMLInputElement>}
    spellCheck={false}
    className={
      mergeClassnames(
        "py-2 px-0 border-0 w-full focus:outline-none focus:border-0 focus:ring-0 bg-transparent placeholder-bulma text-bulma",
        className
      )}
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
    id="moon-search-input"
    placeholder={placeholder}
    value={search}
    type="text"
    autoFocus={autoFocus}
  />
})

export const ButtonClear = ({ children }: { children: ReactNode }) => {
  const { onChangeSearch } = useContext(SearchContext);
  return <button
    tabIndex={-1}
    type="button"
    className="cursor-pointer text-trunks test-sm transition absolute right-4 top-1/2 transform -translate-y-1/2"
    onClick={() => {
      onChangeSearch('');
      const inputElement = document.getElementById('moon-search-input');
      if (inputElement) {
        inputElement.focus();
      }
    }}
  >
    {children}
  </button>
}

export const Input = Object.assign(Wrapper, {
  Icon, Input: InnerInput,ButtonClear
})
