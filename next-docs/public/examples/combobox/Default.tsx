import React, { useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons';

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
    people[4]
  );

  const [query, setQuery] = useState<string>('');

  const filteredPeople = query === ''
    ? people
    : people.filter(({ value }) =>
        value
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    );

  return (
    <div className='w-56 h-40'>
      <Combobox value={selected} onChange={setSelected} onQueryChange={setQuery}>
        <Combobox.Trigger
          placeholder={'Choose a name...'}
          onChange={setSelected}
          onQueryChange={setQuery}
          displayValue={({ label }) => label }
          className={'flex flex-nowrap min-w-[18.75rem] align-middle'}
          inputClassName={'flex flex-grow pr-8'}
          buttonClassName={'absolute text-bulma transition-transform flex-grow-0 flex-shrink-0 self-center'}
        >
          <ControlsChevronDownSmall />
        </Combobox.Trigger>

        <Combobox.Options className={'min-w-[18.75rem]'}>
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
