import React, { useState } from 'react';
import { BaseOptionType, Combobox, MenuItem } from '@heathmont/moon-core-tw';

type People = {
  name?: string;
};

const people: BaseOptionType[] = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected0, setSelected0] = useState<BaseOptionType | undefined>();
  const [selected1, setSelected1] = useState<BaseOptionType | undefined>();
  const [selected2, setSelected2] = useState<BaseOptionType | undefined>();

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Combobox value={selected0} onChange={setSelected0} onQueryChange={setQuery0} size="sm">
        {({ open }) => (
          <>
            <Combobox.Select
              open={open}
              label="Small"
              placeholder="Choose an option"
            >
              {selected0?.label}
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
            </Combobox.Options>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox value={selected1} onChange={setSelected1} onQueryChange={setQuery1}>
        {({ open }) => (
          <>
            <Combobox.Select
              open={open}
              label="Medium"
              placeholder="Choose an option"
            >
              {selected1?.label}
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
            </Combobox.Options>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox value={selected2} onChange={setSelected2} onQueryChange={setQuery2} size="lg">
        {({ open }) => (
          <>
            <Combobox.Select
              open={open}
              label="Large"
              placeholder="Choose an option"
            >
              {selected2?.label}
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
            </Combobox.Options>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;