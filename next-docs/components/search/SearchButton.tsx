import React from 'react';
import { GenericSearch } from '@heathmont/moon-icons-tw';
import { useKBar } from 'kbar';

const SearchButton: React.FC<{ showShortcut?: boolean }> = ({
  showShortcut = true,
}) => {
  const { query } = useKBar();

  return (
    <button
      aria-label="Search"
      onClick={query.toggle}
      className="flex h-10 cursor-text items-center justify-between rounded-moon-i-sm border border-beerus bg-gohan px-2 text-sm hover:border-bulma w-full"
    >
      <span className="flex gap-2 items-center text-moon-16 text-trunks">
        <GenericSearch className="text-moon-24" />
        <span>Search...</span>
      </span>

      {showShortcut && (
        <span
          className={`inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-beerus text-trunks`}
        >
          ⌘K
        </span>
      )}
    </button>
  );
};

export default SearchButton;
