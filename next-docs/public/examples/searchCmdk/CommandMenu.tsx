import React, { useEffect, useState } from "react";
import {
  MenuItem,
  SearchCmdk,
} from '@heathmont/moon-core-tw';

type TCMDKItem = {
  label: string
}

const items = [
  { label: "Aurum" },
  { label: "Argentum" },
  { label: "Zink" },
  { label: "Plumbum" }
];

function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);
  const [listLength, setListLength] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle the menu when ⌘K is pressed
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.code === 'ArrowDown') {
        setSelected((selected) =>
          selected + 1
        );
      }
      if (e.code === 'ArrowUp') {
        setSelected((selected) =>
          selected - 1
        );
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    setSelected(0);
    setListLength(() => filterItems(items, search).length);
  }, [search]);

  useEffect(() => {
    if (selected < 0) {
      setSelected(listLength - 1);
    }
    if (selected >= listLength) {
      setSelected(0);
    }
  }, [selected]);

  const filterItems = (values: TCMDKItem[], search: string) => { return values.filter(({ label }) => +label.includes(search)); }
  const filteredItems = filterItems(items, search);

  return (
    <>
      <SearchCmdk.Trigger onClick={() => { setOpen(true) }}>
        <SearchCmdk.TriggerIcon />
        <span className="text-moon-16">Search...</span>
        <SearchCmdk.TriggerKbd>⌘K</SearchCmdk.TriggerKbd>
      </SearchCmdk.Trigger>

      {open && <SearchCmdk.Overlay />}

      <SearchCmdk
        open={open}
        onOpenChange={setOpen}
        label="Command Menu"
        shouldFilter={false}
        loop={true}
      >
        <SearchCmdk.InputWrapper>
          <SearchCmdk.Icon />
          <SearchCmdk.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search for a component"
          />
          <SearchCmdk.Kbd onClick={() => setOpen(false)}>
            Esc
          </SearchCmdk.Kbd>
        </SearchCmdk.InputWrapper>
        <SearchCmdk.Separator />
        <SearchCmdk.Result>
          <SearchCmdk.NoResults>
            No Results
          </SearchCmdk.NoResults>
            {filteredItems.map(({ label }, index) =>
              <SearchCmdk.ResultItem
                key={label}
                value={label}
                onSelect={() => {
                  setOpen(false);
                }}
                isActive={index === selected}
              >
                {label}
                {/*<MenuItem isActive={index === selected}>
                  <MenuItem.Title>{label}</MenuItem.Title>
                  <span className="text-moon-14 text-piccolo">Action</span>
              </MenuItem>*/}
              </SearchCmdk.ResultItem>
            )}
        </SearchCmdk.Result>
      </SearchCmdk>
    </>
  );
}

export default CommandMenu;
