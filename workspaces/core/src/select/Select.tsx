import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import classNames from '../private/utils/classnames';
import ChevronIcon from "./private/icons/ChevronIcon";
import Option from "./private/types/OptionProps";
import { SelectProps, SingleSelectProps } from "./private/types/SelectProps";

const Select: React.FC<SelectProps & SingleSelectProps> = ({
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
  noSearchResultsMessage
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(0);
  const [search, setSearch] = useState('');
  const [menuOptions, setMenuOptions] = useState<Option[]>(options || []);

  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const menuRef = useRef(null);

  const placeholder = placeholderSlot ?? placeholderValue ?? 'Choose an option';

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

    setSearch('');
    setMenuOptions(options);
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
    } else if (e.key === "Enter" && activeOption) {
      //@ts-ignore
      onChange && onChange(menuOptions[activeOption]?.value);
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
    setTimeout(() => {
      if(!menuOpen) {
        setMenuOpen(true);
      }
    }, 200)
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

  const getHeight = () => {
    if(size === 'md') return 'h-10';
    if(size === 'lg') return 'h-12';
    if(size === 'xl') return 'h-14';
    return 'h-10';
  };

  const getPadding = () => {
    if(size === 'md') return 'py-2';
    if(size === 'lg') return 'py-3';
    if(size === 'xl') return value ? 'py-2 pb-1' : 'py-4 px-4';
    return 'py-2';
  };

  const getBorder = () => {
    let borderClasses: string = '';

    if(isSharpTopSide || isSharpLeftSide) borderClasses += ' rounded-tl-none';
    if(isSharpTopSide || isSharpRightSide) borderClasses += ' rounded-tr-none';
    if(isSharpBottomSide || isSharpRightSide) borderClasses += ' rounded-bl-none';
    if(isSharpBottomSide || isSharpRightSide) borderClasses += ' rounded-br-none';
    if(isTopBottomBorderHidden) borderClasses += 'border-y-0';
    if(isSideBorderHidden) borderClasses += ' border-x-0';
    
    borderClasses += size === 'xl' ? 'rounded-xl' : 'rounded-lg';

    return borderClasses;
  };

  return (
    <div className="flex">
      {leftSlot || null}
      <div className={`w-full support-colors flex flex-col text-popo ${ disabled ? 'opacity-30' : ''}` }>
        { !!label && (<div className='text-base mb-2'>{label}</div>) }
        <div
           className={classNames(
            'flex relative bg-gohan border border-solid', 
            getHeight(),
            getPadding() + ' pr-4 pl-3',
            getBorder(),
            disabled ? '' : `hover:border-${!menuOpen ? 'gohan' : 'piccolo'}`,
            disabled ? '' : ` hover:outline hover:outline-1 hover:outline-${!menuOpen ? 'gohan' : 'piccolo'}`,
            disabled ? ' cursor-not-allowed' : ' cursor-pointer',
            !menuOpen ? ` border-${isError ? 'chiChi outline outline-1 outline-chiChi' : 'beerus'}` : ` border-${isError ? 'chiChi' : 'piccolo'} outline outline-1 outline-${isError ? 'chiChi' : 'piccolo'}`,
            isRtl ? ' text-direction-rtl' : '',
          )}
          onClick={onSelectClick}
          // #TODO remove this when chiChi problem is solved
          style={isError ? { borderColor: '#ff4e64', outlineColor: '#ff4e64'} : {}}
          ref={selectRef}
        >
          <div className={classNames(
              'flex w-full',
              (size === 'xl' && value) && 'flex-col'
            )}  
          >
            {size === "xl" && value && <div className='text-trunks mb-1 text-xs h-3'>{label}</div>}

            {!search && !value && (
              <div className={classNames(
                'flex items-center justify-between text-trunks col-start-1 col-end-3 row-start-1 row-end-2 z-[1]',
                isRtl ? `pl-${ size === 'md' ? 3 : 4 }` : `pr-${ size === 'md' ? 3 : 4 }`,
                disabled ? 'cursor-not-allowed' : 'cursor-pointer'
              )}
              >
                <div>
                  {size === "xl" ? label : placeholder}
                </div>
              </div>
            )}
           
            <input 
              className={`${value || search ? 'bg-gohan' : 'absolute bg-transparent'} z-[2] text-popo focus:outline-none focus:border-none placeholder-black`}
              disabled={disabled} 
              ref={inputRef} 
              readOnly={!isSearchable}
              onKeyDown={(e) => keyDownHandler(e)} 
              onFocus={onInputFocus}
              onChange={onSearch}
              value={search || ''}
              placeholder={options.find((option: Option) => option.value === value)?.label || ''}
            />
          </div>

          <div className='ml-2 flex items-center bg-gohan'>
            <ChevronIcon 
              width={16} 
              height={16} 
              className={`${menuOpen ? "rotate-180" : ""} text-trunks`} 
            />
          </div> 

          {!!hintSlot && (
            <div className={`absolute top-full left-0 p-2 text-xs text-${isError ? 'chiChi' : 'trunks'}`}>
              {hintSlot}
            </div>
          )}

          <div
            className={`absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[3] ${ menuOpen ? 'opacity-1': 'opacity-0 -z-1'}`}
            ref={menuRef}
            style={{width: `${menuWidth ? menuWidth + "px" : "100%"}`}}
          >
            {headerSlot || null}
            {menuOpen && menuOptions.map((option: Option, index: number) => (
                <div
                  key={option.value}
                  // @TODO hover with custom color doesn't work, but only bg-goku works, why? :(
                  className={`flex items-center text-popo text-sm p-2 rounded-sm hover:bg-goku cursor-pointer ${activeOption === index && 'bg-goku'}`}
                  onClick={() => onOptionSelect(option.value)}
                >
                  {option.element}
                </div>
              ))
            }
            {!menuOptions.length && (
              <div className="flex justify-center">{noSearchResultsMessage || 'No results found.'}</div>
            )}
            {footerSlot || null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
