'use client';
import React, { createContext } from 'react';
import { SearchCmdk } from '@heathmont/moon-core-tw';
import useSearch from './hooks/useSearch';
import RenderResult from './RenderResults';

type SearchState = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchState>({});
SearchContext.displayName = 'SearchContext';

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { open, setOpen, closeSearch } = useSearch();

  return (
    <SearchContext.Provider value={{ open: open, setOpen: setOpen }}>
      {open && <SearchCmdk.Overlay />}
      <SearchCmdk open={open} onOpenChange={setOpen} label="Command Menu">
        <SearchCmdk.InputWrapper>
          <SearchCmdk.Icon />
          <SearchCmdk.Input placeholder="Search for a component" />
          <SearchCmdk.Kbd onClick={closeSearch}>Esc</SearchCmdk.Kbd>
        </SearchCmdk.InputWrapper>
        <SearchCmdk.Separator />
        <RenderResult onSelectHandler={closeSearch} />
      </SearchCmdk>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
