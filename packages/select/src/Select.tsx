import React, { forwardRef, ReactElement, Ref, useEffect, useRef } from 'react';
import { useTheme } from '@heathmont/moon-themes';
import mergeRefs from 'react-merge-refs';
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

export type SelectProps<T> = {
  isCustomControl?: boolean;
  headerSlot?: JSX.Element;
  footerSlot?: JSX.Element;
  menuWidth?: number;
  label?: string;
  leftSlot?: JSX.Element;
  hintSlot?: JSX.Element | string;
  placeholderSlot?: JSX.Element | string;
  size?: 'large' | 'xLarge' | string;
  amountOfVisibleItems?: number;
  isError?: boolean;
  isSharpLeftSide?: boolean;
  isSharpRightSide?: boolean;
  isSharpTopSide?: boolean;
  isSharpBottomSide?: boolean;
  isNoTopBottomBorder?: boolean;
  isNoSideBorder?: boolean;
  isRtl?: boolean;
} & ReactSelectProps<T>;

const Select = <T extends BaseOptionType>(
  {
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
    isMulti,
    closeMenuOnSelect,
    isSharpLeftSide,
    isSharpRightSide,
    isSharpTopSide,
    isSharpBottomSide,
    isNoTopBottomBorder,
    isNoSideBorder,
    ...rest
  }: SelectProps<T>,
  ref?: Ref<HTMLFormElement>
) => {
  const menuRef = useRef(null);
  const moonTheme = useTheme();

  useEffect(() => {
    const currentRef = menuRef as React.RefObject<HTMLFormElement>;
    menuIsOpen && currentRef?.current?.focus();
  }, [menuIsOpen]);
  return (
    <ReactSelect
      {...rest}
      ref={ref ? mergeRefs([menuRef, ref]) : menuRef}
      styles={CustomStyles as StylesConfig<T>}
      isSearchable={isSearchable}
      menuIsOpen={menuIsOpen}
      closeMenuOnSelect={closeMenuOnSelect || (isMulti ? false : true)}
      isMulti={isMulti}
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
        isSharpLeftSide,
        isSharpRightSide,
        isSharpTopSide,
        isSharpBottomSide,
        isNoTopBottomBorder,
        isNoSideBorder,
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: moonTheme.radius.default,
        colors: {
          ...theme.colors,
          primary25: moonTheme.colorNew.goku as string,
          primary50: moonTheme.color.hit[80] as string,
          primary75: moonTheme.colorNew.trunks as string,
          primary: moonTheme.colorNew.piccolo as string, // border focused and option active bg
          danger: moonTheme.colorNew.chiChi[100] as string,
          dangerLight: moonTheme.colorNew.chiChi[10] as string,
          neutral0: moonTheme.colorNew.gohan as string, // bg
          neutral5: moonTheme.colorNew.gohan as string, // bg disabled
          neutral10: moonTheme.colorNew.beerus as string, // border disabled
          neutral20: moonTheme.colorNew.beerus as string, // border
          neutral30: moonTheme.colorNew.beerus as string, // border hover
          neutral40: moonTheme.colorNew.bulma as string, // value disabled
          neutral50: moonTheme.colorNew.trunks as string, // placeholder
          neutral80: moonTheme.colorNew.bulma as string, // value
        },
      })}
    />
  );
};

// Cast the output
const SelectForwarded = forwardRef(Select) as <T extends BaseOptionType>(
  p: SelectProps<T> & { ref?: Ref<HTMLFormElement> }
) => ReactElement;

export default SelectForwarded;
