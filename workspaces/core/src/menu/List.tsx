import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
import Button from '../button/Button';
import MenuItem from '../menuItem/MenuItem';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const List: React.FC = () => {
  const [selected, setSelected] = useState(people[0]);
  console.log('selected', selected);
  return (
    <div className=" w-64">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button as={Fragment}>
            <Button>Options</Button>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  as="span"
                  key={personIdx}
                  value={person}
                  className={({ active }) =>
                    `${active && 'bg-bulma/[0.08] text-red-600'}`
                  }
                >
                  {({ selected }) => {
                    console.log('selected', selected);
                    return (
                      <>
                        <MenuItem isActive={selected}> {person.name}</MenuItem>
                      </>
                    );
                  }}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default List;

/**
 *           <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ControlsChevronDownSmall
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
 */
