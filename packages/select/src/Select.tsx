// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import ReactSelect, {
  components,
  ValueContainerProps,
  MultiValueRemoveProps,
  MultiValueProps,
  ClearIndicatorProps,
  ControlProps,
  SingleValueProps,
  MenuProps,
  StylesConfig,
  Props as ReactSelectProps,
  DropdownIndicatorProps,
} from 'react-select';
import { useTheme, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import {
  ControlsChevronDown,
  ControlsChevronUp,
  ControlsClose,
} from '@heathmont/moon-icons';
import { Label } from '@heathmont/moon-core';

export type BaseOptionType = {
  label: string;
  value: string | number;
};

const customStyles: StylesConfig = {
  menu: (provided, state) => {
    const { theme, menuWidth } = state.selectProps['data-customProps'];
    return {
      ...provided,
      minWidth: '300px',
      padding: rem(theme.space.xsmall),
      boxShadow:
        '0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
      ...(menuWidth ? { width: `${menuWidth}px` } : {}),
    };
  },
  option: (provided, state) => {
    const { theme } = state.selectProps['data-customProps'];
    return {
      ...provided,
      borderRadius: rem(theme.radius.small),
      padding: rem(theme.space.default),
      cursor: 'pointer',
    };
  },
  control: (provided, state) => ({
    ...provided,
    ...(state.selectProps['data-customProps'].isCustomControl
      ? { position: 'absolute', opacity: 0 }
      : {}),
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    padding: '6px 8px',
    ...(state.isMulti
      ? { flexDirection: 'column', alignItems: 'flex-start' }
      : {}),
  }),
  singleValue: (provided) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    fontSize: '16px',
  }),
  placeholder: (provided) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    fontSize: '16px',
  }),
  multiValueRemove: () => ({
    width: '16px',
    height: '16px',
    cursor: 'pointer',
  }),
  input: (provided) => ({
    ...provided,
    padding: 0,
    fontSize: '16px',
    margin: '0 2px',
  }),
};

type DataCustomProps = {
  isCustomControl: boolean;
  menuHeader: React.ReactNode;
  menuFooter: React.ReactNode;
  menuWidth: number | undefined;
  label: string;
  theme: Theme;
  leftSlot: React.ReactNode;
};

const Menu = ({
  children,
  ...rest
}: MenuProps<{ 'data-customProps'?: DataCustomProps }>) => {
  console.log('rest', rest);
  //
  return (
    <components.Menu {...rest}>
      {rest.selectProps['data-customProps']?.menuHeader || null}
      {children}
      {rest.selectProps['data-customProps']?.menuFooter || null}
    </components.Menu>
  );
};

const DropdownIndicator = ({ ...rest }: DropdownIndicatorProps) => {
  const IndicatorComponent = rest.selectProps.menuIsOpen
    ? ControlsChevronUp
    : ControlsChevronDown;
  return <IndicatorComponent style={{ marginRight: '8px' }} fontSize="2rem" />;
};

const IndicatorSeparator = () => null;

const Control = ({ children, ...rest }: ControlProps) => {
  const leftSlot = rest.selectProps['data-customProps']?.leftSlot;
  return (
    <components.Control {...rest}>
      {leftSlot && <div>{leftSlot}</div>}
      {children}
    </components.Control>
  );
};

const ValueContainer = ({ children, ...rest }: ValueContainerProps) => (
  <components.ValueContainer {...rest}>
    <div
      style={{
        gridArea: '1 / 1 / 2 / 3',
        fontSize: '12px',
        margin: '0 2px',
        color: rest.theme.colors.primary75,
      }}
    >
      {rest.selectProps['data-customProps'].label}
    </div>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        padding: '4px 0',
      }}
    >
      {children}
    </div>
  </components.ValueContainer>
);
const MultiValue = ({ children, ...rest }: MultiValueProps) => (
  <components.MultiValue {...rest}>{children}</components.MultiValue>
);

const SingleValue = ({
  children,
  ...rest
}: SingleValueProps<BaseOptionType>) => {
  const leftSlot = rest.selectProps['data-customProps']?.leftSlot;
  return (
    <components.SingleValue {...rest}>
      {leftSlot ? rest.data.label : children}
    </components.SingleValue>
  );
};

const MultiValueRemove = ({ ...rest }: MultiValueRemoveProps) => (
  <components.MultiValueRemove {...rest}>
    <ControlsClose fontSize="1rem" color="goten.100" />
  </components.MultiValueRemove>
);

const MultiValueContainer = (props) => (
  <Label iconRight={props.children[1]}>{props.data.label}</Label>
);
const ClearIndicator = ({ ...rest }: ClearIndicatorProps) => (
  <components.ClearIndicator {...rest}>
    <ControlsClose style={{ cursor: 'pointer' }} fontSize="1.5rem" />
  </components.ClearIndicator>
);

type SelectProps<T> = {
  isCustomControl?: boolean;
  menuHeader?: React.ReactNode;
  menuFooter?: React.ReactNode;
  menuWidth?: number;
  label: string;
  leftSlot?: React.ReactNode;
  'data-customProps'?: {};
} & ReactSelectProps<T>;

const Select = <T extends BaseOptionType>({
  isCustomControl = false,
  menuHeader,
  menuFooter,
  menuIsOpen,
  menuWidth,
  label,
  leftSlot,
  isSearchable = false,
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
      styles={customStyles}
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
      }}
      data-customProps={{
        isCustomControl,
        menuHeader,
        menuFooter,
        menuWidth,
        label,
        theme: moonTheme,
        leftSlot,
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: moonTheme.radius.default,
        colors: {
          ...theme.colors,
          primary25: moonTheme.color.goku[100] as string,
          primary50: moonTheme.color.hit[80] as string,
          primary75: moonTheme.color.trunks[100] as string,
          primary: moonTheme.color.piccolo[100] as string,
          danger: moonTheme.color.chiChi[100] as string,
          dangerLight: moonTheme.color.chiChi[10] as string,
        },
      })}
    />
  );
};

export default Select;
