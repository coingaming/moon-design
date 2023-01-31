import React, { useState } from 'react';
import { MenuItem } from '@heathmont/moon-core-tw';
import useThemeTW, { Brand, themes } from '../themes/useThemesTW';

const THEMES = Object.keys(themes);

const BrandSwitcher = () => {
  const { setBrand, getBrand } = useThemeTW();
  const [theme, setTheme] = useState(getBrand);
  const handleClick = (value: string) => {
    setTheme(value);
    setBrand(value as Brand);
  };
  return (
    <>
      {THEMES.map((item) => (
        <MenuItem
          role="radio"
          isSelected={theme === item}
          onClick={() => handleClick(item)}
        >
          <MenuItem.Title>{item}</MenuItem.Title>
          <MenuItem.Radio />
        </MenuItem>
      ))}
      <div className="h-px bg-beerus -mx-3" />
    </>
  );
};

export default BrandSwitcher;
