import React, { useEffect, useState } from "react";
import {
  MenuItem,
  SearchCmdk,
} from '@heathmont/moon-core-tw';

const items = [
  { label: "Test1" },
  { label: "Test2" }
];

function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle the menu when ⌘K is pressed
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filterItems = (value: string, search: string) => { console.log(value, search); return +value.includes(search); }

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
        filter={filterItems}
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
            {items.map(({ label }) =>
                <SearchCmdk.ResultItem
                  key={label}
                  onSelect={() => {
                    setOpen(false);
                  }}
                >
                  <MenuItem >
                    <MenuItem.Title>{label}</MenuItem.Title>
                    <span className="text-moon-14 text-piccolo">Action</span>
                  </MenuItem>
                </SearchCmdk.ResultItem>
          )}
        </SearchCmdk.Result>
      </SearchCmdk>
    </>
  );
}

export default CommandMenu;
