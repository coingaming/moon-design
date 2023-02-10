import { BaseOptionType, Combobox } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const options = [
  { label: 'English', value: 'en', flag: '🇬🇧' },
  { label: 'Japanese', value: 'ja', flag: '🇯🇵' },
  { label: 'Ukrainian', value: 'ua', flag: '🇺🇦' },
  { label: 'Portuguese', value: 'pt', flag: '🇧🇷' },
  { label: 'Chinese', value: 'zh', flag: '🇨🇳' },
  { label: 'Spanish', value: 'es', flag: '🇪🇸' },
  { label: 'Korean', value: 'ko', flag: '🇰🇷' },
  { label: 'Thai', value: 'th', flag: '🇹🇭' },
  { label: 'German', value: 'de', flag: '🇩🇪' },
  { label: 'Turkish', value: 'tr', flag: '🇹🇷' },
  { label: 'Estonian', value: 'et', flag: '🇪🇪' },
  { label: 'Swedish', value: 'sv', flag: '🇸🇪' },
  { label: 'French', value: 'fr', flag: '🇫🇷' },
  { label: 'Finnish', value: 'fi', flag: '🇫🇮' },
  { label: 'Vietnamese', value: 'vi', flag: '🇻🇳' },
  { label: 'Not set', value: 'default', flag: '🏳️' },
];

const useCombobox = () => {
  const [selected, setSelected] = useState<BaseOptionType | undefined>(
    options[0]
  );
  const displayValue = (person: BaseOptionType | null) => person?.label || '';
  const [query, setQuery] = useState<string>('');
  const list =
    query === ''
      ? options
      : options.filter((person) => {
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
      {list.map((option) => (
        <Combobox.Option key={option.value} value={option}>
          {({ active, disabled, selected }) => (
            <div className="flex">
              <div className="me-4">{option.flag}</div>
              <div className={selected ? 'font-bold' : ''}>{option.label}</div>
            </div>
          )}
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
      {list.map((option) => (
        <Combobox.Option key={option.value} value={option}>
          {({ active, disabled, selected }) => (
            <div className="flex ">
              <div className="me-4">{option.flag}</div>
              <div className={selected ? 'font-bold' : ''}>{option.label}</div>
            </div>
          )}
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
      {list.map((option) => (
        <Combobox.Option key={option.value} value={option}>
          {({ active, disabled, selected }) => (
            <div className="flex ">
              <div className="me-4">{option.flag}</div>
              <div className={selected ? 'font-bold' : ''}>{option.label}</div>
            </div>
          )}
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
      {list.map((option) => (
        <Combobox.Option key={option.value} value={option}>
          {({ active, disabled, selected }) => (
            <div className="flex ">
              <div className="me-4">{option.flag}</div>
              <div className={selected ? 'font-bold' : ''}>{option.label}</div>
            </div>
          )}
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
