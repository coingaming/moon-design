import React, { useState } from 'react';
import { Combobox, MenuItem, Button, Chip } from '@heathmont/moon-core-tw';
import { ControlsChevronDown, ControlsChevronDownSmall } from '@heathmont/moon-icons';

const people = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected0, setSelected0] = useState();
  const [selected1, setSelected1] = useState();
  const [selected2, setSelected2] = useState();

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  return (
    <div className="flex flex-col lg:flex-row align-middle justify-around items-center w-full gap-2">
      {/** ***** Custom trigger element ***** */}
      <Combobox value={selected0} onChange={setSelected0} onQueryChange={setQuery0}>
        {/*<Combobox.Trigger>
          <div className="w-10 h-10 bg-gohan rounded-moon-i-md flex align-middle justify-center items-center cursor-pointer transition-colors hover:bg-piccolo/20 ">
            <ControlsChevronDown className="text-moon-24 text-trunks" />
          </div>
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
              </Combobox.Options>*/}
      </Combobox>

      {/** ***** Button ***** */}
      <Combobox value={selected1} onChange={setSelected1} onQueryChange={setQuery1}>
        {/*<Combobox.Trigger>
          <Button>Select name</Button>
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
              </Combobox.Options>*/}
      </Combobox>

      {/** ***** Chip ***** */}
      <Combobox value={selected2} onChange={setSelected2} onQueryChange={setQuery2}>
        {/*({ open }) => (
          <>
            <Combobox.Trigger>
              <Chip
                iconRight={
                  <ControlsChevronDownSmall
                    className={`text-moon-24 text-trunks ${
                      open && 'rotate-180'
                    }`}
                  />
                }
              >
                Select name
              </Chip>
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
          </>
                  )*/}
      </Combobox>
    </div>
  );
};

export default Example;
