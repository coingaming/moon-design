import { useState } from 'react';
import { BaseOptionType, Combobox } from '@heathmont/moon-core-tw';

const people: BaseOptionType[] = [
  { id: 1, label: 'Durward Reynolds', value: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne', value: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch', value: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler', value: 'Benedict Kessler' },
  { id: 5, label: 'Katelyn Rohan', value: 'Katelyn Rohan' },
];

const Example = () => {
  const [selected, setSelected] = useState<BaseOptionType | undefined>(
    people[0]
  );
  const [query, setQuery] = useState<string>('');
  const displayValue = (person: BaseOptionType | null) => person?.label || '';

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.label.toLowerCase().includes(query.toLowerCase());
        });

  const isError = !filteredPeople.length;

  return (
    <div className="w-[400px]">
      <Combobox
        value={selected}
        onQueryChange={setQuery}
        onChange={setSelected}
        label="Testing label"
        placeholder="Choose your personas"
        isError={isError}
        displayValue={displayValue}
        size="xl"
        className="mt-10"
      >
        {filteredPeople.map((person) => (
          <Combobox.Option
            className="text-emerald-700"
            key={person.id}
            value={person}
          >
            {({ active, disabled, selected }) => <div>{person.label}</div>}
          </Combobox.Option>
        ))}
      </Combobox>
    </div>
  );
};

export default Example;
