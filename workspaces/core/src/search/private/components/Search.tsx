import React, {
  Fragment,
  MutableRefObject,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Transition } from '@headlessui/react';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import useClickOutside from '../../../private/hooks/useClickOutside';
import { RenderLink } from '../types';
import {
  PageContext,
  RenderLinkContext,
  SearchContext,
  SelectContext,
} from '../utils/context';
import { Backdrop } from './Backdrop';
import FreeSearchAction from './FreeSearchAction';
import Input from './Input';
import List, { ListHeading } from './List';
import ListItem from './ListItem';
import Page from './Page';
import { Trigger } from './Trigger';

type SearchProps = {
  onChangeSelected?: (value: number) => void;
  onChangeSearch: (search: string) => void;
  onChangeOpen: (isOpen: boolean) => void;
  renderLink?: RenderLink;
  placeholder?: string;
  children: ReactNode;
  selected?: number;
  isOpen: boolean;
  search: string;
  page?: string;
  backdrop?: ReactNode;
  className?: string;
  clear: string | ReactNode;
  autoFocus?: boolean;
};

export function Search({
  selected: selectedParent,
  placeholder = 'Search',
  onChangeSelected,
  onChangeSearch,
  onChangeOpen,
  renderLink,
  children,
  isOpen,
  search,
  page,
  className,
  clear,
  autoFocus,
}: SearchProps) {
  const inputRef = useRef<MutableRefObject<HTMLInputElement>>(null);
  const [ref] = useClickOutside();

  const [selected, setSelected] =
    typeof selectedParent === 'number' && onChangeSelected
      ? [selectedParent, onChangeSelected]
      : useState<number>(0);

  const [searchPrefix, setSearchPrefix] = useState<string[] | undefined>();

  function handleChangeSelected(direction?: 'up' | 'down') {
    const items = document.querySelectorAll('.moon-search-list-item');

    let index = 0;
    let newIndex = 0;
    let newItem: Element;

    if (direction === 'down') {
      items.forEach((_, i) => {
        if (i === selected) {
          index = i;
        }
      });

      newIndex = index === items.length - 1 ? 0 : index + 1;
    } else if (direction === 'up') {
      items.forEach((_, i) => {
        if (i === selected) {
          index = i;
        }
      });

      newIndex = !index ? items.length - 1 : index - 1;
    } else {
      setSelected(0);
    }

    newItem = items[newIndex];

    if (newItem && typeof newIndex === 'number') {
      setSelected(newIndex);
      newItem.scrollIntoView({
        behavior: 'smooth',
        block: newIndex ? 'center' : 'end',
      });
    }
  }

  function handleSelect() {
    const items = document.querySelectorAll(
      '.moon-search-list-item'
    ) as NodeListOf<HTMLButtonElement | HTMLAnchorElement>;

    let index = 0;
    let item: HTMLAnchorElement | HTMLButtonElement;

    items.forEach((_, i) => {
      if (i === selected) {
        index = i;
      }
    });

    item = items[index];

    if (item) {
      item.click();

      if (
        item.attributes.getNamedItem('data-close-on-select')?.value === 'true'
      ) {
        onChangeOpen(false);
      }
    }
  }

  useEffect(() => {
    handleChangeSelected();
  }, [search]);

  useEffect(() => {
    setSelected(0);
  }, [page]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (
        e.key === 'ArrowDown' ||
        (e.ctrlKey && e.key === 'n') ||
        (e.ctrlKey && e.key === 'j')
      ) {
        e.preventDefault();
        e.stopPropagation();
        handleChangeSelected('down');
      } else if (
        e.key === 'ArrowUp' ||
        (e.ctrlKey && e.key === 'p') ||
        (e.ctrlKey && e.key === 'k')
      ) {
        e.preventDefault();
        e.stopPropagation();
        handleChangeSelected('up');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleSelect();
      }
    },
    [handleChangeSelected, handleSelect]
  );

  return (
    <div ref={ref} onKeyDown={onKeyDown}>
      <div
        className={mergeClassnames(
          'relative w-full h-full bg-gohan flex flex-col divide-y dark:divide-beerus',
          isOpen ? 'rounded-t-moon-s-sm' : 'rounded-moon-s-sm',
          className
        )}
      >
        <PageContext.Provider
          value={{
            setSearchPrefix,
            searchPrefix,
            page,
          }}
        >
          <Input
            onChange={onChangeSearch}
            onFocus={() => {
              onChangeOpen(true);
            }}
            onBlur={() => {
              onChangeOpen(false);
            }}
            placeholder={placeholder}
            prefix={searchPrefix}
            value={search}
            ref={inputRef as unknown as Ref<HTMLInputElement>}
            clear={clear}
            autoFocus={autoFocus}
          />
        </PageContext.Provider>

        <Transition
          show={isOpen}
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={mergeClassnames(
              'absolute z-1 top-10 w-full flex-1 focus:outline-none p-2 space-y-4 bg-gohan shadow-moon-md moon-search-list',
              isOpen ? 'rounded-b-moon-s-sm' : 'rounded-moon-s-sm'
            )}
            tabIndex={-1}
          >
            <PageContext.Provider
              value={{ page, searchPrefix, setSearchPrefix }}
            >
              <SearchContext.Provider value={{ search }}>
                <SelectContext.Provider value={{ selected }}>
                  <RenderLinkContext.Provider value={{ renderLink }}>
                    {children}
                  </RenderLinkContext.Provider>
                </SelectContext.Provider>
              </SearchContext.Provider>
            </PageContext.Provider>
          </div>
        </Transition>
      </div>
    </div>
  );
}

Search.Page = Page;
Search.List = List;
Search.ListItem = ListItem;
Search.FreeSearchAction = FreeSearchAction;
Search.Backdrop = Backdrop;
Search.ListHeading = ListHeading;
Search.Trigger = Trigger;
