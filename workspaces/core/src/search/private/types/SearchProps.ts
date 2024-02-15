type SearchProps = {
  onChangeSelected?: (value: number) => void;
  onChangeSearch: (search: string) => void;
  onChangeOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  selected?: number;
  isOpen: boolean;
  search: string;
  className?: string;
};

export default SearchProps;
