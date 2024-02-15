import React from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import { Command } from 'cmdk';
import GenericSearch from './private/icons/GenericSearch';

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
      'z-[60] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-goku',
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
    className={mergeClassnames('flex items-center gap-4 px-4', className)}
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
      'py-4 border-0 w-full focus:outline-none focus:border-0 focus:ring-0 bg-transparent',
      'placeholder-trunks text-bulma text-moon-16',
      className
    )}
    {...props}
  />
);

const Icon = ({
  className,
  ...props
}: React.ComponentProps<typeof GenericSearch>) => (
  <div>
    <GenericSearch
      className={mergeClassnames(
        'pointer-events-none text-bulma text-moon-24',
        className
      )}
      {...props}
    />
  </div>
);

const Kbd = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <kbd
    className={mergeClassnames(
      'select-none hover:cursor-pointer text-trunks text-moon-14',
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
      'fixed w-screen inset-0 bg-zeno transition-opacity z-[55]',
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
      'w-full max-h-[50vh] overflow-y-auto p-2 space-y-1 bg-goku shadow-none',
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
      'w-full max-h-[50vh] overflow-y-auto p-2 space-y-1 bg-goku shadow-moon-md',
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
      'p-3 text-moon-14 text-trunks flex items-center',
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
      'flex gap-2 justify-between items-center p-2 bg-transparent rounded-moon-i-sm',
      'text-moon-14 text-bulma focus:outline-none focus:shadow-focus cursor-pointer',
      'hover:bg-heles transition data-[selected=true]:bg-heles',
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
      'flex gap-2 h-10 cursor-text items-center text-trunks w-full',
      'rounded-moon-i-sm border border-beerus bg-goku px-2 text-moon-14',
      className
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
    className={mergeClassnames('text-moon-24 text-bulma', className)}
    {...props}
  />
);

const TriggerKbd = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <kbd
    className={mergeClassnames('text-moon-12 text-trunks ms-auto', className)}
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
