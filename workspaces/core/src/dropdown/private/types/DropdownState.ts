type DropdownState = {
  value?: any;
  isError?: boolean;
  disabled?: boolean;
  onClear?: () => void;
  pooper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
  size?: 'sm' | 'md' | 'lg' | string;
};

export default DropdownState