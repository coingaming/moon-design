import SelectProps, {Sizes} from "./types/SelectProps";

export const getWrapperClasses = ({
  size,
  disabled,
  isSharpTopSide,
  isSharpLeftSide,
  isSharpRightSide,
  isSharpBottomSide,
  isTopBottomBorderHidden,
  isSideBorderHidden,
  isRtl,
  isError,
  inputFocused
}: SelectProps & { inputFocused?: boolean }) => {
  let classNames = 'flex relative bg-gohan';

  classNames += size === Sizes.xl ? ' p-4' : size === Sizes.md ? ' py-2 px-3' : ' py-3 px-4';
  classNames += size === Sizes.xl ? ' rounded-xl' : ' rounded-lg';
  classNames += disabled ? ' cursor-not-allowed' : ' cursor-pointer';
  classNames += (isSharpTopSide || isSharpLeftSide) ? ' rounded-tl-none' : '';
  classNames += (isSharpTopSide || isSharpRightSide) ? ' rounded-tr-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-bl-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-br-none' : '';
  classNames += isTopBottomBorderHidden ? ' border-y-0' : '';
  classNames += isSideBorderHidden ? ' border-x-0' : '';
  classNames += isRtl ? ' text-direction-rtl' : '';
  classNames += isError ? ' shadow-input-err' : ` shadow-input ${ disabled ? '' : inputFocused ? 'shadow-input-focus' : 'hover:shadow-input-hov' }`;

  return classNames;
};
