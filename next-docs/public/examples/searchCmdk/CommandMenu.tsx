import React, { useEffect, useState } from "react";
import { SearchCmdk } from '@heathmont/moon-core-tw';

type Item = {
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

  const filterItems = (values: Item[], search: string) => { return values.filter(({ label }) => +label.includes(search)); }
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
            {filteredItems.map(({ label }) =>
              <SearchCmdk.ResultItem
                key={label}
                value={label}
                onSelect={() => {
                  setOpen(false);
                }}
              >
                {label}
              </SearchCmdk.ResultItem>
            )}
        </SearchCmdk.Result>
      </SearchCmdk>
    </>
  );
}

export default CommandMenu;
