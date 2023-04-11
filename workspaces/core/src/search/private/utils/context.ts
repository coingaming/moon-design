import {
  createContext,
  MutableRefObject,
  RefObject,
} from 'react';

export const SelectContext = createContext<{ selected: number }>({
  selected: 0,
});

export const SearchContext = createContext<{
  search: string;
  onChangeSearch: (search: string) => void;
  onChangeOpen: (isOpen: boolean) => void;
  inputRef: RefObject<MutableRefObject<HTMLInputElement>> | null;
  isOpen: boolean;
}>({
  search: '',
  onChangeOpen: () => {},
  onChangeSearch: () => {},
  inputRef: null,
  isOpen: false,
});

export const OpenContext = createContext<{
  onChangeOpen: (value: boolean) => void;
  isOpen: boolean;
}>({
  onChangeOpen: () => undefined,
  isOpen: false,
});
