import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

const people2 = [
  'Wade Cooper',
  'Arlene Mccoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
];

const Example = () => {
  const [option, setOption] = useState<string | undefined>(undefined);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-80 gap-2">
      <Dropdown value={option} onChange={setOption}>
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              label="With hidden input"
              placeholder="Choose an option"
            >
              {option}
            </Dropdown.Select>
            <Dropdown.HiddenInput name="value" />

            <Dropdown.Options>
              {people2.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person}</MenuItem.Title>
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
