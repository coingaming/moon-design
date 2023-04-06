import React from "react";
import { Command } from "cmdk";
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import GenericSearch from '../../private/icons/GenericSearch';

const SearchCmdk = (
  {
    children,
    className,
    open,
    onOpenChange,
    label,
    ...props
  }: React.ComponentProps<typeof Command.Dialog>
) => {
  return <Command.Dialog
    className={mergeClassnames(
      "z-50",
      "fixed top-1/3 left-1/2 transform -translate-x-1/2",
      "w-full sm:max-w-lg md:max-w-xl",
      "bg-gohan shadow-moon-md rounded-moon-s-md flex flex-col overflow-hidden",
      className
    )}
    open={open}
    onOpenChange={onOpenChange}
    label={label}
    {...props}
  >
    {children}
  </Command.Dialog>
}

const InputWrapper = (
  { children, className, ...props }: React.HTMLAttributes<HTMLDivElement>
) => {
  return <div
    className={
      mergeClassnames(
        "relative flex items-center space-x-1.5 pl-3 py-4",
        className
      )}
    {...props}
  >
    {children}
  </div>
}

const Input = (
  { className, placeholder = "Search", ...props }: React.ComponentProps<typeof Command.Input>
) => {
  return <Command.Input
    placeholder={placeholder}
    className={mergeClassnames(
      "py-2 px-0 border-0 w-full focus:outline-none focus:border-0 focus:ring-0 bg-transparent placeholder-bulma text-bulma",
      className
    )}
    {...props}
  />
}

const Icon = ({ className, ...props }: React.ComponentProps<typeof GenericSearch>) => {
  return <GenericSearch
    className={
      mergeClassnames(
        "w-6 h-6 pointer-events-none text-bulma",
        className
      )
    }
    {...props}
  />
}

const Kbd = (
  { className, children, ...props }: React.HTMLAttributes<HTMLDivElement>
) => {
  return <kbd
    className={
      mergeClassnames(
        "select-none hover:cursor-pointer text-trunks text-moon-10 transition absolute right-4 top-1/2 transform -translate-y-1/2 border border-trunks rounded-md p-1",
        className
      )
    }
    {...props}
  >
    {children}
  </kbd>
}

const Overlay = (
  { className, ...props }: React.HTMLAttributes<HTMLDivElement>
) => {
  return <div
    className={
      mergeClassnames(
        "fixed w-screen inset-0 bg-goku/75 transition-opacity z-40",
        className
      )
    }
    {...props}
  />
}

const Separator = ({ className }: React.ComponentProps<typeof Command.Separator>) => {
  return <Command.Separator
    alwaysRender
    className={mergeClassnames("h-px bg-beerus", className)}
  />
}

const Result = ({ children, className, ...props }: React.ComponentProps<typeof Command.List>) => {
  return <Command.List
    style={{
      // Should be equal p-2 below
      scrollPaddingBlockStart: "0.5rem",
      scrollPaddingBlockEnd: "0.5rem",
    }}
    className={mergeClassnames(
      "w-full max-h-[50vh] overflow-y-auto p-2 space-y-1 bg-gohan shadow-moon-md",
      className
    )}
    {...props}
  >
    {children}
  </Command.List>
}

const NoResults = ({ children, className }: React.ComponentProps<typeof Command.Empty>) => {
  return <Command.Empty
    className={
      mergeClassnames(
        "p-3 text-moon-14 text-trunks flex items-center space-x-2 font-bold",
        className
      )}
  >
    {children}
  </Command.Empty>
}

const ResultItem = ({ children, className, onSelect, ...props }: React.ComponentProps<typeof Command.Item>) => {
  return <Command.Item
    className={mergeClassnames(
      "p-2 cursor-pointer focus:outline-none select-none",
      className,
    )}
    onSelect={onSelect}
    {...props}
  >
    {children}
  </Command.Item>
}

SearchCmdk.InputWrapper = InputWrapper;
SearchCmdk.Input = Input;
SearchCmdk.Icon = Icon;
SearchCmdk.Separator = Separator;
SearchCmdk.Result = Result;
SearchCmdk.ResultItem = ResultItem;
SearchCmdk.NoResults = NoResults;
SearchCmdk.Kbd = Kbd;
SearchCmdk.Overlay = Overlay;

export default SearchCmdk;

