import { BaseOptionType, Combobox } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const people: BaseOptionType[] = [
  { id: 1, label: 'Durward Reynolds', value: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne', value: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch', value: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler', value: 'Benedict Kessler' },
  { id: 5, label: 'Katelyn Rohan', value: 'Katelyn Rohan' },
];

const useCombobox = () => {
  const [selected, setSelected] = useState<BaseOptionType | undefined>(
    people[0]
  );
  const displayValue = (person: BaseOptionType | null) => person?.label || '';
  const [query, setQuery] = useState<string>('');
  const list =
    query === ''
      ? people
      : people.filter((person) => {
          return person.label.toLowerCase().includes(query.toLowerCase());
        });

  return {
    displayValue,
    selected,
    setSelected,
    setQuery,
    list,
  };
};

const Small = () => {
  const { list, displayValue, selected, setSelected, setQuery } = useCombobox();
  return (
    <Combobox
      onQueryChange={setQuery}
      onChange={setSelected}
      value={selected}
      size="sm"
      label="Small"
      placeholder="Choose an option"
      displayValue={displayValue}
    >
      {list.map((person) => (
        <Combobox.Option key={person.id} value={person}>
          <div>{person.label}</div>
        </Combobox.Option>
      ))}
    </Combobox>
  );
};

const Medium = () => {
  const { list, displayValue, selected, setSelected, setQuery } = useCombobox();
  return (
    <Combobox
      onQueryChange={setQuery}
      onChange={setSelected}
      value={selected}
      size="md"
      label="Medium"
      placeholder="Choose an option"
      displayValue={displayValue}
    >
      {list.map((person) => (
        <Combobox.Option key={person.id} value={person}>
          <div>{person.label}</div>
        </Combobox.Option>
      ))}
    </Combobox>
  );
};

const Large = () => {
  const { list, displayValue, selected, setSelected, setQuery } = useCombobox();
  return (
    <Combobox
      onQueryChange={setQuery}
      onChange={setSelected}
      value={selected}
      size="lg"
      label="Large"
      placeholder="Choose an option"
      displayValue={displayValue}
    >
      {list.map((person) => (
        <Combobox.Option key={person.id} value={person}>
          <div>{person.label}</div>
        </Combobox.Option>
      ))}
    </Combobox>
  );
};

const XLarge = () => {
  const { list, displayValue, selected, setSelected, setQuery } = useCombobox();
  return (
    <Combobox
      onQueryChange={setQuery}
      onChange={setSelected}
      value={selected}
      size="xl"
      label="xLarge"
      placeholder="Choose an option"
      displayValue={displayValue}
    >
      {list.map((person) => (
        <Combobox.Option key={person.id} value={person}>
          <div>{person.label}</div>
        </Combobox.Option>
      ))}
    </Combobox>
  );
};

const Example = () => {
  return (
    <div className="flex flex-col items-end justify-around w-full gap-2 lg:flex-row">
      <Small />
      <Medium />
      <Large />
      <XLarge />
    </div>
  );
};

export default Example;
