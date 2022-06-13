import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import ChevronDown from "../private/icons/ChrvronDown";
import ChevronUp from "../private/icons/ChrvronUp";
import Option from "./private/types/OptionProps";
import SelectProps from "./private/types/SelectProps";

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
  size = 'md',
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
  noResultsMessage
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [menuOptions, setMenuOptions] = useState<Option[]>(options || []);
  const [inputFocused, setInputFocused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef(null);
  const menuRef = useRef(null);
  const placeholder = value ? options?.filter((option) => option.value === value)[0]?.label
    : placeholderSlot ?? placeholderValue ?? 'Choose an option';
  let classNames = `flex relative py-${ size === 'md' ? 2 : 3 } px-${ size === 'md' ? 3 : 4 } bg-gohan rounded-lg`;

  classNames += disabled ? ' cursor-not-allowed' : ' cursor-pointer';
  classNames += (isSharpTopSide || isSharpLeftSide) ? ' rounded-tl-none' : '';
  classNames += (isSharpTopSide || isSharpRightSide) ? ' rounded-tr-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-bl-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-br-none' : '';
  classNames += isTopBottomBorderHidden ? ' border-y-0' : '';
  classNames += isSideBorderHidden ? ' border-x-0' : '';
  classNames += isRtl ? ' text-direction-rtl' : '';
  classNames += isError ? ' shadow-input-err' : ` shadow-input ${ disabled ? '' : inputFocused ? 'shadow-input-focus' : 'hover:shadow-input-hov' }`;


  const handleInputKeydown = (e: any) => {
    if (e.key === "Tab") {
      setMenuOpen(false);
    }
    else if (e.key === "Enter") {
      setMenuOpen(false);

      if (onChange && options?.length) onChange(options[hoveredIndex]?.value);
    }
    else if (e.key === 'ArrowDown') {
      setMenuOpen(true);
    }
  };

  const onSelectClick = () => {
    if (!disabled) {
      setMenuOpen(!menuOpen);
      inputRef?.current?.focus();
    }
  };

  const onInputFocus = (focused?: boolean) => {
    setInputFocused(!!focused)
  };

  const determineMenuBackgroundColor = (index: number) => {
    const selectedClass = 'bg-goku';
    let bgClass = '';
    // No menu item is selected, so first item should have background color
    if (hoveredIndex < 0 && selectedIndex < 0 && index === 0) bgClass = selectedClass;
    else if (hoveredIndex === index || selectedIndex === index) bgClass = selectedClass;

    return bgClass;
  };

  const handleMenuNavigation = useCallback(
    (e) => {
      if (e && menuOpen) {
        const optionsLength = options?.length ?? 0;

        e.stopPropagation();
        e.preventDefault();

        if (e.key === 'ArrowUp') {
          setHoveredIndex(hoveredIndex > 0 ? hoveredIndex - 1 : optionsLength - 1);
        }
        else if (e.key === 'ArrowDown') {
          setHoveredIndex(hoveredIndex < optionsLength - 1 ? hoveredIndex + 1 : 0);
        }
      }
    },
    [menuOpen, hoveredIndex]
  );

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if(isSearchable && options) {
      setSearch(e.target.value);
      setMenuOptions(options.filter((option: Option) => option.value.toLowerCase().includes(e.target.value.toLowerCase())));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleMenuNavigation);

    return () => document.removeEventListener("keydown", handleMenuNavigation);
  }, [handleMenuNavigation]);

  useEffect(() => {
    const menuElement = menuRef?.current;

    // Handling number of menu items component prop
    if (
      menuOpen &&
      menuElement &&
      // @ts-ignore
      menuElement.style &&
      amountOfVisibleItems &&
      // @ts-ignore
      amountOfVisibleItems < menuElement.childNodes?.length
    ) {
      // @ts-ignore
      menuElement.style.height = `${(menuRef.current.clientHeight / menuElement.childNodes.length) * amountOfVisibleItems}px`;
    }
    // @ts-ignore
    else if (menuElement?.style) {
      // @ts-ignore
      menuElement.style.height = 'auto';
    }
  }, [menuRef, menuOpen]);

  useEffect(() => {
    // Handle initial selected menu item background color
    if (menuOpen && options?.length) {
      let selectedItemIndex = -1;

      options.forEach((item: Option, index) => {
        if (item.value === value) selectedItemIndex = index;
      });

      if (selectedItemIndex >= 0) {
        setSelectedIndex(selectedItemIndex);
      }
    }
  }, [menuOpen, value])

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      //@ts-ignore
      if(selectRef?.current && !selectRef.current.contains(e.target)) {
        setMenuOpen(false);

        if(isSearchable) {
          setSearch('');
          setMenuOptions(options);
        }
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (<div className={`support-colors flex flex-col text-popo ${ disabled ? 'opacity-30' : ''}` }>
    { !!label && (<div className='text-base mb-2'>{label}</div>) }

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
        //@ts-ignore
        value={search || options.find((option: Option) => option.value === value)?.label || ''}
        readOnly={!isSearchable}
        onChange={onSearch}
      />

      {!search && !value && (
        <div className={`absolute ${ disabled ? 'cursor-not-allowed' : 'cursor-pointer' } w-full flex items-center justify-between z-[2] text-trunks ${isRtl ? `pl-${ size === 'md' ? 3 : 4 }` : `pr-${ size === 'md' ? 3 : 4 }`}`}>
          <div>{ placeholder }</div>

          <div className='mx-2'>{ menuOpen ? (<ChevronUp />) : (<ChevronDown />) }</div>
        </div>
      )}

      {!!hintSlot && (<div className={`absolute top-full left-0 p-2 text-xs text-${isError ? 'chiChi' : 'trunks'}`}>
        { hintSlot }
      </div>)}

      <div
        className={`absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[3] ${ menuOpen ? 'opacity-1': 'opacity-0 -z-1'} ${menuWidth && `w-[${menuWidth}px]`}`}
        ref={menuRef}
        style={{width: `${menuWidth ? menuWidth + "px" : "100%"}`}}
      >
        {headerSlot || null}
        {
          menuOpen && menuOptions?.length && menuOptions.map((option: Option, index: number) => (
            <div
              // @TODO hover with custom color doesn't work, but only bg-goku works, why? :(
              className={`flex items-center text-popo text-sm p-2 rounded-sm mb-1 ${determineMenuBackgroundColor(index)}`}
              key={option.value}
              onClick={() => { if (!disabled && onChange) onChange(option.value) }}
              onMouseOver={() => setHoveredIndex(index)}
            >
              {option.element}
            </div>
          ))
        }
        {!menuOptions.length && (
          <div className="p-2">{noResultsMessage || 'No results found.'}</div>
        )}
        {footerSlot || null}
      </div>
    </div>
  </div>);
};

export default Select;
