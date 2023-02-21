import React from 'react';
import { GenericSearch } from '@heathmont/moon-icons-tw';

export const Trigger: React.FC<{
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ children, ...rest }) => (
  <button
    aria-label="Search"
    className="flex h-10 cursor-text items-center justify-between rounded-moon-i-sm border border-beerus bg-gohan px-2 text-sm hover:border-trunks w-full focus:outline-none"
    {...rest}
  >
    <span className="flex gap-2 items-center text-moon-16 text-trunks">
      <GenericSearch className="text-moon-24 text-bulma" />
      {children}
    </span>

    <span
      className={`inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide text-xs border border-beerus text-trunks`}
    >
      ⌘K
    </span>
  </button>
);
