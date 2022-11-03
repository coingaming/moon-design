import React, { useState } from 'react';
import { Dropdown, MenuItem, Chip, Button } from '@heathmont/moon-core-tw';
import {
  ControlsChevronDown,
  ControlsChevronDownSmall,
} from '@heathmont/moon-icons-tw';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const Example = () => {
  const [option, setOption] = useState(null);
  const [option2, setOption2] = useState(null);
  const [option3, setOption3] = useState(null);
  return (
    <div className="flex flex-col lg:flex-row align-middle justify-around items-center w-full gap-2">
      {/** ***** Custom trigger element ***** */}
      <Dropdown value={option} onChange={setOption}>
        <Dropdown.Trigger>
          <div className="w-10 h-10 bg-gohan rounded-moon-i-md flex align-middle justify-center items-center cursor-pointer transition-colors hover:bg-piccolo/20 ">
            <ControlsChevronDown className="text-moon-24 text-trunks" />
          </div>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {people.map((person, index) => (
            <Dropdown.Option value={person} index={index} key={index}>
              {({
                selected,
                active,
              }: {
                selected: boolean;
                active: boolean;
              }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {person.name}
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>

      {/** ***** Button ***** */}
      <Dropdown value={option2} onChange={setOption2}>
        <Dropdown.Trigger>
          <Button>Select name</Button>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {people.map((person, index) => (
            <Dropdown.Option value={person} index={index} key={index}>
              {({
                selected,
                active,
              }: {
                selected: boolean;
                active: boolean;
              }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {person.name}
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>

      {/** ***** Chip ***** */}
      <Dropdown value={option3} onChange={setOption3}>
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Trigger>
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
            </Dropdown.Trigger>
            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} index={index} key={index}>
                  {({
                    selected,
                    active,
                  }: {
                    selected: boolean;
                    active: boolean;
                  }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      {person.name}
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
          </>
        )}
      </Dropdown>
    </div>
  );
};

export default Example;
