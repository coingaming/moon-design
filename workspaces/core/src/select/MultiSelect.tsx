import React, {forwardRef, useEffect, useRef, useState} from "react";
import ChevronDown from "../private/icons/ChevronDown";
import Clear from "../private/icons/Clear";
import classNames from '../private/utils/classnames';
import {determineMenuBackgroundColor} from "./private/getBackgroundColor";
import OptionItem from "./private/OptionItem";
import Option from "./private/types/OptionProps";
import {SelectProps, MultiSelectProps} from "./private/types/SelectProps";
import useSelect from "./private/useSelect";

const MultiSelect = forwardRef<HTMLDivElement, SelectProps & MultiSelectProps>(({
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
 noSearchResultsMessage,
 noOptionsMessage,
}) => {
  const [availableOptions, setAvailableOptions] = useState(options);
  const [selectedValues, setSelectedValues] = useState<string[]>(value || []);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const placeholderElement = placeholder ?? 'Choose an option';
  const areSelectedValuesEmpty = selectedValues && selectedValues.length === 0;
  const areAllSelected = selectedValues.length === options.length;

  const selectedValuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSelectedIndexes: number[] = [];

    options.forEach((option: Option, index: number) => {
      if (selectedValues.indexOf(option.value) >= 0) newSelectedIndexes.push(index);
    });

    setSelectedIndexes(newSelectedIndexes);
    setAvailableOptions(options.filter((option: Option) => !selectedValues.includes(option.value)));
  }, [selectedValues]);

  const addSelectedItem = (selectedItem: string) => {
    const isAlreadySelected = selectedValues.find((item) => item === selectedItem);

    if (disabled) return;
    if (isAlreadySelected) return;

    const newSelectedValues = [...selectedValues, selectedItem];

    if (typeof onChange === 'function') onChange(newSelectedValues);

    setSelectedValues(newSelectedValues);
  };
  const removeSelectedItem = (selectedItem: string) => {
    if (disabled) return;

    const newSelectedValues = selectedValues.filter(
      (item) => item !== selectedItem
    );

    if (typeof onChange === 'function') {
      onChange(newSelectedValues);
    }

    setMenuOpen(false);
    setSelectedValues(newSelectedValues);
    //@ts-ignore
    inputRef?.current.focus();
  };
  const resetValues = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
    setSelectedValues([]);
  };
  const isSelectedItem = (currentItem: string) => {
    return !!selectedValues.find((item) => item === currentItem);
  };
  const getPadding = () => {
    let value = 'py-2';

    switch (size) {
      case 'xl':
        value = selectedValues.length ? 'py-2 pb-1' : 'py-4 px-4';
        break;
      case 'lg':
        value = 'py-3';
        break;
      case 'md':
        value = selectedValues.length ? 'py-2.5' : 'py-2';
        break;
    }

    return value;
  };

  const {
    menuOpen,
    search,
    menuOptions,
    inputRef,
    selectRef,
    menuRef,
    inputFocused,
    onSelectClick,
    onInputFocus,
    selectMenuItem,
    handleInputKeydown,
    setMenuOpen
  } = useSelect({
    options: availableOptions,
    allOptions: options,
    onChange: addSelectedItem,
    value,
    hoveredIndex,
    selectedIndex,
    selectedIndexes,
    isSearchable,
    disabled,
    amountOfVisibleItems,
    setHoveredIndex,
    setSelectedIndex,
    onBackspace: () => removeSelectedItem(selectedValues[selectedValues.length - 1])
  });
  // @ts-ignore
  const isOverflown = selectedValuesRef?.current?.scrollHeight > selectRef?.current?.clientHeight;

  return (<div className="flex">
      {left || null}
      <div className={`w-full support-colors flex flex-col text-popo ${ disabled ? 'opacity-30' : ''}` }>
        { !!label && size !== 'xl' && (<div className='text-base mb-2'>{label}</div>) }
        <div
          className={classNames(
            'h-auto flex relative bg-gohan',
            'pr-4 pl-3',
            disabled ? ' cursor-not-allowed' : ' cursor-pointer',
            (isSharpTopSide || isSharpLeftSide) && ' rounded-tl-none',
            (isSharpTopSide || isSharpRightSide) && ' rounded-tr-none',
            (isSharpBottomSide || isSharpRightSide) && ' rounded-bl-none',
            (isSharpBottomSide || isSharpRightSide) && ' rounded-br-none',
            (isTopBottomBorderHidden) && 'border-y-0',
            (isSideBorderHidden) && ' border-x-0',
            size === 'xl' ? 'rounded-xl' : 'rounded-lg',
            isRtl ? ' text-direction-rtl' : '',
            isError ? ' shadow-input-err' : ` shadow-input ${
              disabled ? '' : inputFocused ? 'shadow-input-focus' : 'hover:shadow-input-hov'
            }`,
            getPadding(),
          )}
          ref={selectRef}
          onClick={onSelectClick}
          style={isError ? { borderColor: '#ff4e64', outlineColor: '#ff4e64'} : {}}
        >
          <div className="flex flex-col w-full">
            {size === "xl" && !!selectedValues.length && <div className='text-trunks mb-2 text-xs h-3'>{label}</div>}
            <div
              className={classNames(
                'items-center shrink grow basis-0 flex-wrap',
                areSelectedValuesEmpty ? 'grid' : 'flex',
              )}
              ref={selectedValuesRef}
            >
              {selectedValues.map((value: string) => {
                const selectedOption = options.find((opt: Option) => opt.value === value);

                return (<OptionItem
                  option={selectedOption!}
                  onRemove={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    removeSelectedItem(selectedOption!.value);
                  }}
                  selectSize={size}
                  key={value}
                  verticalMargins={isOverflown}
                />);
              })}
              <div className="m-0.5 text-xs shrink grow basis-auto inline-grid grid-cols-searchableInput col-start-1 col-end-3 row-start-1 row-end-2 after:content-[attr(data-value)] after:row-start-1 after:col-start-2 after:row-end-auto after:col-end-auto after:min-w-[2px] after:whitespace-pre after:text-xs" data-value={search}>
                <input
                  className={`w-full text-xs bg-gohan text-popo focus:outline-none focus:border-none row-start-1 col-start-2 row-end-auto col-end-auto`}
                  style={{minWidth: '2px'}}
                  disabled={disabled}
                  ref={inputRef}
                  readOnly={!isSearchable}
                  onKeyDown={(e) => handleInputKeydown(e)}
                  onFocus={() => { if (!menuOpen && !isSearchable) onInputFocus(true) }}
                  onBlur={() => onInputFocus()}
                  value={search}
                />
              </div>
              {!selectedValues?.length && !search && (
                <div className={classNames(
                  'flex grow items-center justify-between text-trunks col-start-1 col-end-3 row-start-1 row-end-2',
                  isRtl ? `pl-${ size === 'md' ? 3 : 4 }` : `pr-${ size === 'md' ? 3 : 4 }`,
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                )}><div>{size === "xl" ? label : placeholderElement}</div></div>
              )}
            </div>
          </div>
          <div className='ml-2 flex items-center bg-gohan'>
            {!areSelectedValuesEmpty && (<Clear
              width={16}
              height={16}
              className="mr-3 text-trunks"
              onClick={resetValues}
            />)}
            <ChevronDown
              width={16}
              height={16}
              className={`${menuOpen ? "rotate-180" : ""} text-trunks`}
            />
          </div>
          <div
            className={classNames(
              'absolute rounded-xl bg-gohan w-full left-0 top-full mt-2 py-2 px-1 shadow-xl overflow-auto z-[3]',
              menuOpen ? 'opacity-1': 'opacity-0 -z-1',
              menuWidth && `w-[${menuWidth}rem]`
            )}
            ref={menuRef}
            style={{width: `${menuWidth ? menuWidth + "rem" : "100%"}`}}
          >
            {header ?? <></>}
            {(search || menuOpen) && menuOptions.map((option: Option, index: number) =>
              !isSelectedItem(option.value) && (<div
                key={option.value}
                id={`index-${index}`}
                className={classNames(
                  'flex items-center text-popo text-sm p-2 mb-1',
                  size === 'xl' ? 'rounded-lg ' : 'rounded-sm',
                  determineMenuBackgroundColor(index, hoveredIndex, -1)
                )}
                onMouseOver={() => setHoveredIndex(index)}
                onClick={() => selectMenuItem(option.value)}
              >{option.element}</div>)
            )}
            {!menuOptions.length && !areAllSelected && (<div className="flex justify-center">{noSearchResultsMessage || 'No results found.'}</div>)}
            {areAllSelected && (<div className="flex justify-center">{noOptionsMessage || "No options"}</div>)}
            {footer || null}
          </div>
          {!!hint && (<div className={`absolute top-full left-0 p-2 text-xs text-${isError ? 'chiChi' : 'trunks'}`}>
            {hint}
          </div>)}
        </div>
      </div>
    </div>
  );
});

export default MultiSelect;
