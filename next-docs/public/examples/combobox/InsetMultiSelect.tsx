import React, { useCallback, useState } from 'react';
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

const filter = (query: string, people: ({} & {label: string, value: string})[]) => {
  return query === ''
    ? people
    : people.filter(({ value }) =>
      value
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    );
}

const Example = () => {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState<string>('');

  const filteredPeople = filter(query, people);

  return (
    <div className="flex w-full max-w-xs items-center">
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
              label='Select label'
              counter={selected.length}
              placeholder='Choose an option'
              onChange={setSelected}
              onQueryChange={setQuery}
              displayValue={({ label }) => label}
            >
              <ControlsChevronDownSmall />
            </Combobox.InsetMultiSelect>
            <Combobox.Transition
              onQueryChange={setQuery}
            >
              <Combobox.Options>
                {filteredPeople.length === 0 && query !== '' ? (
                  <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person, index) => (
                    <Combobox.Option value={person} key={index}>
                      {({ selected, active }) => (
                        <MenuItem isActive={active} isSelected={selected}>
                        <MenuItem.Title>{person.label}</MenuItem.Title>
                        <MenuItem.Checkbox isSelected={selected} />
                      </MenuItem>
                      )}
                    </Combobox.Option>
                )))}
              </Combobox.Options>
            </Combobox.Transition>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;
