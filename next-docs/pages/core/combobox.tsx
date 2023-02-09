import { useState } from 'react';
import { Combobox } from '@heathmont/moon-core-tw';

type Person = { id: number; name: string };

const people: Person[] = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

const Example = () => {
  const [selected, setSelected] = useState<Person | null>(people[0]);
  const [query, setQuery] = useState<string>('');
  const displayValue = (person: Person | null) => person?.name || '';

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const isError = !filteredPeople.length;

  console.log('Current: ', selected);

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
      >
        {filteredPeople.map((person) => (
          <Combobox.Option key={person.name} value={person}>
            {({ active, disabled, selected }) => <div>{person.name}</div>}
          </Combobox.Option>
        ))}
      </Combobox>
    </div>
  );
};

export default Example;