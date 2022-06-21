import React, {ChangeEvent, useEffect, useLayoutEffect, useRef, useState} from "react";
import classNames from '../private/utils/classnames';
import ChevronIcon from "./private/icons/ChevronIcon";
import RemoveIcon from "./private/icons/RemoveIcon";
import OptionItem from "./private/OptionItem";
import Option from "./private/types/OptionProps";
import { SelectProps, MultiSelectProps } from "./private/types/SelectProps";

const MultiSelect: React.FC<SelectProps & MultiSelectProps> = ({
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
  noSearchResultsMessage,
  noOptionsMessage,
  className
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(0);
  const [search, setSearch] = useState('');
  const [menuOptions, setMenuOptions] = useState<Option[]>(options || []);
  const [selectedValues, setSelectedValues] = useState<string[]>(value || []);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const selectedValuesRef = useRef<HTMLDivElement>(null);

  const placeholder = placeholderSlot ?? placeholderValue ?? 'Choose an option';
  const areSelectedValuesEmpty = selectedValues && selectedValues.length === 0;
  const areAllSelected = selectedValues.length === options.length;

  //@ts-ignore
  const isOverflown = selectedValuesRef?.current?.scrollHeight > selectRef?.current?.clientHeight;

  useEffect(() => {
    const menuElement = menuRef?.current;

    if (
      menuOpen &&
      menuElement &&
      menuElement.style &&
      amountOfVisibleItems &&
      amountOfVisibleItems < menuElement.childNodes?.length
    ) {
      //@ts-ignore
      menuElement.style.height = `${(menuRef.current.clientHeight / menuElement.childNodes.length) * amountOfVisibleItems}px`;
    }
    else if (menuElement?.style) {
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
          setMenuOptions(options);
        }
      } 
    }

    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    setMenuOptions(options.filter((option: Option) => !selectedValues.includes(option.value)));
  }, [selectedValues]);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(menuOpen && menuOptions.length) {
      if (e.key === 'ArrowUp' && activeOption > 0) {
        e.preventDefault();
        setActiveOption(activeOption - 1);
      } else if (e.key === 'ArrowDown' && activeOption < menuOptions.length - 1) {
        e.preventDefault();
        setActiveOption(activeOption + 1);
      } else if (e.key === 'ArrowDown' && activeOption === menuOptions.length - 1) {
        e.preventDefault();
        setActiveOption(0);
      } else if (e.key === "Enter") {
        onChange && onChange([...selectedValues, menuOptions[activeOption]?.value]);
        setSelectedValues([...selectedValues, menuOptions[activeOption]?.value]);
        setActiveOption(0);
      }
    }

    if (e.key === "Tab") {
      setMenuOpen(false);
    }
  };

  const onSelectClick = (e: React.MouseEvent) => {
    if (!disabled) {
      //@ts-ignore
      if( menuRef.current && !menuRef?.current.contains(e.target)) {
        setMenuOpen(!menuOpen); 
      }
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
    if(e.target.value && !menuOpen) {
      setMenuOpen(true);
    }

    if(isSearchable && options) {
      setSearch(e.target.value);
      setMenuOptions(options.filter((option: Option) => {
        return option.value.toLowerCase().includes(e.target.value.toLowerCase()) && !selectedValues.includes(option.value)
      }));
    };
  };

  const addSelectedItem = (selectedItem: string) => {
    const isAlreadySelected = selectedValues.find((item) => item === selectedItem);
    if (isAlreadySelected) return;

    const newSelectedValues = [...selectedValues, selectedItem];

    if (typeof onChange === 'function') {
      onChange(newSelectedValues);
    }

    setSelectedValues(newSelectedValues);
    setSearch('');
  };

  const removeSelectedItem = (selectedItem: string) => {
    if (disabled) return;
    const newSelectedValues = selectedValues.filter(
      (item) => item !== selectedItem
    );
    if (typeof onChange === 'function') {
      onChange(newSelectedValues);
    }

    setSelectedValues(newSelectedValues);
    //@ts-ignore
    inputRef?.current.focus();
  };

  const resetValues = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValues([]);
  };

  const isSelectedItem = (currentItem: string) => {
    return !!selectedValues.find((item) => item === currentItem);
  };

  // const getHeight = () => {
  //   if(size === 'md') return 'h-10';
  //   if(size === 'lg') return 'h-12';
  //   if(size === 'xl') return 'h-14';
  //   return 'h-10';
  // };

  const getPadding = () => {
    if(size === 'md') return selectedValues.length ? 'py-2.5' : 'py-2';
    if(size === 'lg') return 'py-3';
    if(size === 'xl') return selectedValues.length ? 'py-2 pb-1' : 'py-4 px-4';
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

        { !!label && size !== 'xl' && (<div className='text-base mb-2'>{label}</div>) }

        <div
          className={classNames(
            'h-auto flex relative bg-gohan border border-solid pr-4 pl-3', 
            // getHeight(),
            getPadding() + ' pr-4 pl-3',
            getBorder(),
            disabled ? '' : `hover:border-${!menuOpen ? 'gohan' : 'piccolo'}`,
            disabled ? '' : ` hover:outline hover:outline-1 hover:outline-${!menuOpen ? 'gohan' : 'piccolo'}`,
            disabled ? ' cursor-not-allowed' : ' cursor-pointer',
            !menuOpen ? ` border-${isError ? 'chiChi outline outline-1 outline-chiChi' : 'beerus'}` : ` border-${isError ? 'chiChi' : 'piccolo'} outline outline-1 outline-${isError ? 'chiChi' : 'piccolo'}`,
            isRtl ? ' text-direction-rtl' : '',
          )}
          onClick={onSelectClick}
          style={isError ? { borderColor: '#ff4e64', outlineColor: '#ff4e64'} : {}}
          ref={selectRef}
        >
          <div className="flex flex-col w-full">
            {size === "xl" && !!selectedValues.length && <div className='text-trunks mb-2 text-xs h-3'>{label}</div>}
            
            <div className={classNames(
                'items-center shrink grow basis-0 flex-wrap',
                areSelectedValuesEmpty ? 'grid' : 'flex',
              )}
              ref={selectedValuesRef}
            >
              {selectedValues.map((value: string, index: number) => {
                const selectedOption = options.find((opt: Option) => opt.value === value);
                return (
                  <OptionItem 
                    option={selectedOption!}
                    onRemove={(e: React.MouseEvent) => { 
                      e.stopPropagation();
                      removeSelectedItem(selectedOption!.value);
                    }}
                    selectSize={size}
                    key={value}
                    verticalMargins={isOverflown}
                  />
                )
              })}

              <div className="m-0.5 text-xs shrink grow basis-auto inline-grid grid-cols-searchableInput col-start-1 col-end-3 row-start-1 row-end-2 after:content-[attr(data-value)] after:row-start-1 after:col-start-2 after:row-end-auto after:col-end-auto after:min-w-[2px] after:whitespace-pre after:text-xs" data-value={search}>
                <input 
                  className={`w-full text-xs bg-gohan text-popo focus:outline-none focus:border-none row-start-1 col-start-2 row-end-auto col-end-auto`}
                  style={{minWidth: '2px'}}
                  disabled={disabled} 
                  ref={inputRef} 
                  //@ts-ignore
                  readOnly={!isSearchable}
                  onKeyDown={(e) => keyDownHandler(e)} 
                  onFocus={onInputFocus}
                  onChange={onSearch}
                  value={search}
                />
              </div>
            
              {!selectedValues?.length && !search && (
                <div className={classNames(
                  'flex grow items-center justify-between text-trunks col-start-1 col-end-3 row-start-1 row-end-2',
                  isRtl ? `pl-${ size === 'md' ? 3 : 4 }` : `pr-${ size === 'md' ? 3 : 4 }`,
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                )}
                >
                  <div>
                    {size === "xl" ? label : placeholder}
                  </div>
                </div>
              )}
            </div>
          </div>
          

          <div className='ml-2 flex items-center bg-gohan'>
            {!areSelectedValuesEmpty && (
              <RemoveIcon 
                width={16} 
                height={16} 
                className="mr-3 text-trunks" 
                onClick={resetValues}
              />
            )}
            <ChevronIcon 
              width={16} 
              height={16} 
              className={`${menuOpen ? "rotate-180" : ""} text-trunks`} 
            />
          </div>        

          <div
            className={classNames(
              'absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[3]',
              menuOpen ? 'opacity-1': 'opacity-0 -z-1',
              menuWidth && `w-[${menuWidth}px]`
            )}
            ref={menuRef}
            style={{width: `${menuWidth ? menuWidth + "px" : "100%"}`}}
          >
            {headerSlot || null}
            {(search || menuOpen ) && menuOptions.map((option: Option, index: number) => {
              return !isSelectedItem(option.value) &&
                (
                  <div
                    key={option.value}
                    // @TODO hover with custom color doesn't work, but only bg-goku works, why? :(
                    className={`flex items-center text-popo text-sm p-2 rounded-sm hover:bg-goku ${activeOption === index && 'bg-goku'}`}
                    onClick={() => addSelectedItem(option.value)}
                  >
                    {option.element}
                  </div>
                )
              })
            }
            {!menuOptions.length && !areAllSelected && (
              <div className="flex justify-center">{noSearchResultsMessage || 'No results found.'}</div>
            )}
            {areAllSelected && (
              <div className="flex justify-center">{noOptionsMessage || "No options"}</div>
            )}
            {footerSlot || null}
          </div>

          {!!hintSlot && (
            <div className={`absolute top-full left-0 p-2 text-xs text-${isError ? 'chiChi' : 'trunks'}`}>
              {hintSlot}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
