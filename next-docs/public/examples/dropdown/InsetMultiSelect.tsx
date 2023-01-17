import React, { useCallback, useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

type People = {
  name: string;
};

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected, setSelected] = useState<People[]>([]);
  return (
    <div className="flex w-full max-w-sm items-center">
      <Dropdown
        value={selected}
        onChange={setSelected}
        onClear={useCallback(() => setSelected([]), [setSelected])}
        multiple
      >
        {({ open }) => (
          <>
            <Dropdown.InsetMultiSelect
              open={open}
              label="Select label"
              placeholder="Choose an option"
              counter={selected.length}
            />
            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Checkbox isSelected={selected} />
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>
    </div>
  );
};

export default Example;
