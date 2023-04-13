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
  const [selected0, setSelected0] = useState();
  const [selected1, setSelected1] = useState();
  const [selected2, setSelected2] = useState();

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  const filteredPeople0 = Combobox.Filter({ query: query0, data: people });

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Combobox value={selected0} onChange={setSelected0} onQueryChange={setQuery0} size="sm">
        <Combobox.Select
          label="Small"
          placeholder="Choose an option"
        >
          {selected0 ? selected0['label'] : selected0}
        </Combobox.Select>

        <Combobox.Options>
          {filteredPeople0.map((person, index) => (
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
      </Combobox>

      <Combobox value={selected1} onChange={setSelected1} onQueryChange={setQuery1}>
        {({ open }) => (
          <>
            {/*<Combobox.Select
              open={open}
              label="Medium"
              placeholder="Choose an option"
            >
              {selected1 ? selected1['label'] : selected1}
            </Combobox.Select>
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
                  </Combobox.Options>*/}
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox value={selected2} onChange={setSelected2} onQueryChange={setQuery2} size="lg">
        {({ open }) => (
          <>
            {/*<Combobox.Select
              open={open}
              label="Large"
              placeholder="Choose an option"
            >
              {selected2 ? selected2['label'] : selected2}
            </Combobox.Select>
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
                  </Combobox.Options>*/}
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;
