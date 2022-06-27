import {useCallback, useEffect, useRef, useState} from "react";
import Option from "./types/OptionProps";
import SelectProps from "./types/SelectProps";

interface Props {
  options: SelectProps["options"],
  onChange: SelectProps["onChange"],
  value: SelectProps["value"],
  isSearchable: SelectProps["isSearchable"],
  disabled: SelectProps["disabled"],
  amountOfVisibleItems: SelectProps["amountOfVisibleItems"],
  hoveredIndex: number,
  selectedIndex: number,
  setSelectedIndex: (index: number) => any,
  setHoveredIndex: (index: number) => any
}

const useEventListeners = ({
 options,
 onChange,
 value,
 hoveredIndex = -1,
 selectedIndex = -1,
 isSearchable,
 disabled,
 amountOfVisibleItems,
 setHoveredIndex,
 setSelectedIndex
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [menuOptions, setMenuOptions] = useState<Option[]>(options || []);
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef(null);
  const menuRef = useRef(null);

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

  return { menuOpen, search, menuOptions, inputFocused, inputRef, selectRef, menuRef, onSelectClick, onInputFocus, selectMenuItem, handleInputKeydown };
};

export default useEventListeners;
