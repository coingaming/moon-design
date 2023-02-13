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
  const [option2, setOption2] = useState<People | null>(null);
  const [option3, setOption3] = useState<People | null>(null);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Dropdown value={option} onChange={setOption} size="sm">
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              label="Small"
              placeholder="Choose an option"
            >
              {option?.name}
            </Dropdown.Select>

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

      <Dropdown value={option2} onChange={setOption2}>
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              label="Medium"
              placeholder="Choose an option"
            >
              {option2?.name}
            </Dropdown.Select>
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

      <Dropdown value={option3} onChange={setOption3} size="lg">
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              label="Large"
              placeholder="Choose an option"
            >
              {option3?.name}
            </Dropdown.Select>
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
