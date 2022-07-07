import Option from "./OptionProps";

export const Sizes = {
  md: 'md',
  lg: 'lg',
  xl: 'xl'
}

export type SelectProps = {
  options: Option[];
  label?: JSX.Element | string;
  size?: keyof typeof Sizes;
  menuWidth: number,
  disabled?: boolean;
  placeholder?: JSX.Element | string;
  isError?: boolean;
  amountOfVisibleItems?: number;
  isSearchable: boolean,
  hint?: JSX.Element | string;
  header: JSX.Element,
  footer: JSX.Element,
  left: JSX.Element,
  isSharpLeftSide: JSX.Element,
  isSharpRightSide: boolean,
  isSharpTopSide: boolean,
  isSharpBottomSide: boolean,
  isTopBottomBorderHidden: boolean,
  isSideBorderHidden: boolean,
  isRtl: boolean,
  formatOptionLabel?: (option: any) => any;
  noResultsMessage?: string
  noSearchResultsMessage?: string
  noOptionsMessage?: string;
  className?: string;
};

export type SingleSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export type MultiSelectProps = {
  value?: string[];
  onChange?: (value: string[]) => void;
  counter?: boolean;
};
