import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="w-56 h-80">
      <Dropdown value={selected} onChange={setSelected}>
        <Dropdown.Trigger>
          <span>{selected?.name}</span>
        </Dropdown.Trigger>

        <Dropdown.Options static>
          {people.map((person, index) => (
            <Dropdown.Option value={person} index={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {person.name}
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    </div>
  );
};

export default Example;
