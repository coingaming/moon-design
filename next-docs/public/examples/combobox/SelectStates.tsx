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
  const [selected0, setSelected0] = useState(people[2]);
  const [selected1, setSelected1] = useState(people[0]);
  const [selected2, setSelected2] = useState({});
  const [selected3, setSelected3] = useState({});

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');
  const [query3, setQuery3] = useState<string>('');

  const filteredPeople0 = filter(query0, people);
  const filteredPeople1 = filter(query1, people);
  const filteredPeople2 = filter(query2, people);
  const filteredPeople3 = filter(query3, people);

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center w-full gap-4">
      <Combobox
        value={selected0}
        onChange={setSelected0}
        onQueryChange={setQuery0}
        isError={true}
        className='w-full max-w-xs'
      >
        {({ open }) => (
          <>
            <Combobox.Select
              open={open}
              label="Error"
              placeholder="Choose an option"
              onChange={setSelected0}
              onQueryChange={setQuery0}
              displayValue={({ label }) => label }
            >
              <ControlsChevronDownSmall />
            </Combobox.Select>
            <Combobox.Transition
              open={open}
              onChange={setSelected0}
              onQueryChange={setQuery0}
            >
            <Combobox.Options className='z-10000'>
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

      <Combobox
        value={selected1}
        onChange={setSelected1}
        onQueryChange={setQuery1}disabled={true}
        className='w-full max-w-xs'
      >
        {({ open }) => (
          <>
            <Combobox.Select
              open={open}
              label="Disabled"
              placeholder="Choose an option"
              onChange={setSelected1}
              onQueryChange={setQuery1}
              displayValue={({ label }) => label }
            >
              <ControlsChevronDownSmall />
            </Combobox.Select>
            <Combobox.Transition
              open={open}
              onChange={setSelected1}
              onQueryChange={setQuery1}
            >
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

      <Combobox
        value={selected2}
        onChange={setSelected2}
        onQueryChange={setQuery2}
        className='w-full max-w-xs'
      >
        {({ open }) => (
          <>
            <Combobox.Select
              open={open}
              placeholder="Without Label and Hint message"
              onChange={setSelected2}
              onQueryChange={setQuery2}
              displayValue={({ label }) => label }
            >
              <ControlsChevronDownSmall />
            </Combobox.Select>
            <Combobox.Transition
              open={open}
              onChange={setSelected2}
              onQueryChange={setQuery2}
            >
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
                      </MenuItem>
                    )}
                  </Combobox.Option>
                )))}
              </Combobox.Options>
            </Combobox.Transition>
          </>
        )}
      </Combobox>

      <Combobox value={selected3} onChange={setSelected3} onQueryChange={setQuery3} className='w-full max-w-xs'>
        {({ open }) => (
          <>
            <Combobox.Select
              open={open}
              label="List options width"
              placeholder="Choose an option"
              onChange={setSelected3}
              onQueryChange={setQuery3}
              displayValue={({ label }) => label }
            >
              <ControlsChevronDownSmall />
            </Combobox.Select>
            <Combobox.Transition
              open={open}
              onChange={setSelected3}
              onQueryChange={setQuery3}
            >
              <Combobox.Options menuWidth='w-40' className='z-10000 rounded-moon-s-md box-border bg-gohan shadow-moon-lg py-2 px-1 my-2'>
                {filteredPeople3.length === 0 && query3 !== '' ? (
                  <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                    Nothing found.
                  </div>
                ) : (
                filteredPeople3.map((person, index) => (
                  <Combobox.Option value={person} key={index}>
                    {({ selected, active }) => (
                      <MenuItem isActive={active} isSelected={selected}>
                        <MenuItem.Title>{person.label}</MenuItem.Title>
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
