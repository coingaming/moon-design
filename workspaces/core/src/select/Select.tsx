import React, {useCallback, useEffect, useRef, useState} from "react";
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
   amountOfVisibleItems = 9999
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const menuRef = useRef(null);
  const placeholder = value ? options?.filter((option) => option.value === value)[0]?.label
    : placeholderSlot ?? placeholderValue ?? 'Choose an option';
  let classNames = `flex relative py-${ size === 'md' ? 2 : 3 } px-${ size === 'md' ? 3 : 4 } bg-gohan rounded-lg border border-solid`;

  classNames += disabled ? '' : ` hover:border-${!menuOpen ? 'gohan' : 'piccolo'}`;
  classNames += disabled ? '' : ` hover:outline hover:outline-1 hover:outline-${!menuOpen ? 'gohan' : 'piccolo'} `;
  // @TODO for some reason border-chiChi won't resolve its color
  classNames += !menuOpen ? ` border-${isError ? 'chiChi outline outline-1 outline-chiChi' : 'beerus'}` : ` border-${isError ? 'chiChi' : 'piccolo'} outline outline-1 outline-${isError ? 'chiChi' : 'piccolo'}`;
  classNames += disabled ? ' cursor-not-allowed' : ' cursor-pointer';

  const handleInputFocus = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      setMenuOpen(false);
    } else if (e.key === "Enter") {
      //@ts-ignore
      onChange && onChange(options[selectedIndex]?.value);
      setMenuOpen(false);
    }
  };

  const onSelectClick = () => {
    if (!disabled) {
      setMenuOpen(!menuOpen);
      //@ts-ignore
      inputRef?.current.focus();
    }
  };

  const onInputFocus = () => {
    //console.log(menuOpen);
  };

  const determineBackgroundColor = (index: number) => {
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
      // #TODO remove this when chiChi problem is solved
      style={isError ? { borderColor: '#ff4e64', outlineColor: '#ff4e64'} : {}}
      ref={selectRef}
    >
      <input
        className='bg-gohan text-transparent z-[1] focus:outline-none focus:border-none'
        disabled={disabled}
        // value={value}
        ref={inputRef}
        readOnly
        // onKeyDown={(e) => keyDownHandler(e)}
        onFocus={onInputFocus}
      />

      <div className={`absolute ${ disabled ? 'cursor-not-allowed' : 'cursor-pointer' } w-full flex items-center justify-between pr-${ size === 'md' ? 3 : 4 } z-[2] text-${ value ? 'popo' : 'trunks'}`}>
        <div>{ placeholder }</div>

        <div className='mx-2'>{ menuOpen ? (<ChevronUp />) : (<ChevronDown />) }</div>
      </div>

      { !!hintSlot && (<div className={`absolute top-full left-0 p-2 text-xs text-${isError ? 'chiChi' : 'trunks'}`}>
        { hintSlot }
      </div>)}

      <div
        className={`absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[3] ${ menuOpen ? 'opacity-1': 'opacity-0 -z-1'}`}
        ref={menuRef}
      >
        {
          menuOpen && options?.length && options.map((option: Option, index: number) => (
            <div
              // @TODO hover with custom color doesn't work, but only bg-goku works, why? :(
              className={`flex items-center text-popo text-sm p-2 rounded-sm ${determineBackgroundColor(index)}`}
              onClick={() => { if (!disabled && onChange) onChange(option.value) }}
              onMouseOver={() => setHoveredIndex(index)}
            >
              {option.element}
            </div>
          ))
        }
      </div>
    </div>
  </div>);
};

export default Select;
