import { Combobox, MenuItem } from "@heathmont/moon-core-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import { useCallback, useState } from "react";

const books = [
  { id: 1, label: 'To Kill a Mockingbird', value: 'To Kill a Mockingbird' },
  { id: 2, label: 'The Catcher in the Rye', value: 'The Catcher in the Rye' },
  { id: 3, label: 'The Spy', value: 'The Spy' },
  { id: 4, label: 'The Pit and the Pendulum', value: 'The Pit and the Pendulum' },
  { id: 5, label: 'Dandelion Wine', value: 'Dandelion Wine' },
  { id: 6, label: 'The Old Man and the Sea', value: 'The Old Man and the Sea' },
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
  const [selected0, setSelected0] = useState([]);
  const [selected1, setSelected1] = useState({});

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');

  const filteredPeople0 = filter(query0, books);
  const filteredPeople1 = filter(query1, books);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full gap-4">
      <Combobox
        value={selected0}
        onChange={setSelected0}
        onQueryChange={setQuery0}
        onClear={useCallback(() => setSelected0([]), [setSelected0])}
        className="w-full max-w-xs"
        multiple
      >
        {({ open }) => (
          <>
            <Combobox.MultiSelect
              open={open}
              counter={selected0.length}
              placeholder="Choose an option"
              displayValue={({ label }) => label}
              onClose={console.log}
            >
              <ControlsChevronDownSmall />
            </Combobox.MultiSelect>
            <Combobox.Transition>
              <Combobox.Options
                menuWidth="w-48"
                className="z-5 rounded-moon-s-md box-border bg-goku shadow-moon-lg py-2 px-1 my-2"
              >
                {filteredPeople0.length === 0 && query0 !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-trunks">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople0.map((person, index) => (
                    <Combobox.Option value={person} key={index}>
                      {({ selected, active }) => (
                        <MenuItem isActive={active} isSelected={selected}>
                          <MenuItem.Title>{person.label}</MenuItem.Title>
                          <MenuItem.Checkbox isSelected={selected} className="relative mx-1 top-auto"/>
                        </MenuItem>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Combobox.Transition>
            <Combobox.Hint>Example with checkboxes</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox
          value={selected1}
          onChange={setSelected1}
          onQueryChange={setQuery1}
          className="w-full max-w-xs"
        >
          {({ open }) => (
            <>
              <Combobox.Select
                open={open}
                placeholder="Choose an option"
                displayValue={({ label }) => label}
              >
                <ControlsChevronDownSmall />
              </Combobox.Select>
              <Combobox.Transition>
                <Combobox.Options
                  menuWidth="w-48"
                  className="z-5 rounded-moon-s-md box-border bg-goku shadow-moon-lg py-2 px-1 my-2"
                >
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
                            <MenuItem.Radio isSelected={selected} className="mx-1" />
                          </MenuItem>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Combobox.Transition>
              <Combobox.Hint>Example with radio buttons</Combobox.Hint>
            </>
          )}
        </Combobox>
    </div>
  );
}

export default Example;
