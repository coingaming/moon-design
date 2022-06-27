import React, {useState} from "react";
import ChevronDown from "../private/icons/ChevronDown";
import ChevronUp from "../private/icons/ChevronUp";
import Clear from "../private/icons/Clear";
import {determineMenuBackgroundColor} from "./private/getBackgroundColor";
import {getWrapperClasses} from "./private/getWrapperClasses";
import Option from "./private/types/OptionProps";
import SelectProps, {Sizes} from "./private/types/SelectProps";
import useEventListeners from "./private/useEventListeners";

const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  disabled,
  isError,
  placeholderSlot,
  placeholderValue,
  hintSlot,
  onChange,
  size = Sizes.md,
  amountOfVisibleItems = 9999,
  menuWidth,
  headerSlot,
  footerSlot,
  leftSlot,
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
  const placeholder = value ? options?.filter((option) => option.value === value)[0]?.label
    : placeholderSlot ?? placeholderValue ?? 'Choose an option';
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
  } = useEventListeners({
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

  const classNames = getWrapperClasses({
    // @ts-ignore
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
    // @ts-ignore
    inputFocused
  });

  return (<div className={`support-colors flex flex-col text-popo ${ disabled ? 'opacity-30' : ''}` }>
    { !!label && size !== 'xl' && (<div className='text-base mb-2'>{label}</div>) }

    <div
      className={classNames}
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

      {!!leftSlot && (<div className={`absolute left-0 top-0 w-6 h-6 flex justify-center items-center overflow-hidden z-10 m-${size === 'xl' ? 4 : 2}`}>{leftSlot}</div>)}

      <div className={`absolute w-full flex items-center justify-between z-[2] ${ disabled ? 'cursor-not-allowed' : 'cursor-pointer' } ${!value ? 'text-trunks' : ''} ${leftSlot ? 'pl-6' : ''} ${isRtl ? `pl-${ size === 'md' ? 3 : 4 }` : `pr-${ size === 'md' ? 3 : 4 }`}`}>
        {size !== 'xl' ? (<div className='text-moon-14'>{ search?.length ? search : placeholder }</div>) : (<>
          <div className={`text-moon-16 transition-all relative ${leftSlot ? 'pl-2' : ''} ${!value ? 'text-transparent' : 'text-bulma -bottom-2'}`}>{ search ? search : placeholder }</div>
          <div className={`text-trunks transition-all absolute ${leftSlot ? 'pl-2' : ''} ${!value ? 'text-moon-16' : 'text-moon-12 -top-2'}`}>{ label }</div>
        </>)}
        <div className='flex items-center justify-center'>
          {!!value && (<div
            className={`${size === 'xl' ? 'ml-4' : 'ml-2'}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();

              setSelectedIndex(-1);
              setHoveredIndex(-1);
              selectMenuItem('');
            }}
          >
            <Clear />
          </div>)}
          <div className={`${size === 'xl' ? 'mr-4 ml-2' : 'mx-2'}`}>{ menuOpen ? (<ChevronUp />) : (<ChevronDown />) }</div>
        </div>
      </div>
      {!!hintSlot && (<div className={`absolute top-full left-0 p-2 text-xs text-${isError ? 'chiChi' : 'trunks'}`}>
        { hintSlot }
      </div>)}
      <div
        className={`absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[11] ${ menuOpen ? 'opacity-1': 'opacity-0 -z-1'} ${menuWidth && `w-[${menuWidth}px]`}`}
        ref={menuRef}
        style={{width: `${menuWidth ? menuWidth + "px" : "100%"}`}}
      >
        {headerSlot || null}
        {
          menuOpen && menuOptions?.length && menuOptions.map((option: Option, index: number) => (<div
            className={`flex items-center text-popo text-sm p-2 mb-1 ${size === 'xl' ? 'rounded-lg' : 'rounded-sm'} ${determineMenuBackgroundColor(index, hoveredIndex, selectedIndex)}`}
            key={option.value}
            onClick={() => { if (!disabled && onChange) selectMenuItem(option.value) }}
            onMouseOver={() => setHoveredIndex(index)}
          >
            {formatOptionLabel ? formatOptionLabel(option) : option.element ?? option.label}
          </div>))
        }
        {!menuOptions.length && (<div className="p-2">{noResultsMessage || 'No results found.'}</div>)}
        {footerSlot || null}
      </div>
    </div>
  </div>);
};

export default Select;
