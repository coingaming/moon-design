// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import { useTheme } from '@heathmont/moon-themes';

import Menu from './private/Menu';
import DropdownIndicator from './private/DropdownIndicator';
import Control from './private/Control';
import ValueContainer from './private/ValueContainer';
import SingleValue from './private/SingleValue';
import MultiValue from './private/MultiValue';
import MultiValueRemove from './private/MultiValueRemove';
import MultiValueContainer from './private/MultiValueContainer';
import ClearIndicator from './private/ClearIndicator';
import IndicatorSeparator from './private/IndicatorSeparator';
import SelectContainer from './private/SelectContainer';
import Placeholder from './private/Placeholder';

import CustomStyles from './styles/CustomStyles';

export type BaseOptionType = {
  label: string;
  value: string | number;
};

// type DataCustomProps = {
//   isCustomControl: boolean;
//   menuHeader: React.ReactNode;
//   menuFooter: React.ReactNode;
//   menuWidth: number | undefined;
//   label: string;
//   theme: Theme;
//   leftSlot: React.ReactNode;
// };

type SelectProps<T> = {
  isCustomControl?: boolean;
  menuHeader?: React.ReactNode;
  menuFooter?: React.ReactNode;
  menuWidth?: number;
  label: string;
  leftSlot?: React.ReactNode;
  hintSlot?: JSX.Element | string;
  placeholderSlot?: JSX.Element | string;
  size?: 'large' | 'xLarge';
  numberVisibleItems?: number;
} & ReactSelectProps<T>;

const Select = <T extends BaseOptionType>({
  isCustomControl = false,
  menuHeader,
  menuFooter,
  menuIsOpen,
  menuWidth,
  label,
  leftSlot,
  hintSlot,
  placeholderSlot,
  numberVisibleItems,
  isSearchable = false,
  size = 'large',
  ...rest
}: SelectProps<T>) => {
  const menuRef = useRef(null);
  const moonTheme = useTheme();

  useEffect(() => {
    menuIsOpen && menuRef.current.focus();
  }, [menuIsOpen]);

  return (
    <ReactSelect
      {...rest}
      ref={menuRef}
      styles={CustomStyles}
      isSearchable={isSearchable}
      menuIsOpen={menuIsOpen}
      components={{
        Menu,
        ValueContainer,
        DropdownIndicator,
        IndicatorSeparator,
        MultiValue,
        MultiValueRemove,
        MultiValueContainer,
        ClearIndicator,
        Control,
        SingleValue,
        SelectContainer,
        Placeholder,
      }}
      data-customProps={{
        isCustomControl,
        menuHeader,
        menuFooter,
        menuWidth,
        label,
        theme: moonTheme,
        leftSlot,
        hintSlot,
        placeholderSlot,
        size,
        numberVisibleItems,
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: moonTheme.radius.default,
        colors: {
          ...theme.colors,
          primary25: moonTheme.color.goku[100] as string,
          primary50: moonTheme.color.hit[80] as string,
          primary75: moonTheme.color.trunks[100] as string,
          primary: moonTheme.color.piccolo[100] as string, // border focused
          danger: moonTheme.color.chiChi[100] as string,
          dangerLight: moonTheme.color.chiChi[10] as string,
          neutral0: moonTheme.color.gohan[100] as string, // bg
          neutral5: moonTheme.color.gohan[100] as string, // bg disabled
          neutral10: moonTheme.color.beerus[100] as string, // border disabled
          neutral20: moonTheme.color.beerus[100] as string, // border
          neutral30: moonTheme.color.beerus[100] as string, // border hover
          neutral40: moonTheme.color.bulma[100] as string, // value disabled
          neutral50: moonTheme.color.trunks[100] as string, // placeholder
          neutral80: moonTheme.color.bulma[100] as string, // value
        },
      })}
    />
  );
};

export default Select;
