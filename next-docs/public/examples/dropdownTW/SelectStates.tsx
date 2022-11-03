import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected, setSelected] = useState(people[2]);
  const [selected2, setSelected2] = useState(people[0]);
  const [selected3, setSelected3] =
    useState<{
      name: string;
    } | null>(null);
  const [selected4, setSelected4] =
    useState<{
      name: string;
    } | null>(null);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center w-full gap-2">
      <Dropdown value={selected} onChange={setSelected} isError={true}>
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select open={open} label="Error">
              {selected?.name}
            </Dropdown.Select>

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
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown value={selected2} onChange={setSelected2} disabled={true}>
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select open={open} label="Disabled">
              {selected2?.name}
            </Dropdown.Select>
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
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown value={selected3} onChange={setSelected3}>
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select
              open={open}
              placeholder="Without Label and Hint message"
            >
              {selected3?.name}
            </Dropdown.Select>
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

      <Dropdown value={selected4} onChange={setSelected4}>
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select
              open={open}
              label="List options width"
              placeholder="Choose an option"
            >
              {selected4?.name}
            </Dropdown.Select>

            <Dropdown.Options menuWidth="w-40">
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
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>
    </div>
  );
};

export default Example;
