import React, { createContext, useState } from 'react';
import { SearchCmdk } from '@heathmont/moon-core-tw';
import useSearch from './hooks/useSearch';
import RenderResult from './RenderResults';

type SearchState = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchState>({});
SearchContext.displayName = 'SearchContext';

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { open, setOpen, closeSearch } = useSearch();
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider
      value={{
        open: open,
        setOpen: setOpen,
        search: search,
        setSearch: setSearch,
      }}
    >
      {open && <SearchCmdk.Overlay />}
      <SearchCmdk
        open={open}
        onOpenChange={setOpen}
        shouldFilter={false}
        label="Command Menu"
      >
        <SearchCmdk.InputWrapper>
          <SearchCmdk.Icon />
          <SearchCmdk.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search for a component"
          />
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
