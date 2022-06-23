import Option from "./OptionProps";

type SelectProps = {
  value?: string;
  options: Option[];
  onChange?: (value: string) => any;
  label?: JSX.Element | string;
  size?: 'md' | 'lg' | 'xl';
  menuWidth: number,
  disabled?: boolean;
  placeholderValue?: JSX.Element | string;
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
  noResultsMessage?: string
  formatOptionLabel?: (option: any) => any;
};

export default SelectProps;
