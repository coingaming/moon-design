import {
  createContext,
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from 'react';

export const SelectContext = createContext<{ selected: number }>({
  selected: 0,
});

export const PageContext = createContext<{
  setSearchPrefix?: Dispatch<SetStateAction<string[] | undefined>>;
  searchPrefix?: string[];
  page?: string;
}>({
  searchPrefix: undefined,
  page: undefined,
});

export const SearchContext = createContext<{
  search: string;
  onChangeSearch: (search: string) => void;
  onChangeOpen: (isOpen: boolean) => void;
  inputRef: RefObject<MutableRefObject<HTMLInputElement>> | null;
}>({
  search: '',
  onChangeOpen: () => {},
  onChangeSearch: () => {},
  inputRef: null,
});

export const OpenContext = createContext<{
  onChangeOpen: (value: boolean) => void;
  isOpen: boolean;
}>({
  onChangeOpen: () => undefined,
  isOpen: false,
});
