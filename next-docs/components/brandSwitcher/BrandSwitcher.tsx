import React, { useCallback, useState } from 'react';
import { MenuItem } from '@heathmont/moon-core-tw';
import useTheme, { Brand, themes } from '../themes/useThemes';

const THEMES = Object.keys(themes);

const BrandSwitcher = () => {
  const { setBrand, getBrand } = useTheme();
  const [theme, setTheme] = useState(getBrand);
  const handleClick = (value: string) => {
    setTheme(value);
    setBrand(value as Brand);
  };
  return (
    <>
      {THEMES.map((item, index) => (
        <MenuItem
          key={index}
          role="radio"
          isSelected={theme === item}
          onClick={useCallback(() => handleClick(item), [item])}
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
