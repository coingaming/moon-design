import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import ChevronDown from "../private/icons/ChevronDown";
import ChevronUp from "../private/icons/ChevronUp";
import Clear from "../private/icons/Clear";
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
  let classNames = 'flex relative bg-gohan';

  classNames += size === 'xl' ? ' p-4' : size === 'md' ? ' py-2 px-3' : ' py-3 px-4';
  classNames += size === 'xl' ? ' rounded-xl' : ' rounded-lg';
  classNames += disabled ? ' cursor-not-allowed' : ' cursor-pointer';
  classNames += (isSharpTopSide || isSharpLeftSide) ? ' rounded-tl-none' : '';
  classNames += (isSharpTopSide || isSharpRightSide) ? ' rounded-tr-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-bl-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-br-none' : '';
  classNames += isTopBottomBorderHidden ? ' border-y-0' : '';
  classNames += isSideBorderHidden ? ' border-x-0' : '';
  classNames += isRtl ? ' text-direction-rtl' : '';
  classNames += isError ? ' shadow-input-err' : ` shadow-input ${ disabled ? '' : inputFocused ? 'shadow-input-focus' : 'hover:shadow-input-hov' }`;

  const selectMenuItem = (value: string) => {
    setMenuOpen(false);
    setSearch('');
    setMenuOptions(options);

    if (onChange) onChange(value);
  };
  // Listening keyboard events on input element to toggle menu opening or type search value
  const handleInputKeydown = (e: any) => {
    if (e.key === "Tab") {
      setMenuOpen(false);
    }
    else if (e.key === "Enter") {
      setMenuOpen(false);

      if (onChange && menuOptions?.length) selectMenuItem(menuOptions[hoveredIndex]?.value);
    }
    else if (e.key === 'ArrowDown') {
      setMenuOpen(true);
    }
    // Deleting search value
    else if (isSearchable && e.key === 'Backspace') {
      const newSearch = search.split('').splice(0, search.length - 1).join('');

      setMenuOpen(true);
      setSearch(newSearch);
      setMenuOptions(options.filter((option: Option) => {
        return option.value.toLowerCase().includes(newSearch.toLowerCase());
      }));
    }
    // Typing search value
    else if (isSearchable && /[a-z0-9]*/.test(e.key) && e.key.length === 1) {
      const newSearch = search + e.key;

      setMenuOpen(true);
      setSearch(newSearch);
      setMenuOptions(options.filter((option: Option) => {
        return option.value.toLowerCase().includes(newSearch.toLowerCase());
      }));
    }
  };

  // Listening global keyboard events to navigate through open menu (if any)
  const handleMenuNavigation = useCallback(
    (e) => {
      if (e && menuOpen) {
        const optionsLength = menuOptions?.length ?? 0;

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

  const onSelectClick = () => {
    if (!disabled) {
      setMenuOpen(!menuOpen);
      inputRef?.current?.focus();
    }
  };

  const onInputFocus = (focused?: boolean) => {
    setInputFocused(!!focused);
  };

  const determineMenuBackgroundColor = (index: number) => {
    const selectedClass = 'bg-goku';
    let bgClass = '';
    // No menu item is selected, so first item should have background color
    if (hoveredIndex < 0 && selectedIndex < 0 && index === 0) bgClass = selectedClass;
    else if (hoveredIndex === index || selectedIndex === index) bgClass = selectedClass;

    return bgClass;
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

        if (isSearchable) {
          setSearch('');
          setMenuOptions(options);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

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
        //@ts-ignore
        value={isSearchable ? search : menuOptions.find((option: Option) => option.value === value)?.label || ''}
        readOnly={!isSearchable}
      />

      <div className={`absolute w-full flex items-center justify-between z-[2] ${ disabled ? 'cursor-not-allowed' : 'cursor-pointer' } ${!value ? 'text-trunks' : ''} ${isRtl ? `pl-${ size === 'md' ? 3 : 4 }` : `pr-${ size === 'md' ? 3 : 4 }`}`}>
        {size !== 'xl' && (<div className='text-moon-14'>{ search ? search : placeholder }</div>)}
        {size === 'xl' && (<>
          <div className={`text-moon-16 transition-all relative ${!value ? 'text-transparent' : 'text-bulma -bottom-2'}`}>{ search ? search : placeholder }</div>
          <div className={`text-trunks transition-all absolute ${!value ? 'text-moon-16' : 'text-moon-12 -top-2'}`}>{ label }</div>
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
        className={`absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[3] ${ menuOpen ? 'opacity-1': 'opacity-0 -z-1'} ${menuWidth && `w-[${menuWidth}px]`}`}
        ref={menuRef}
        style={{width: `${menuWidth ? menuWidth + "px" : "100%"}`}}
      >
        {headerSlot || null}
        {
          menuOpen && menuOptions?.length && menuOptions.map((option: Option, index: number) => (<div
            className={`flex items-center text-popo text-sm p-2 mb-1 ${size === 'xl' ? 'rounded-lg' : 'rounded-sm'} ${determineMenuBackgroundColor(index)}`}
            key={option.value}
            onClick={() => { if (!disabled && onChange) selectMenuItem(option.value) }}
            onMouseOver={() => setHoveredIndex(index)}
          >
            {option.element}
          </div>))
        }
        {!menuOptions.length && (<div className="p-2">{noResultsMessage || 'No results found.'}</div>)}
        {footerSlot || null}
      </div>
    </div>
  </div>);
};

export default Select;
