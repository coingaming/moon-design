import React, {
  Fragment,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Transition as HeadlessTransition } from '@headlessui/react';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import useClickOutside from '../../../private/hooks/useClickOutside';
import {
  SearchContext,
  SelectContext,
} from '../utils/context';

import NoResults from './NoResults';
import ResultItem from './ListItem';
import { Input } from './Input';

interface SearchProps {
  onChangeSelected?: (value: number) => void;
  onChangeSearch: (search: string) => void;
  onChangeOpen: (isOpen: boolean) => void;
  children: ReactNode;
  selected?: number;
  isOpen: boolean;
  search: string;
  className?: string;
};

const SearchRoot = ({
  selected: selectedParent,
  onChangeSelected,
  onChangeSearch,
  onChangeOpen,
  children,
  isOpen,
  className,
  search,
}: SearchProps) => {
  const [ref, hasClickedOutside] = useClickOutside();
  const inputRef = useRef<MutableRefObject<HTMLInputElement>>(null);
  const [selected, setSelected] =
    typeof selectedParent === 'number' && onChangeSelected
      ? [selectedParent, onChangeSelected]
      : useState<number>(0);

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

  React.useEffect(() => {
    if (hasClickedOutside) {
      onChangeOpen(false);
    }
  });

  return (
    <div ref={ref} onKeyDown={onKeyDown}>
      <div
        className={mergeClassnames(
          'relative w-full h-full bg-gohan flex flex-col divide-y dark:divide-beerus',
          'z-0',
          isOpen ? 'rounded-t-moon-s-sm' : 'rounded-moon-s-sm',
          className
        )}
      >
        <SearchContext.Provider value={{ search, onChangeOpen, onChangeSearch, inputRef }}>
          <SelectContext.Provider value={{ selected }}>
            {children}
          </SelectContext.Provider>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

const Result = ({ isOpen, children }: { isOpen: boolean, children: ReactNode }) => {
  return <HeadlessTransition
    show={isOpen}
    as="div"
    enter="ease-out duration-300"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <div
      className={mergeClassnames(
        'absolute w-full flex-1 focus:outline-none p-2 space-y-4 bg-gohan shadow-moon-md moon-search-list',
        'z-1',
        isOpen ? 'rounded-b-moon-s-sm' : 'rounded-moon-s-sm'
      )}
      tabIndex={-1}
    >
      {children}
    </div>
  </HeadlessTransition>
}

const ResultNoTransition = ({ isOpen, children }: { isOpen: boolean, children: ReactNode }) => {
  if (!isOpen) {
    return null
  }
  return <div
    className={mergeClassnames(
      'absolute top-10 w-full flex-1 focus:outline-none p-2 space-y-4 bg-gohan shadow-moon-md moon-search-list',
      'z-1',
      isOpen ? 'rounded-b-moon-s-sm' : 'rounded-moon-s-sm'
    )}
    tabIndex={-1}
  >
    {children}
  </div>
}

const ResultHeading: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <h5
    className={mergeClassnames(
      'text-bulma text-sm font-medium px-2 py-1',
      className
    )}
  >
    {children}
  </h5>
);

const List = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <ul
      className={mergeClassnames('min-w-full space-y-1', className)}
      tabIndex={-1}
    >
      <li>{children}</li>
    </ul>
  );
}

const Search = Object.assign(
  SearchRoot,
  {
    Input,
    NoResults,
    Result,
    ResultNoTransition,
    ResultItem,
    ResultHeading,
    // List
  }
)

export default Search
