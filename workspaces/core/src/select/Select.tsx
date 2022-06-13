import React, {ChangeEvent, useEffect, useRef, useState} from "react";
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
  const [activeOption, setActiveOption] = useState(0);
  const [search, setSearch] = useState('');
  const [menuOptions, setMenuOptions] = useState<Option[]>(options || []);
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const menuRef = useRef(null);
  const placeholder = placeholderSlot ?? placeholderValue ?? 'Choose an option';
  let classNames = `flex relative py-${ size === 'md' ? 2 : 3 } px-${ size === 'md' ? 3 : 4 } bg-gohan rounded-lg border border-solid`;

  classNames += disabled ? '' : ` hover:border-${!menuOpen ? 'gohan' : 'piccolo'}`;
  classNames += disabled ? '' : ` hover:outline hover:outline-1 hover:outline-${!menuOpen ? 'gohan' : 'piccolo'} `;
  // @TODO for some reason border-chiChi won't resolve its color
  classNames += !menuOpen ? ` border-${isError ? 'chiChi outline outline-1 outline-chiChi' : 'beerus'}` : ` border-${isError ? 'chiChi' : 'piccolo'} outline outline-1 outline-${isError ? 'chiChi' : 'piccolo'}`;
  classNames += disabled ? ' cursor-not-allowed' : ' cursor-pointer';
  classNames += (isSharpTopSide || isSharpLeftSide) ? ' rounded-tl-none' : '';
  classNames += (isSharpTopSide || isSharpRightSide) ? ' rounded-tr-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-bl-none' : '';
  classNames += (isSharpBottomSide || isSharpRightSide) ? ' rounded-br-none' : '';
  classNames += isTopBottomBorderHidden ? ' border-y-0' : '';
  classNames += isSideBorderHidden ? ' border-x-0' : '';
  classNames += isRtl ? ' text-direction-rtl' : '';

  useEffect(() => {
    const menuElement = menuRef?.current;

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

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowUp' && activeOption > 0) {
      e.preventDefault();
      setActiveOption(activeOption - 1);
      //@ts-ignore
    } else if (e.key === 'ArrowDown' && activeOption < options.length - 1) {
      e.preventDefault();
      setActiveOption(activeOption + 1);
    } else if (e.key === "Tab") {
      setMenuOpen(false);
    } else if (e.key === "Enter") {
      //@ts-ignore
      onChange && onChange(options[activeOption]?.value);
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
    if(!menuOpen && !isSearchable) {
      setMenuOpen(true);
    }
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if(isSearchable && options) {
      setSearch(e.target.value);
      setMenuOptions(options.filter((option: Option) => option.value.toLowerCase().includes(e.target.value.toLowerCase())));
    };
  };

  const onOptionSelect = (value: string) => {
    if (!disabled && onChange) {
      onChange(value);
    };
  };

  return (
    <div className="flex">
      {leftSlot || null}
      <div className={`support-colors flex flex-col text-popo ${ disabled ? 'opacity-30' : ''}` }>
        { !!label && (<div className='text-base mb-2'>{label}</div>) }
        <div
          className={classNames}
          onClick={onSelectClick}
          // #TODO remove this when chiChi problem is solved
          style={isError ? { borderColor: '#ff4e64', outlineColor: '#ff4e64'} : {}}
          ref={selectRef}
        >
          <input 
            className='bg-gohan z-[1] focus:outline-none focus:border-none' 
            disabled={disabled} 
            ref={inputRef} 
            //@ts-ignore
            value={search || options.find((option: Option) => option.value === value)?.label || ''}
            readOnly={!isSearchable}
            onKeyDown={(e) => keyDownHandler(e)} 
            onFocus={onInputFocus}
            onChange={onSearch}
          />
          {!search && !value && (
            <div className={`absolute ${ disabled ? 'cursor-not-allowed' : 'cursor-pointer' } w-full flex items-center justify-between z-[2] text-trunks ${isRtl ? `pl-${ size === 'md' ? 3 : 4 }` : `pr-${ size === 'md' ? 3 : 4 }`}`}>
              <div>{ placeholder }</div>

              <div className='mx-2'>{ menuOpen ? (<ChevronUp />) : (<ChevronDown />) }</div>
            </div>
          )}

          { !!hintSlot && (<div className={`absolute top-full left-0 p-2 text-xs text-${isError ? 'chiChi' : 'trunks'}`}>
            { hintSlot }
          </div>)}

          <div
            className={`absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[3] ${ menuOpen ? 'opacity-1': 'opacity-0 -z-1'} ${menuWidth && `w-[${menuWidth}px]`}`}
            ref={menuRef}
            style={{width: `${menuWidth ? menuWidth + "px" : "100%"}`}}
          >
            {headerSlot || null}
            {
              menuOpen && menuOptions.map((option: Option, index: number) => (
                <div
                  key={option.value}
                  // @TODO hover with custom color doesn't work, but only bg-goku works, why? :(
                  className={`flex items-center text-popo text-sm p-2 rounded-sm hover:bg-goku ${activeOption === index && 'bg-goku'}`}
                  onClick={() => onOptionSelect(option.value)}
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
      </div>
    </div>
  );
};

export default Select;
