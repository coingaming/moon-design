import { Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { StylesConfig, Props } from 'react-select';

type CustomProps = {
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
  theme: Theme;
};

export type SelectProps = {
  'data-customProps': CustomProps;
} & Props;

const CustomStyles: StylesConfig = {
  //options wrapper
  menu: (provided, state) => {
    const selectProps = state.selectProps as SelectProps;
    const customProps = selectProps['data-customProps'];
    const menuWidth = customProps.menuWidth;
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
    const selectProps = state.selectProps as SelectProps;
    const customProps = selectProps['data-customProps'];
    const theme = customProps.theme;
    return {
      ...provided,
      borderRadius: rem(theme?.radius?.small),
      padding: rem(12),
      fontSize: rem(16),
      lineHeight: rem(24),
      cursor: 'pointer',
      marginBottom: rem(4),
      backgroundColor:
        state.isSelected || state.isFocused
          ? theme.colorNew.goku
          : 'transparent',
      color: state.isSelected ? theme.colorNew.bulma : 'inherit',
      '&:last-child': {
        marginBottom: 0,
      },
    };
  },
  container: (provided, state) => {
    return {
      ...provided,
      opacity: state.isDisabled ? 0.3 : 1,
      cursor: state.isDisabled ? 'default' : 'inherit',
    };
  },
  //input wrapper
  control: (provided, state) => {
    const selectProps = state.selectProps as SelectProps;
    const customProps = selectProps['data-customProps'];
    const theme = customProps.theme;
    return {
      ...provided,
      ...(customProps.isCustomControl
        ? { position: 'absolute', opacity: 0 }
        : {}),
      ...(customProps.isError ? { borderColor: theme.color.chiChi[100] } : {}),
      paddingLeft: rem(8),
      borderRadius: rem(theme.radius.largest),
      boxShadow: customProps.isError
        ? `inset 0 0 0 1px ${theme.color.chiChi[100]}`
        : state.isFocused
        ? `inset 0 0 0 1px ${theme.colorNew.piccolo}`
        : 'none',
      transition:
        !state.isFocused || !customProps.isError
          ? `box-shadow ${theme.transitionDuration.default}s ease`
          : 'none',
      minHeight: customProps.size === 'xLarge' ? rem(56) : rem(48),
      '&:hover': {
        boxShadow: customProps.isError
          ? `inset 0 0 0 1px ${theme.color.chiChi[100]}`
          : state.isFocused
          ? `inset 0 0 0 1px ${theme.colorNew.piccolo}`
          : `inset 0 0 0 1px ${theme.colorNew.beerus}`,
        cursor: 'pointer',
      },
    };
  },
  valueContainer: (provided, state) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    padding: `${rem(6)} ${rem(8)} ${rem(6)} ${rem(7)}`,
    flexWrap: 'nowrap',
    alignSelf: 'stretch',
    ...(state.isMulti
      ? { flexDirection: 'column', alignItems: 'flex-start' }
      : {}),
  }),
  singleValue: (provided) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    fontSize: rem(16),
    marginLeft: 0,
    marginRight: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    fontSize: rem(16),
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
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
