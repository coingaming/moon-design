import React, { useEffect, useState } from 'react';
import { Dropdown, MenuItem, Button, Chip } from '@heathmont/moon-core-tw';
import {
  OtherWater,
  OtherLightning,
  OtherMoon,
  OtherSun,
} from '@heathmont/moon-icons-tw';

const options = [
  {
    name: 'Option 1',
    icon: <OtherLightning className="text-moon-24 text-bulma" />,
  },
  {
    name: 'Option 2',
    icon: <OtherWater className="text-moon-24 text-bulma" />,
  },
  { name: 'Option 3', icon: <OtherSun className="text-moon-24 text-bulma" /> },
  { name: 'Option 4', icon: <OtherMoon className="text-moon-24 text-bulma" /> },
];

const languages = [
  { name: 'Mandarin Chinese' },
  { name: 'Spanish' },
  { name: 'English' },
  { name: 'Hindi' },
  { name: 'Bengali' },
  { name: 'Portuguese' },
];

const countries = [
  { name: 'Australia' },
  { name: 'Canada' },
  { name: 'China' },
  { name: 'Germany' },
  { name: 'Hungary' },
  { name: 'Japan' },
];

const Example = () => {
  const [option, setOption] = useState(null);
  const [language, setLanguage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState([
    countries[0],
    countries[3],
  ]);

  useEffect(() => {
    console.log('selected: ', selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="flex flex-col lg:flex-row align-middle justify-around items-center w-full gap-2">
      <Dropdown value={option} onChange={setOption}>
        <Dropdown.Trigger>
          <Chip>Sort by</Chip>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {options.map((opt, index) => (
            <Dropdown.Option value={opt} key={index}>
              {({
                selected,
                active,
              }: {
                selected: boolean;
                active: boolean;
              }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {opt.icon}
                  <MenuItem.Title>{opt.name}</MenuItem.Title>
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>

      <Dropdown value={language} onChange={setLanguage}>
        <Dropdown.Trigger>
          <Chip>Select language</Chip>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {languages.map((opt, index) => (
            <Dropdown.Option value={opt} key={index}>
              {({
                selected,
                active,
              }: {
                selected: boolean;
                active: boolean;
              }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  <MenuItem.Title>{opt.name}</MenuItem.Title>
                  <MenuItem.Radio />
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>

      <Dropdown value={selectedCountry} onChange={setSelectedCountry} multiple>
        <Dropdown.Trigger>
          <Chip>Select countries</Chip>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {countries.map((country, index) => (
            <Dropdown.Option value={country} key={index}>
              {({
                selected,
                active,
              }: {
                selected: boolean;
                active: boolean;
              }) => (
                <MenuItem isSelected={selected} isActive={active}>
                  <MenuItem.Title> {country.name}</MenuItem.Title>
                  <MenuItem.Checkbox />
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    </div>
  );
};

export default Example;
