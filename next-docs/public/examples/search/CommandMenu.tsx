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

  return (
    <>
      {open && <SearchCmdk.Overlay />}

      <SearchCmdk
        open={open}
        onOpenChange={setOpen}
        label="Command Menu"
      >
        <SearchCmdk.InputWrapper>
          <SearchCmdk.Icon />
          <SearchCmdk.Input
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
          {items.map((item) => (
            <SearchCmdk.ResultItem
              key={item.label}
              onSelect={() => {
                setOpen(false);
              }}
            >
              <MenuItem >
                <MenuItem.Title>{item.label}</MenuItem.Title>
                <span className="text-moon-14 text-piccolo">Action</span>
              </MenuItem>
            </SearchCmdk.ResultItem>
          ))}
        </SearchCmdk.Result>
      </SearchCmdk>
    </>
  );
}

export default CommandMenu;
