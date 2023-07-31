import React from 'react';
import { Command } from 'cmdk';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import GenericSearch from '../private/icons/GenericSearch';

const SearchCmdkRoot = ({
  children,
  className,
  open,
  onOpenChange,
  label,
  ...props
}: React.ComponentProps<typeof Command.Dialog>) => (
  <Command.Dialog
    className={mergeClassnames(
      'z-[60] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  bg-gohan',
      'sm:max-w-lg md:max-w-xl shadow-moon-md rounded-moon-s-md flex flex-col overflow-hidden',
      className
    )}
    open={open}
    onOpenChange={onOpenChange}
    label={label}
    {...props}
  >
    {children}
  </Command.Dialog>
);

const InputWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={mergeClassnames(
      'relative flex items-center space-x-1.5 pl-3 py-4',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const Input = ({
  className,
  placeholder = 'Search',
  ...props
}: React.ComponentProps<typeof Command.Input>) => (
  <Command.Input
    placeholder={placeholder}
    className={mergeClassnames(
      'py-2 px-0 border-0 w-full focus:outline-none focus:border-0 focus:ring-0 bg-transparent',
      'placeholder-bulma text-bulma',
      className
    )}
    {...props}
  />
);

const Icon = ({
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

const Kbd = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <kbd
    className={mergeClassnames(
      'select-none hover:cursor-pointer text-trunks text-moon-10 transition absolute right-4',
      'top-1/2 transform -translate-y-1/2 border border-trunks rounded-md p-1',
      className
    )}
    {...props}
  >
    {children}
  </kbd>
);

const Overlay = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={mergeClassnames(
      'fixed w-screen inset-0 bg-goku/75 transition-opacity z-[55]',
      className
    )}
    {...props}
  />
);

const Separator = ({
  className,
}: React.ComponentProps<typeof Command.Separator>) => (
  <Command.Separator
    alwaysRender
    className={mergeClassnames('h-px bg-beerus', className)}
  />
);

const Group = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Command.Group>) => (
  <Command.Group
    className={mergeClassnames(
      'w-full max-h-[50vh] overflow-y-auto p-2 space-y-1 bg-gohan shadow-none',
      className
    )}
    {...props}
  >
    {children}
  </Command.Group>
);

const Result = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Command.List>) => (
  <Command.List
    style={{
      // Should be equal p-2 below
      scrollPaddingBlockStart: '0.5rem',
      scrollPaddingBlockEnd: '0.5rem',
    }}
    className={mergeClassnames(
      'w-full max-h-[50vh] overflow-y-auto p-2 space-y-1 bg-gohan shadow-moon-md',
      className
    )}
    {...props}
  >
    {children}
  </Command.List>
);

const NoResults = ({
  children,
  className,
}: React.ComponentProps<typeof Command.Empty>) => (
  <Command.Empty
    className={mergeClassnames(
      'p-3 text-moon-14 text-trunks flex items-center space-x-2 font-bold',
      className
    )}
  >
    {children}
  </Command.Empty>
);

const ResultItem = ({
  children,
  className,
  onSelect,
  ...props
}: React.ComponentProps<typeof Command.Item>) => (
  <Command.Item
    className={mergeClassnames(
      'p-2 cursor-pointer focus:outline-none hover:bg-goku select-none text-bulma',
      'data-[selected=true]:bg-goku',
      className
    )}
    onSelect={onSelect}
    {...props}
  >
    {children}
  </Command.Item>
);

const Trigger = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => (
  <button
    aria-label="Search"
    className={mergeClassnames(
      'flex gap-2 h-10 cursor-text items-center text-trunks',
      'rounded-moon-i-sm border border-beerus bg-gohan px-2 text-moon-14',
      'hover:border-trunks w-full'
    )}
    {...props}
  >
    {children}
  </button>
);

const TriggerIcon = ({
  className,
  ...props
}: React.ComponentProps<typeof GenericSearch>) => (
  <GenericSearch
    className={mergeClassnames('text-moon-24 text-trunks', className)}
    {...props}
  />
);

const TriggerKbd = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <kbd
    className={mergeClassnames(
      'inline-block whitespace-nowrap rounded px-1.5 align-middle',
      'font-medium tracking-wide text-moon-14 border',
      'border-beerus text-trunks',
      'ml-auto',
      className
    )}
    {...props}
  >
    {children}
  </kbd>
);

const SearchCmdk = Object.assign(SearchCmdkRoot, {
  InputWrapper,
  Input,
  Icon,
  Separator,
  Group,
  Result,
  ResultItem,
  NoResults,
  Kbd,
  Overlay,
  Trigger,
  TriggerIcon,
  TriggerKbd,
});

export default SearchCmdk;
