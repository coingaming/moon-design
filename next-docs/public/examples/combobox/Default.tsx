import React, { useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons';
import { IComboboxFilterProps } from '@heathmont/moon-core-tw/lib/combobox/private/types/FilterProps';

const people = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
] as IComboboxFilterProps[];

const Example = () => {
  const [selected, setSelected] = useState(
    people[4]
  );

  const [query, setQuery] = useState<string>('');

  const filteredPeople = Combobox.Filter({ query, data: people });

  const triggerCSS = 'flex flex-nowrap align-middle';
  const inputCSS = 'flex flex-grow pr-8';
  const buttonCSS = 'absolute text-bulma transition-transform flex-grow-0 flex-shrink-0 self-center';

  return (
    <div className='w-56 h-80'>
      <Combobox value={selected} onChange={setSelected} onQueryChange={setQuery}>
        <Combobox.Trigger
          placeholder={'Choose a name...'}
          onChange={setSelected}
          onQueryChange={setQuery}
          displayValue={({ label }) => label }
          className={`${triggerCSS}, ${inputCSS}, ${buttonCSS}`}
        >
          <ControlsChevronDownSmall />
        </Combobox.Trigger>

        <Combobox.Options>
          { filteredPeople.length === 0 && query !== '' ? (
            <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
              Nothing found.
            </div>
          ) : (
            filteredPeople.map((person, index) => (
              <Combobox.Option value={person} key={index}>
                {({ selected, active }) => (
                  <div>
                    <MenuItem isActive={active} isSelected={selected}>
                      {person.label}
                    </MenuItem>
                  </div>
                )}
              </Combobox.Option>
          ))) }
        </Combobox.Options>
        <Combobox.Hint>Informative message holder</Combobox.Hint>
      </Combobox>
    </div>
  );
};

export default Example;
