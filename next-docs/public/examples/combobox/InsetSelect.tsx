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
  const [option, setOption] = useState(null);

  const [query, setQuery] = useState<string>('');

  return (
    <div className="flex w-full max-w-sm items-center z-0">
      <Combobox value={option} onChange={setOption} onQueryChange={setQuery}>
        {({ open }) => (
          <>
            <Combobox.InsetSelect
              open={open}
              label="Select label"
              placeholder="Choose an option"
            >
              {option ? option['label'] : option}
            </Combobox.InsetSelect>

            <Combobox.Options>
              {people.map((person, index) => (
                <Combobox.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.label}</MenuItem.Title>
                      <MenuItem.Radio isSelected={selected} />
                    </MenuItem>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;
