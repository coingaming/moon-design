import React, {forwardRef, useState} from "react";
import ChevronDown from "../private/icons/ChevronDown";
import ChevronUp from "../private/icons/ChevronUp";
import Clear from "../private/icons/Clear";
import classNames from '../private/utils/classnames';
import {determineMenuBackgroundColor} from "./private/getBackgroundColor";
import getPlaceholderValue from "./private/getPlaceholderValue";
import Option from "./private/types/OptionProps";
import {SelectProps, SingleSelectProps, Sizes} from "./private/types/SelectProps";
import useSelect from "./private/useSelect";

const Select = forwardRef<HTMLDivElement, SelectProps & SingleSelectProps>(({
  options,
  label,
  value,
  disabled,
  isError,
  placeholder,
  hint,
  onChange,
  size = 'md',
  amountOfVisibleItems = 9999,
  menuWidth,
  header,
  footer,
  left,
  isSharpLeftSide,
  isSharpRightSide,
  isSharpTopSide,
  isSharpBottomSide,
  isTopBottomBorderHidden,
  isSideBorderHidden,
  isRtl,
  isSearchable,
  noResultsMessage,
  formatOptionLabel
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const placeholderElement = getPlaceholderValue({
    value,
    options,
    placeholder
  });
  const {
    menuOpen,
    search,
    menuOptions,
    inputFocused,
    inputRef,
    selectRef,
    menuRef,
    onSelectClick,
    onInputFocus,
    selectMenuItem,
    handleInputKeydown
  } = useSelect({
    options,
    onChange,
    value,
    hoveredIndex,
    selectedIndex,
    isSearchable,
    disabled,
    amountOfVisibleItems,
    setHoveredIndex,
    setSelectedIndex
  });

  const clearValue = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setSelectedIndex(-1);
    setHoveredIndex(-1);
    selectMenuItem('');
  };

  return (<div className={classNames(
    'support-colors flex flex-col text-popo',
    disabled ? 'opacity-30' : ''
  )}>
    { !!label && size !== 'xl' && (<div className='text-base mb-2'>{label}</div>) }
    <div
      className={classNames(
        'flex relative bg-gohan',
        size === Sizes.xl ? ' p-4 ' : size === Sizes.md ? ' py-2 px-3 ' : ' py-3 px-4 ',
        size === Sizes.xl ? ' rounded-xl' : ' rounded-lg',
        disabled ? ' cursor-not-allowed' : ' cursor-pointer',
        isSharpTopSide || isSharpLeftSide ? ' rounded-tl-none' : '',
        isSharpTopSide || isSharpRightSide ? ' rounded-tr-none' : '',
        isSharpBottomSide || isSharpRightSide ? ' rounded-bl-none' : '',
        isSharpBottomSide || isSharpRightSide ? ' rounded-br-none' : '',
        isTopBottomBorderHidden ? ' border-y-0' : '',
        isSideBorderHidden ? ' border-x-0' : '',
        isRtl ? ' text-direction-rtl' : '',
        isError ? ' shadow-input-err' : ` shadow-input ${
          disabled ? '' : inputFocused ? 'shadow-input-focus' : 'hover:shadow-input-hov'
        }`
      )}
      onClick={onSelectClick}
      ref={selectRef}
    >
      <input
        className='bg-gohan text-transparent z-[1] focus:outline-none focus:border-none'
        disabled={disabled}
        ref={inputRef}
        onKeyDown={(e) => handleInputKeydown(e)}
        onFocus={() => onInputFocus(true)}
        onBlur={() => onInputFocus()}
        defaultValue={isSearchable ? search : menuOptions.find((option: Option) => option.value === value)?.label || ''}
        readOnly={!isSearchable}
      />
      {!!left && (<div className={classNames(
        'absolute left-0 top-0 w-6 h-6 flex justify-center items-center overflow-hidden z-10 ',
        size === 'xl' ? 'm-4 ' : 'm-2 '
      )}>{left}</div>)}

      <div className={classNames(
        'absolute w-full flex items-center justify-between z-[2] ',
        disabled ? 'cursor-not-allowed ' : 'cursor-pointer ',
        !value ? 'text-trunks ' : '',
        left ? 'pl-6 ' : '',
        isRtl ? size === 'md' ? 'pl-3' : 'pl-4' : size === 'md' ? 'pr-3' : 'pr-4'
      )}>
        {size !== 'xl' ? (<div className='text-moon-14'>{ search?.length ? search : placeholderElement }</div>) : (<>
          <div className={classNames(
            'text-moon-16 transition-all relative ',
            left ? 'pl-2 ' : '',
            !value ? 'text-transparent ' : 'text-bulma -bottom-2 '
          )}>{ search ? search : placeholderElement }</div>
          <div className={classNames(
            'text-trunks transition-all absolute ',
             left ? 'pl-2 ' : '',
             !value ? 'text-moon-16 ' : 'text-moon-12 -top-2 '
          )}>{ label }</div>
        </>)}
        <div className='flex items-center justify-center'>
          {!!value && (<div
            className={`${size === 'xl' ? 'ml-4' : 'ml-2'}`}
            onClick={(e: any) => clearValue(e)}
          >
            <Clear />
          </div>)}
          <div className={`${size === 'xl' ? 'mr-4 ml-2' : 'mx-2'}`}>{ menuOpen ? (<ChevronUp />) : (<ChevronDown />) }</div>
        </div>
      </div>
      {!!hint && (<div className={classNames(
        'absolute top-full left-0 p-2 text-xs ',
        isError ? 'text-chiChi ' : 'text-trunks '
      )}>{ hint }</div>)}
      <div
        className={classNames(
          'absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[11] ',
           menuOpen ? 'opacity-1 ' : 'opacity-0 -z-1 ',
           menuWidth ? `w-[${menuWidth}rem]` : ''
        )}
        ref={menuRef}
        style={{ width: `${menuWidth ? menuWidth + "rem" : "100%"}` }}
      >
        {header || null}
        {
          menuOpen && menuOptions?.length && menuOptions.map((option: Option, index: number) => (<div
            className={classNames(
              'flex items-center text-popo text-sm p-2 mb-1 ',
              size === 'xl' ? 'rounded-lg ' : 'rounded-sm ' ,
              determineMenuBackgroundColor(index, hoveredIndex, selectedIndex)
            )}
            key={option.value}
            onClick={() => { if (!disabled && onChange) selectMenuItem(option.value) }}
            onMouseOver={() => setHoveredIndex(index)}
          >
            {formatOptionLabel ? formatOptionLabel(option) : option.element ?? option.label}
          </div>))
        }
        {!menuOptions.length && (<div className="p-2">{noResultsMessage || 'No results found.'}</div>)}
        {footer || null}
      </div>
    </div>
  </div>);
});

export default Select;
