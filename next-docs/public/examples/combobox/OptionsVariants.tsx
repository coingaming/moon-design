import React, { useState } from 'react';
import { BaseOptionType, Combobox, MenuItem, Chip } from '@heathmont/moon-core-tw';
import { OtherWater, OtherLightning, OtherMoon, OtherSun } from '@heathmont/moon-icons-tw';

const options = [
  { id: 1, label: 'Option 1', value: 'Option 1', icon: <OtherLightning className="text-moon-24 text-bulma" /> },
  { id: 2, label: 'Option 2', value: 'Option 2', icon: <OtherWater className="text-moon-24 text-bulma" /> },
  { id: 3, label: 'Option 3', value: 'Option 3', icon: <OtherSun className="text-moon-24 text-bulma" /> },
  { id: 4, label: 'Option 4', value: 'Option 4', icon: <OtherMoon className="text-moon-24 text-bulma" /> },
];

const languages = [
  { id: 1, label: 'Mandarin Chinese', value: 'Mandarin Chinese' },
  { id: 2, label: 'Spanish', value: 'Spanish' },
  { id: 3, label: 'English', value: 'English' },
  { id: 4, label: 'Hindi', value: 'Hindi' },
  { id: 5, label: 'Bengali', value: 'Bengali' },
  { id: 6, label: 'Portuguese', value: 'Portuguese' },
];

const countries = [
  { id: 1, label: 'English', value: 'en', flag: '🇬🇧' },
  { id: 2, label: 'Japanese', value: 'ja', flag: '🇯🇵' },
  { id: 3, label: 'Ukrainian', value: 'ua', flag: '🇺🇦' },
  { id: 4, label: 'Portuguese', value: 'pt', flag: '🇧🇷' },
  { id: 5, label: 'Chinese', value: 'zh', flag: '🇨🇳' },
  { id: 6, label: 'Spanish', value: 'es', flag: '🇪🇸' },
  { id: 7, label: 'Korean', value: 'ko', flag: '🇰🇷' },
  { id: 8, label: 'Thai', value: 'th', flag: '🇹🇭' },
  { id: 9, label: 'German', value: 'de', flag: '🇩🇪' },
  { id: 10, label: 'Turkish', value: 'tr', flag: '🇹🇷' },
  { id: 11, label: 'Estonian', value: 'et', flag: '🇪🇪' },
  { id: 12, label: 'Swedish', value: 'sv', flag: '🇸🇪' },
  { id: 13, label: 'French', value: 'fr', flag: '🇫🇷' },
  { id: 14, label: 'Finnish', value: 'fi', flag: '🇫🇮' },
  { id: 15, label: 'Vietnamese', value: 'vi', flag: '🇻🇳' },
];

const Example = () => {
  const [option, setOption] = useState<BaseOptionType | undefined>();
  const [language, setLanguage] = useState<BaseOptionType | undefined>();
  const [selectedCountry, setSelectedCountry] = useState<BaseOptionType[] | undefined>([
    countries[0],
    countries[3],
    countries[5],
  ]);

  const [query0, setQuery0] = useState<string>('');
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  return(
    <div className="flex flex-col lg:flex-row align-middle justify-around items-center w-full gap-2">
      <Combobox value={option} onChange={setOption} onQueryChange={setQuery0}>
        <Combobox.Trigger>
          <Chip>Sort by</Chip>
        </Combobox.Trigger>
        <Combobox.Options>
          {options.map((opt, index) => (
            <Combobox.Option value={opt} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {opt.icon}
                  <MenuItem.Title>{opt.label}</MenuItem.Title>
                </MenuItem>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

      <Combobox value={language} onChange={setLanguage} onQueryChange={setQuery1}>
        <Combobox.Trigger>
          <Chip>Select language</Chip>
        </Combobox.Trigger>
        <Combobox.Options>
          {languages.map((opt, index) => (
            <Combobox.Option value={opt} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  <MenuItem.Title>{opt.label}</MenuItem.Title>
                  <MenuItem.Radio />
                </MenuItem>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

      <Combobox value={selectedCountry} onChange={setSelectedCountry} onQueryChange={setQuery2} multiple>
        <Combobox.Trigger>
          <Chip>Select countries</Chip>
        </Combobox.Trigger>
        <Combobox.Options>
          {countries.map((country, index) => (
            <Combobox.Option value={country} key={index}>
              {({ selected, active }) => (
                <MenuItem isSelected={selected} isActive={active}>
                  <MenuItem.Title> {country.label}</MenuItem.Title>
                  {country.flag}
                  <MenuItem.Checkbox />
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
