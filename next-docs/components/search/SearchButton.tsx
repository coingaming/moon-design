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
      className="flex h-8 cursor-text items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-2 text-sm hover:border-gray-300 hover:bg-gray-100 w-full"
    >
      <span className="flex items-center">
        <span className="mr-2 block w-3 w">
          <GenericSearch className="text-[1rem]" />
        </span>
        <span className="mr-8 text-slate-400 dark:text-slate-500">
          Search...
        </span>
      </span>

      {showShortcut && (
        <span
          className={`inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-slate-400/70 text-slate-500`}
        >
          ⌘K
        </span>
      )}
    </button>
  );
};

export default SearchButton;
