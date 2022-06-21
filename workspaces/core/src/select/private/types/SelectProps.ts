import Option from "./OptionProps";

export type SelectProps = {
  options: Option[];
  label?: JSX.Element | string;
  size?: 'md' | 'lg' | 'xl';
  menuWidth: number,
  disabled?: boolean;
  placeholderValue?: string;
  placeholderSlot?: JSX.Element | string;
  isError?: boolean;
  amountOfVisibleItems?: number;
  isSearchable: boolean,
  hintSlot?: JSX.Element | string;
  headerSlot: JSX.Element,
  footerSlot: JSX.Element,
  leftSlot: JSX.Element,
  isSharpLeftSide: JSX.Element,
  isSharpRightSide: boolean,
  isSharpTopSide: boolean,
  isSharpBottomSide: boolean,
  isTopBottomBorderHidden: boolean,
  isSideBorderHidden: boolean,
  isRtl: boolean,
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
