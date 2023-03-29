import React, { useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';
import { BaseOptionType } from '@heathmont/moon-core-tw';

type People = {
  name?: string;
};

const people: BaseOptionType[] = [
  { id: 1, label: 'Durward Reynolds', value: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne', value: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch', value: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler', value: 'Benedict Kessler' },
  { id: 5, label: 'Katelyn Rohan', value: 'Katelyn Rohan' },
];

const Example = () => {
  const [selected, setSelected] = useState<BaseOptionType | undefined>(
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
