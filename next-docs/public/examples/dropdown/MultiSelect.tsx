import React, { useCallback, useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

type People = {
  name: string;
};

const peoples = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected, setSelected] = useState<People[]>([]);
  const [selected2, setSelected2] = useState<People[]>([]);
  const [selected3, setSelected3] = useState<People[]>([]);

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Dropdown
        value={selected}
        onChange={setSelected}
        onClear={useCallback(() => setSelected([]), [setSelected])}
        size="sm"
        multiple
      >
        {({ open }) => (
          <>
            <Dropdown.MultiSelect
              open={open}
              label="Small"
              placeholder="Choose an option"
              counter={selected.length}
            />
            <Dropdown.Options>
              {peoples.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Checkbox isSelected={selected} />
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
        value={selected2}
        onChange={setSelected2}
        onClear={useCallback(() => setSelected2([]), [setSelected2])}
        multiple
      >
        {({ open }) => (
          <>
            <Dropdown.MultiSelect
              open={open}
              label="Medium"
              placeholder="Choose an option"
              data-test="data-test"
              counter={selected2.length}
            />
            <Dropdown.Options>
              {peoples.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Checkbox isSelected={selected} />
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
        size="lg"
        value={selected3}
        onChange={setSelected3}
        onClear={useCallback(() => setSelected3([]), [setSelected3])}
        multiple
      >
        {({ open }) => (
          <>
            <Dropdown.MultiSelect
              open={open}
              label="Large"
              placeholder="Choose an option"
              counter={selected3.length}
            />
            <Dropdown.Options>
              {peoples.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Checkbox isSelected={selected} />
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
