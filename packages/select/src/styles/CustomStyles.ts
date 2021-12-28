// @ts-nocheck
import { StylesConfig } from 'react-select';
import { rem } from '@heathmont/moon-utils';

const CustomStyles: StylesConfig = {
  //options wrapper
  menu: (provided, state) => {
    const { theme, menuWidth } = state.selectProps['data-customProps'];
    return {
      ...provided,
      minWidth: rem(300),
      borderRadius: rem(12),
      padding: `${rem(4)} 0`,
      boxShadow:
        '0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
      ...(menuWidth ? { width: rem(menuWidth), minWidth: rem(menuWidth) } : {}),
    };
  },
  //options inner
  menuList: (provided) => {
    return {
      ...provided,
      padding: rem(4),
    };
  },
  // option
  option: (provided, state) => {
    const { theme } = state.selectProps['data-customProps'];
    return {
      ...provided,
      borderRadius: rem(theme.radius.small),
      padding: rem(12),
      fontSize: rem(16),
      lineHeight: rem(24),
      cursor: 'pointer',
      marginBottom: rem(4),
      backgroundColor:
        state.isSelected || state.isFocused
          ? theme.color.goku[100]
          : 'transparent',
      color: state.isSelected ? theme.color.bulma[100] : 'inherit',
      '&:last-child': {
        marginBottom: 0,
      },
    };
  },
  container: (provided, state) => {
    return {
      ...provided,
      opacity: state.isDisabled ? 0.3 : 1,
      cursor: state.isDisabled && 'default',
    };
  },
  //input wrapper
  control: (provided, state) => {
    const customProps = state.selectProps['data-customProps'];
    return {
      ...provided,
      ...(customProps.isCustomControl
        ? { position: 'absolute', opacity: 0 }
        : {}),
      borderRadius: rem(customProps.theme.radius.largest),
      boxShadow: state.isFocused
        ? `inset 0 0 0 1px ${customProps.theme.color.piccolo[100]}`
        : 'none',
      transition:
        !state.isFocused &&
        `box-shadow ${customProps.theme.transitionDuration.default}s ease`,
      minHeight: customProps.size === 'xLarge' ? rem(56) : rem(48),
      '&:hover': {
        boxShadow: state.isFocused
          ? `inset 0 0 0 1px ${customProps.theme.color.piccolo[100]}`
          : `inset 0 0 0 1px ${customProps.theme.color.beerus[100]}`,
        cursor: 'pointer',
      },
    };
  },
  valueContainer: (provided, state) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    padding: `${rem(6)} ${rem(8)}`,
    ...(state.isMulti
      ? { flexDirection: 'column', alignItems: 'flex-start' }
      : {}),
  }),
  singleValue: (provided) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    fontSize: rem(16),
  }),
  placeholder: (provided) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    fontSize: rem(16),
  }),
  multiValueRemove: () => ({
    width: rem(16),
    height: rem(16),
    cursor: 'pointer',
  }),
  input: (provided) => ({
    ...provided,
    padding: 0,
    fontSize: rem(16),
    margin: `0 ${rem(2)}`,
  }),
};

export default CustomStyles;
