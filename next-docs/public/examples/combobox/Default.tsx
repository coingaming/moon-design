import React, { useState } from 'react';
import { Combobox, MenuItem } from '@heathmont/moon-core-tw';
import { BaseOptionType } from '@heathmont/moon-core-tw';

type People = {
  name?: string;
};

const people: BaseOptionType[] = [
  { id: 1, label: 'Wade Cooper', value: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy', value: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb', value: 'Devon Webb' },
  { id: 4, label: 'Tom Cook', value: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox', value: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt', value: 'Hellen Schmidt' },
];

const countries = [
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

const Example = () => {
  const [selected, setSelected] = useState<BaseOptionType | undefined>(
    people[0]
  );

  const [query, setQuery] = useState<string>('');

  return (
    <div className="w-56 h-80">
      <Combobox value={selected} onChange={setSelected} onQueryChange={setQuery}>
        <Combobox.Trigger>
          <span className="p-2 cursor-pointer hover:text-piccolo">
            {selected?.label}
          </span>
        </Combobox.Trigger>

        <Combobox.Options>
          {people.map((person, index) => (
            <Combobox.Option value={person} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {person.label}
                </MenuItem>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Example;
