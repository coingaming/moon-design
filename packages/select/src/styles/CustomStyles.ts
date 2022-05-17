import { SharedTheme, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { StylesConfig, Props } from 'react-select';

const makeBorderRadius = (
  state: any,
  borderRadius: SharedTheme['newTokens']['borderRadius'],
  isSharpLeftSide?: boolean,
  isSharpRightSide?: boolean,
  isSharpTopSide?: boolean,
  isSharpBottomSide?: boolean
) => {
  if (state.isFocused) {
    return {};
  }
  return {
    borderTopLeftRadius:
      isSharpLeftSide || isSharpTopSide ? 0 : borderRadius.surface.medium,
    borderTopRightRadius:
      isSharpRightSide || isSharpTopSide ? 0 : borderRadius.surface.medium,
    borderBottomLeftRadius:
      isSharpLeftSide || isSharpBottomSide ? 0 : borderRadius.surface.medium,
    borderBottomRightRadius:
      isSharpRightSide || isSharpBottomSide ? 0 : borderRadius.surface.medium,
  };
};

const makeBorder = (
  state: any,
  border: SharedTheme['newTokens']['border'],
  isSideBorderHidden?: boolean,
  isTopBottomBorderHidden?: boolean
) => {
  if (isSideBorderHidden && !state.isFocused) {
    return {
      '&:not(:hover):not(:focus)': {
        clipPath: `inset(-${border.width.default} ${rem(2)} -${
          border.width.default
        } ${rem(2)})`,
      },
    };
  } else if (isTopBottomBorderHidden && !state.isFocused) {
    return {
      '&:not(:hover):not(:focus)': {
        clipPath: `inset(${rem(2)} -${border.width.default} ${rem(2)} -${
          border.width.default
        })`,
      },
    };
  }
  return {};
};

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
  isRtl?: boolean;
  isSharpLeftSide?: boolean;
  isSharpRightSide?: boolean;
  isSharpTopSide?: boolean;
  isSharpBottomSide?: boolean;
  isTopBottomBorderHidden?: boolean;
  isSideBorderHidden?: boolean;
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
      borderRadius: theme?.newTokens?.borderRadius?.xsmall,
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
    const {
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isSideBorderHidden,
      isTopBottomBorderHidden,
    } = customProps;

    return {
      ...provided,
      ...(customProps.isCustomControl
        ? { position: 'absolute', opacity: 0 }
        : {}),
      ...(customProps.isError
        ? { borderColor: theme.colorNew.chiChi[100] }
        : {}),
      paddingInlineStart: rem(8),
      border: 'none !important',
      borderRadius: theme.newTokens.borderRadius.surface.medium,
      boxShadow: customProps.isError
        ? `inset 0 0 0 ${theme.newTokens.border.width.interactive} ${theme.colorNew.chiChi[100]}`
        : state.isFocused
        ? `inset 0 0 0 ${theme.newTokens.border.width.interactive} ${theme.colorNew.piccolo}`
        : `inset 0 0 0 ${theme.newTokens.border.width.default} ${theme.colorNew.beerus}`,

      ...makeBorderRadius(
        state,
        theme.newTokens.borderRadius,
        isSharpLeftSide,
        isSharpRightSide,
        isSharpTopSide,
        isSharpBottomSide
      ),
      ...makeBorder(
        state,
        theme.newTokens.border,
        isSideBorderHidden,
        isTopBottomBorderHidden
      ),

      transition:
        !state.isFocused || !customProps.isError
          ? `box-shadow ${theme.newTokens.transition.default}`
          : 'none',
      minHeight: customProps.size === 'xLarge' ? rem(56) : rem(48),
      '&:hover': {
        boxShadow: customProps.isError
          ? `inset 0 0 0 ${theme.newTokens.border.width.interactive} ${theme.colorNew.chiChi[100]}`
          : state.isFocused
          ? `inset 0 0 0 ${theme.newTokens.border.width.interactive} ${theme.colorNew.piccolo}`
          : `inset 0 0 0 ${theme.newTokens.border.width.interactive} ${theme.hover.primary}, inset 0 0 0 ${theme.newTokens.border.width.interactive} ${theme.colorNew.beerus}`,
        cursor: 'pointer',
        borderRadius: theme.newTokens.borderRadius.surface.medium,
      },
    };
  },
  valueContainer: (provided, state) => {
    const selectProps = state.selectProps as SelectProps;
    const customProps = selectProps['data-customProps'];
    return {
      ...provided,
      gridArea: '2 / 1 / 2 / 3',
      padding:
        customProps.size === 'xLarge'
          ? `${rem(12)} ${rem(8)} ${rem(8)} ${rem(7)}`
          : `${rem(6)} ${rem(8)} ${rem(6)} ${rem(7)}`,
      flexWrap: 'nowrap',
      alignSelf: 'stretch',
      ...(state.isMulti
        ? {
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding:
              customProps.size === 'xLarge' && customProps.label
                ? `${rem(12)} ${rem(8)} 0 ${rem(7)}`
                : `0 ${rem(8)} 0 ${rem(7)}`,
          }
        : {}),
    };
  },
  singleValue: (provided) => ({
    ...provided,
    gridArea: '2 / 1 / 2 / 3',
    fontSize: rem(16),
    marginInlineStart: 0,
    marginInlineEnd: 0,
  }),
  placeholder: (provided, state) => {
    const selectProps = state.selectProps as SelectProps;
    const customProps = selectProps['data-customProps'];
    return {
      ...provided,
      gridArea: '2 / 1 / 2 / 3',
      fontSize: rem(16),
      lineHeight:
        state.isMulti && customProps.size === 'xLarge' ? rem(16) : rem(24),
      height: '100%',
      marginInlineStart: 0,
      marginInlineEnd: 0,
      display: 'flex',
      alignItems:
        state.isMulti && customProps.size === 'xLarge'
          ? 'flex-start'
          : 'center',
    };
  },
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
