import React, { useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';

const people = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected, setSelected] = useState(
    people[0]
  );

  const [query, setQuery] = useState<string>('');

  return (
    <div className="w-56 h-80">
      <Combobox value={selected} onChange={setSelected} onQueryChange={setQuery}>
        <Combobox.Trigger>
          <span className="p-2 cursor-pointer hover:text-piccolo">
            {selected?.label}
          </span>
        </Combobox.Trigger>

        <Combobox.Options>
          {people.map((person, index) => (
            <Combobox.Option value={person} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {person.label}
                </MenuItem>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Example;
