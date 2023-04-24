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
  const [selected0, setSelected0] = useState(people[4]);
  const [selected1, setSelected1] = useState(people[2]);

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');

  const filteredPeople0 = filter(query0, people);
  const filteredPeople1 = filter(query1, people);

  return (
    <div className='flex flex-col lg:flex-row lg:justify-center items-center w-full gap-4'>
      <Combobox value={selected0} onChange={setSelected0} onQueryChange={setQuery0} className='w-full max-w-xs'>
        {({ open }) => (
          <>
            <Combobox.Trigger
              open={open}
              className='min-w-[18.75rem]'
            >
              <Combobox.Input
                open={open}
                placeholder={'Choose a name...'}
                onChange={setSelected0}
                onQueryChange={setQuery0}
                displayValue={({ label }) => label}
              />
              <Combobox.Button open={open}>
                <ControlsChevronDownSmall />
              </Combobox.Button>
            </Combobox.Trigger>
            <Combobox.Transition
              open={open}
              onChange={setSelected0}
              onQueryChange={setQuery0}
            >
              <Combobox.Options className={'min-w-[18.75rem] z-10000'}>
                { filteredPeople0.length === 0 && query0 !== '' ? (
                  <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople0.map((person, index) => (
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
            </Combobox.Transition>
            <Combobox.Hint>Informative message holder (default)</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox value={selected1} onChange={setSelected1} onQueryChange={setQuery1} className='w-full max-w-xs' nullable>
        {({ open }) => (
          <>
            <Combobox.Trigger
              open={open}
              className='min-w-[18.75rem]'
            >
              <Combobox.Input
                open={open}
                placeholder={'Choose a name...'}
                onChange={setSelected1}
                onQueryChange={setQuery1}
                displayValue={(person) => person?.label }
              />
              <Combobox.Button open={open}>
                <ControlsChevronDownSmall />
              </Combobox.Button>
            </Combobox.Trigger>
            <Combobox.Transition
              open={open}
              onChange={setSelected1}
              onQueryChange={setQuery1}
            >
              <Combobox.Options className={'min-w-[18.75rem] z-10000'}>
                { filteredPeople1.length === 0 && query1 !== '' ? (
                  <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople1.map((person, index) => (
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
            </Combobox.Transition>
            <Combobox.Hint>Informative message holder (nullable)</Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;
