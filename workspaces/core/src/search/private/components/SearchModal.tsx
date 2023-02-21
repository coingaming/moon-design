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
import { Transition, Dialog } from '@headlessui/react';
import { RenderLink } from '../types';
import {
  OpenContext,
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
  clear: string | ReactNode;
};

const Modal: React.FC<{
  isOpen: boolean;
  inputRef: React.RefObject<any>;
  onChangeOpen: (isOpen: boolean) => void;
  backdrop: ReactNode;
  children?: ReactNode;
}> = ({ children, isOpen, inputRef, onChangeOpen, backdrop }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={inputRef}
        as="div"
        className="moon"
        onClose={() => {
          onChangeOpen(false);
        }}
      >
        <div className="moon-content antialiased">
          {backdrop}

          <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="flex w-screen h-screen sm:w-full sm:h-[450px] items-start justify-center md:p-4 z-50">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full bg-gohan shadow-moon-md rounded-moon-s-md sm:max-w-xl flex flex-col sm:overflow-hidden divide-y dark:divide-beerus">
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export function SearchModal({
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
  backdrop,
  clear,
}: SearchProps) {
  const inputRef = useRef<MutableRefObject<HTMLInputElement>>(null);

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
    <div onKeyDown={onKeyDown}>
      <Modal {...{ isOpen, inputRef, onChangeOpen, backdrop }}>
        <div className="w-full h-full bg-gohan shadow-moon-md rounded-moon-s-md max-w-xl flex flex-col overflow-hidden divide-y dark:divide-beerus">
          <PageContext.Provider
            value={{
              setSearchPrefix,
              searchPrefix,
              page,
            }}
          >
            <Input
              onChange={onChangeSearch}
              placeholder={placeholder}
              prefix={searchPrefix}
              value={search}
              ref={inputRef as unknown as Ref<HTMLInputElement>}
              clear={clear}
            />
          </PageContext.Provider>

          <div
            className="flex-1 overflow-y-auto focus:outline-none p-2 space-y-4"
            tabIndex={-1}
          >
            <OpenContext.Provider value={{ isOpen, onChangeOpen }}>
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
            </OpenContext.Provider>
          </div>
        </div>
      </Modal>
    </div>
  );
}

SearchModal.Page = Page;
SearchModal.List = List;
SearchModal.ListItem = ListItem;
SearchModal.FreeSearchAction = FreeSearchAction;
SearchModal.Backdrop = Backdrop;
SearchModal.ListHeading = ListHeading;
SearchModal.Trigger = Trigger;
