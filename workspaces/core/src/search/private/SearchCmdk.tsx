import React from "react";
import type { ReactNode } from "react";
import { Command } from "cmdk";
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import GenericSearch from '../../private/icons/GenericSearch';

const SearchCmdk = (
  { children, className, open, onOpenChange, label, ...props }:
    { children: ReactNode, className?: string, open: boolean, onOpenChange: any, label: string }) => {
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

function Wrapper({ children, className, ...props }: { children: ReactNode, className?: string }) {
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

const Input = ({ className, placeholder = "Search", ...props }: { className?: string, placeholder?: string }) => {
  return <Command.Input
    placeholder={placeholder}
    className={mergeClassnames(
      "py-2 px-0 border-0 w-full focus:outline-none focus:border-0 focus:ring-0 bg-transparent placeholder-bulma text-bulma",
      className
    )}
    {...props}
  />
}

const Icon = ({ className, ...props }: { className?: string }) => {
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

const Kbd = ({ className, children, ...props }: any) => {
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

const Overlay = ({ className }: { className?: string }) => {
  return <div
    className={
      mergeClassnames(
        "fixed w-screen inset-0 bg-goku/75 transition-opacity z-40",
        className
      )
    }
  />
}

const Separator = ({ className }: { className?: string }) => {
  return <Command.Separator
    alwaysRender
    className={mergeClassnames("h-px bg-beerus", className)}
  />
}

const List = ({ children, className, ...props }: { children: ReactNode, className?: string }) => {
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

const NoResults = ({ children, className }: { children: ReactNode, className?: string }) => {
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

const ListItem = ({ children, className, onSelect, ...props }: { children: ReactNode, className?: string, onSelect: any }) => {
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

SearchCmdk.Wrapper = Wrapper;
SearchCmdk.Input = Input;
SearchCmdk.Icon = Icon;
SearchCmdk.Separator = Separator;
SearchCmdk.List = List;
SearchCmdk.ListItem = ListItem;
SearchCmdk.NoResults = NoResults;
SearchCmdk.Kbd = Kbd;
SearchCmdk.Overlay = Overlay;

export default SearchCmdk;

