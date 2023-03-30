import { createContext, Dispatch, SetStateAction } from 'react';

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
  onChangeOpen: any;
  onChangeSearch: any;
}>({
  search: '',
  onChangeOpen: () => {
    console.log('test onChangeOpen');
  },
  onChangeSearch: () => {
    console.log('test onChangeSearch');
  },
});

export const OpenContext = createContext<{
  onChangeOpen: (value: boolean) => void;
  isOpen: boolean;
}>({
  onChangeOpen: () => undefined,
  isOpen: false,
});
