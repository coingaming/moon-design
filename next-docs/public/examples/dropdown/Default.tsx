import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

type People = {
  name?: string;
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
  const [option, setOption] = useState<People>({ name: 'Choose a name...' });
  return (
    <div className="w-56">
      <Dropdown value={option} onChange={setOption}>
        <Dropdown.Trigger>
          <span className="p-2 cursor-pointer hover:text-piccolo">
            {option?.name}
          </span>
        </Dropdown.Trigger>

        <Dropdown.Options>
          {people.map((person, index) => (
            <Dropdown.Option value={person} key={index}>
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
