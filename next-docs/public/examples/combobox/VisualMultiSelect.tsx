import { useCallback, useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';

const people = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
];

const filter = (
  query: string,
  people: { id: number; label: string; value: string }[]
) => {
  return query === ''
    ? people
    : people.filter(({ value }) =>
        value
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      );
};

const Example = () => {
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  const filteredPeople1 = filter(query1, people);
  const filteredPeople2 = filter(query2, people);

  const onRemoveItem1 = useCallback(
    (index: unknown) => {
      setSelected1(selected1.filter(({ id }) => id !== index));
    },
    [selected1]
  );

  const onRemoveItem2 = useCallback(
    (index: unknown) => {
      setSelected2(selected2.filter(({ id }) => id !== index));
    },
    [selected2]
  );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full gap-4">
      <Combobox
        value={selected1}
        onChange={setSelected1}
        onQueryChange={setQuery1}
        onClear={onRemoveItem1}
        className="w-full max-w-xs"
        multiple
      >
        {({ open }) => (
          <>
            <Combobox.VisualMultiSelect
              open={open}
              label=""
              placeholder="Choose an option"
              displayValue={({ label }) => label}
            >
              <ControlsChevronDownSmall />
            </Combobox.VisualMultiSelect>
            <Combobox.Transition>
              <Combobox.Options>
                {filteredPeople1.length === 0 && query1 !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-trunks">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople1.map((person, index) => (
                    <Combobox.Option value={person} key={index}>
                      {({ selected, active }) => (
                        <MenuItem isActive={active} isSelected={selected}>
                          <MenuItem.Title>{person.label}</MenuItem.Title>
                          <MenuItem.Checkbox isSelected={selected} />
                        </MenuItem>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Combobox.Transition>
            <Combobox.Hint>
              Without tracking the state of the input field
            </Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox
        value={selected2}
        onChange={setSelected2}
        onQueryChange={setQuery2}
        onClear={onRemoveItem2}
        className="w-full max-w-xs"
        multiple
      >
        {({ open }) => (
          <>
            <Combobox.VisualMultiSelect
              open={open}
              label=""
              placeholder="Choose an option"
              displayValue={({ label }) => label}
              forceUpdate
            >
              <ControlsChevronDownSmall />
            </Combobox.VisualMultiSelect>
            <Combobox.Transition>
              <Combobox.Options>
                {filteredPeople2.length === 0 && query2 !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-trunks">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople2.map((person, index) => (
                    <Combobox.Option value={person} key={index}>
                      {({ selected, active }) => (
                        <MenuItem isActive={active} isSelected={selected}>
                          <MenuItem.Title>{person.label}</MenuItem.Title>
                          <MenuItem.Checkbox isSelected={selected} />
                        </MenuItem>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Combobox.Transition>
            <Combobox.Hint>
              When the state of the input field changes, use `forceUpdate`.
            </Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;
