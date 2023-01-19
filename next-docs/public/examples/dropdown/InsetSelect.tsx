import React, { useState } from 'react';
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
  const [option, setOption] = useState<People | null>(null);

  return (
    <div className="flex w-full max-w-sm items-center z-0">
      <Dropdown value={option} onChange={setOption}>
        {({ open }) => (
          <>
            <Dropdown.InsetSelect
              open={open}
              label="Select label"
              placeholder="Choose an option"
            >
              {option?.name}
            </Dropdown.InsetSelect>

            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Radio isSelected={selected} />
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
