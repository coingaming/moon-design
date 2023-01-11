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
  const [option, setOption] =
    useState<{
      name: string;
    } | null>(null);
  const [option2, setOption2] =
    useState<{
      name: string;
    } | null>(null);
  const [option3, setOption3] =
    useState<{
      name: string;
    } | null>(null);
  const [option4, setOption4] =
    useState<{
      name: string;
    } | null>(null);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Dropdown value={option} onChange={setOption} size="sm">
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select
              open={open}
              label="Small"
              placeholder="Choose an option"
              data-test="data-test"
            >
              <div className="flex bg-chichi w-full h-gull">{option?.name}</div>
            </Dropdown.Select>

            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({
                    selected,
                    active,
                  }: {
                    selected: boolean;
                    active: boolean;
                  }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Radio isSelected={selected} />
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown value={option2} onChange={setOption2}>
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select
              open={open}
              label="Medium"
              placeholder="Choose an option"
              data-test="data-test"
            >
              {option2?.name}
            </Dropdown.Select>
            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({
                    selected,
                    active,
                  }: {
                    selected: boolean;
                    active: boolean;
                  }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Radio isSelected={selected} />
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown value={option3} onChange={setOption3} size="lg">
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select
              open={open}
              label="Large"
              placeholder="Choose an option"
              data-test="data-test"
            >
              {option3?.name}
            </Dropdown.Select>
            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({
                    selected,
                    active,
                  }: {
                    selected: boolean;
                    active: boolean;
                  }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Radio isSelected={selected} />
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown value={option4} onChange={setOption4} size="xl">
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select
              open={open}
              label="xLarge"
              placeholder="Choose an option"
              data-test="data-test"
              className="bg-chichi"
            >
              {option4?.name}
            </Dropdown.Select>

            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({
                    selected,
                    active,
                  }: {
                    selected: boolean;
                    active: boolean;
                  }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Radio isSelected={selected} />
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
