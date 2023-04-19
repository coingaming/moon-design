import React, { useCallback, useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';

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
  const [selected0, setSelected0] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  const filteredPeople0 = filter(query0, people);
  const filteredPeople1 = filter(query1, people);
  const filteredPeople2 = filter(query2, people);

  const selectClass = 'flex flex-nowrap min-w-[18.75rem] align-middle';
  const inputClass = 'flex flex-grow';
  const buttonClass = 'absolute text-bulma transition-transform flex-grow-0 flex-shrink-0 self-center';

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Combobox
        value={selected0}
        onChange={setSelected0}
        onClear={useCallback(() => setSelected0([]), [setSelected0])}
        onQueryChange={setQuery0}
        size="sm"
        multiple
      >
        <Combobox.MultiSelect
          label="Small"
          placeholder="Choose an option"
          counter={selected0.length}
          onChange={setSelected0}
          onQueryChange={setQuery0}
          className={selectClass}
          inputClassName={`${inputClass} pl-9 pr-7`}
          buttonClassName={buttonClass}
        />
        <Combobox.Options>
          {filteredPeople0.length === 0 && query0 !== '' ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                Nothing found.
              </div>
            ) : (filteredPeople0.map((person, index) => (
            <Combobox.Option value={person} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  <MenuItem.Title>{person.label}</MenuItem.Title>
                  <MenuItem.Checkbox isSelected={selected} />
                </MenuItem>
              )}
            </Combobox.Option>
          )))}
        </Combobox.Options>
        <Combobox.Hint>Informative message holder</Combobox.Hint>
      </Combobox>

      <Combobox
        value={selected1}
        onChange={setSelected1}
        onClear={useCallback(() => setSelected1([]), [setSelected1])}
        onQueryChange={setQuery1}
        multiple
      >
        {({ open }) => (
          <>
            <Combobox.MultiSelect
              label="Medium"
              placeholder="Choose an option"
              data-test="data-test"
              counter={selected1.length}
              onChange={setSelected1}
              onQueryChange={setQuery1}
              className={selectClass}
              inputClassName={`${inputClass} pl-11 pr-8`}
              buttonClassName={buttonClass}
            />
            <Combobox.Options>
              {filteredPeople1.length === 0 && query1 !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
                ) : (filteredPeople1.map((person, index) => (
                  <Combobox.Option value={person} key={index}>
                    {({ selected, active }) => (
                      <MenuItem isActive={active} isSelected={selected}>
                        <MenuItem.Title>{person.label}</MenuItem.Title>
                        <MenuItem.Checkbox isSelected={selected} />
                      </MenuItem>
                    )}
                  </Combobox.Option>
                )))}
             </Combobox.Options>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>

      <Combobox
        value={selected2}
        onChange={setSelected2}
        onClear={useCallback(() => setSelected2([]), [setSelected2])}
        onQueryChange={setQuery2}
        size="lg"
        multiple
      >
        {({ open }) => (
          <>
            <Combobox.MultiSelect
              label="Large"
              placeholder="Choose an option"
              counter={selected2.length}
              onChange={setSelected2}
              onQueryChange={setQuery2}
              className={selectClass}
              inputClassName={`${inputClass} pl-11 pr-9`}
              buttonClassName={buttonClass}
            />
            <Combobox.Options>
              {filteredPeople2.length === 0 && query2 !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
                ) : (filteredPeople2.map((person, index) => (
                  <Combobox.Option value={person} key={index}>
                    {({ selected, active }) => (
                      <MenuItem isActive={active} isSelected={selected}>
                        <MenuItem.Title>{person.label}</MenuItem.Title>
                        <MenuItem.Checkbox isSelected={selected} />
                      </MenuItem>
                    )}
                  </Combobox.Option>
               )))}
            </Combobox.Options>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;
