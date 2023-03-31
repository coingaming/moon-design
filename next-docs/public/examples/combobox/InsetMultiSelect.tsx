import React, { useCallback, useState } from 'react';
import { BaseOptionType, Combobox, MenuItem } from '@heathmont/moon-core-tw';

const people: BaseOptionType[] = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected, setSelected] = useState<BaseOptionType[]>([]);

  const [query, setQuery] = useState<string>('');

  return (
    <div className="flex w-full max-w-sm items-center">
      <Combobox
        value={selected}
        onChange={setSelected}
        onClear={useCallback(() => setSelected([]), [setSelected])}
        onQueryChange={setQuery}
        multiple
      >
        {({ open }) => (
          <>
            <Combobox.InsetMultiSelect
              open={open}
              label="Select label"
              placeholder="Choose an option"
              counter={selected.length}
            />
            <Combobox.Options>
              {people.map((person, index) => (
                <Combobox.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.label}</MenuItem.Title>
                      <MenuItem.Checkbox isSelected={selected} />
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
