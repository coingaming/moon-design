import React, { useContext } from 'react';
import { SearchCmdk } from '@heathmont/moon-core-tw';
import { SearchContext } from '../../components/search/SearchProvider';

const SearchButton: React.FC = () => {
  const { setOpen } = useContext(SearchContext);
  return (
    <SearchCmdk.Trigger
      onClick={() => {
        setOpen && setOpen(true);
      }}
    >
      <SearchCmdk.TriggerIcon />
      <span className="text-moon-16">Search...</span>
      <SearchCmdk.TriggerKbd>⌘K</SearchCmdk.TriggerKbd>
    </SearchCmdk.Trigger>
  );
};

export default SearchButton;
