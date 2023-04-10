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
  const [selected0, setSelected0] = useState(people[2]);
  const [selected1, setSelected1] = useState(people[0]);
  const [selected2, setSelected2] = useState(null);
  const [selected3, setSelected3] = useState(null);

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');
  const [query3, setQuery3] = useState<string>('');

  return (
    <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-2">
      <Combobox value={selected0} onChange={setSelected0} onQueryChange={setQuery0} isError={true}>
        {({ open }) => (
          <>
            {/*<Combobox.InsetSelect open={open} label="Error">
              {selected0?.label}
            </Combobox.InsetSelect>

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
            </Combobox.Options>*/}
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox value={selected1} onChange={setSelected1} onQueryChange={setQuery1} disabled={true}>
        {({ open }) => (
          <>
            {/*<Combobox.InsetSelect open={open} label="Disabled">
              {selected1?.label}
            </Combobox.InsetSelect>
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
                  </Combobox.Options>*/}
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox value={selected2} onChange={setSelected2} onQueryChange={setQuery2}>
        {({ open }) => (
          <>
            {/*<Combobox.InsetSelect
              open={open}
              placeholder="Without Label and Hint message"
            >
              {selected2 ? selected2['label'] : selected2}
            </Combobox.InsetSelect>
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
                  </Combobox.Options>*/}
          </>
        )}
      </Combobox>

      <Combobox value={selected3} onChange={setSelected3} onQueryChange={setQuery3}>
        {({ open }) => (
          <>
            {/*<Combobox.InsetSelect
              open={open}
              label="List options width"
              placeholder="Choose an option"
            >
              {selected3 ? selected3['label'] : selected3}
            </Combobox.InsetSelect>
            <Combobox.Options menuWidth="w-40">
              {people.map((person, index) => (
                <Combobox.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      {person.label}
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
