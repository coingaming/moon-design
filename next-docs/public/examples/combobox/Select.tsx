import React, { useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';
import { IComboboxFilterProps } from '@heathmont/moon-core-tw/lib/combobox/private/types/FilterProps';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons';

const people = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
] as IComboboxFilterProps[];

const Example = () => {
  const [selected0, setSelected0] = useState(people[0]);
  const [selected1, setSelected1] = useState(people[0]);
  const [selected2, setSelected2] = useState(people[0]);

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  const filteredPeople0 = Combobox.Filter({ query: query0, data: people });
  const filteredPeople1 = Combobox.Filter({ query: query1, data: people });
  const filteredPeople2 = Combobox.Filter({ query: query2, data: people });

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Combobox value={selected0} onChange={setSelected0} onQueryChange={setQuery0} size="sm">
        <Combobox.Select
          label="Small"
          placeholder="Choose an option"
          onChange={setSelected0}
          onQueryChange={setQuery0}
          displayValue={({ label }) => label }
        >
          {undefined}
        </Combobox.Select>

        <Combobox.Options>
          {filteredPeople0.length === 0 && query0 !== '' ? (
            <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
              Nothing found.
            </div>
          ) : (
            filteredPeople0.map((person, index) => (
              <Combobox.Option value={person} key={index}>
                {({ selected, active }) => (
                  <MenuItem isActive={active} isSelected={selected}>
                    <MenuItem.Title>{person.label}</MenuItem.Title>
                    <MenuItem.Radio isSelected={selected} />
                  </MenuItem>
                )}
              </Combobox.Option>
          )))}
        </Combobox.Options>
        <Combobox.Hint>Informative message holder</Combobox.Hint>
      </Combobox>

      <Combobox value={selected1} onChange={setSelected1} onQueryChange={setQuery1}>
        <Combobox.Select
          label="Medium"
          placeholder="Choose an option"
          onChange={setSelected1}
          onQueryChange={setQuery1}
          displayValue={({ label }) => label }
        >
          {undefined}
        </Combobox.Select>
        <Combobox.Options>
        {filteredPeople1.length === 0 && query1 !== '' ? (
            <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
              Nothing found.
            </div>
          ) : (
          filteredPeople1.map((person, index) => (
            <Combobox.Option value={person} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  <MenuItem.Title>{person.label}</MenuItem.Title>
                  <MenuItem.Radio isSelected={selected} />
                </MenuItem>
              )}
            </Combobox.Option>
          )))}
        </Combobox.Options>
        <Combobox.Hint>Informative message holder</Combobox.Hint>
      </Combobox>

      <Combobox value={selected2} onChange={setSelected2} onQueryChange={setQuery2} size="lg">
      <Combobox.Select
          label="Large"
          placeholder="Choose an option"
          onChange={setSelected2}
          onQueryChange={setQuery2}
          displayValue={({ label }) => label }
        >
          {undefined}
        </Combobox.Select>
        <Combobox.Options>
        {filteredPeople2.length === 0 && query2 !== '' ? (
            <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
              Nothing found.
            </div>
          ) : (
          filteredPeople2.map((person, index) => (
            <Combobox.Option value={person} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  <MenuItem.Title>{person.label}</MenuItem.Title>
                  <MenuItem.Radio isSelected={selected} />
                </MenuItem>
              )}
            </Combobox.Option>
          )))}
        </Combobox.Options>
        <Combobox.Hint>Informative message holder</Combobox.Hint>
      </Combobox>
    </div>
  );
};

export default Example;
