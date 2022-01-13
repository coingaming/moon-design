import React, { useEffect, useRef } from 'react';
import { useTheme } from '@heathmont/moon-themes';
import ReactSelect, {
  Props as ReactSelectProps,
  StylesConfig,
} from 'react-select';

import ClearIndicator from './private/ClearIndicator';
import Control from './private/Control';
import DropdownIndicator from './private/DropdownIndicator';
import IndicatorSeparator from './private/IndicatorSeparator';
import Menu from './private/Menu';
import MultiValue from './private/MultiValue';
import MultiValueContainer from './private/MultiValueContainer';
import MultiValueRemove from './private/MultiValueRemove';
import Placeholder from './private/Placeholder';
import SelectContainer from './private/SelectContainer';
import SingleValue from './private/SingleValue';
import ValueContainer from './private/ValueContainer';

import CustomStyles from './styles/CustomStyles';

export type BaseOptionType = {
  label: string;
  value: string | number;
};

type SelectProps<T> = {
  isCustomControl?: boolean;
  headerSlot?: JSX.Element;
  footerSlot?: JSX.Element;
  menuWidth?: number;
  label?: string;
  leftSlot?: JSX.Element;
  hintSlot?: JSX.Element | string;
  placeholderSlot?: JSX.Element | string;
  size?: 'large' | 'xLarge';
  amountOfVisibleItems?: number;
  isError?: boolean;
} & ReactSelectProps<T>;

const Select = <T extends BaseOptionType>({
  isCustomControl = false,
  headerSlot,
  footerSlot,
  menuIsOpen,
  menuWidth,
  label,
  leftSlot,
  hintSlot,
  placeholderSlot,
  amountOfVisibleItems,
  isError = false,
  isSearchable = false,
  size = 'large',
  ...rest
}: SelectProps<T>) => {
  const menuRef = useRef(null);
  const moonTheme = useTheme();

  useEffect(() => {
    const cuurentRef = menuRef as React.RefObject<HTMLFormElement>;
    menuIsOpen && cuurentRef?.current?.focus();
  }, [menuIsOpen]);
  return (
    <ReactSelect
      {...rest}
      ref={menuRef}
      styles={CustomStyles as StylesConfig<T>}
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
        headerSlot,
        footerSlot,
        menuWidth,
        label,
        theme: moonTheme,
        leftSlot,
        hintSlot,
        placeholderSlot,
        size,
        amountOfVisibleItems,
        isError,
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: moonTheme.radius.default,
        colors: {
          ...theme.colors,
          primary25: moonTheme.color.goku[100] as string,
          primary50: moonTheme.color.hit[80] as string,
          primary75: moonTheme.color.trunks[100] as string,
          primary: moonTheme.color.piccolo[100] as string, // border focused and option active bg
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
