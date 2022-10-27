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
  const [option, setOption] = useState(null);
  return (
    <div className="w-56 h-80">
      <Dropdown value={option} onChange={setOption}>
        <Dropdown.Trigger>
          <span className="p-2 cursor-pointer hover:text-piccolo">
            {option ? option?.name : 'Choose a name...'}
          </span>
        </Dropdown.Trigger>

        <Dropdown.Options>
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
