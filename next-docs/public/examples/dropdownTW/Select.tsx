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
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [selected3, setSelected3] = useState(null);
  const [selected4, setSelected4] = useState(null);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Dropdown
        value={selected}
        onChange={setSelected}
        size="sm"
        disabled={true}
      >
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              value={selected?.name}
              label="Small"
              placeholder="Choose an option"
              data-test="data-test"
            />

            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} index={index}>
                  {({ selected, active }) => (
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

      <Dropdown value={selected2} onChange={setSelected2} disabled={true}>
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              value={selected2?.name}
              //   label="Medium"
              placeholder="Choose an option"
              data-test="data-test"
            />
            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} index={index}>
                  {({ selected, active }) => (
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

      <Dropdown value={selected3} onChange={setSelected3} isError={true}>
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              value={selected3?.name}
              label="Large"
              placeholder="Choose an option"
              data-test="data-test"
            />
            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} index={index}>
                  {({ selected, active }) => (
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

      <Dropdown
        value={selected4}
        onChange={setSelected4}
        size="xl"
        disabled={true}
      >
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              value={selected4?.name}
              label="xLarge"
              placeholder="Choose an option"
              data-test="data-test"
            />

            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} index={index}>
                  {({ selected, active }) => (
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
