type PopoverState = {
  popper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
    setArrow: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  };
  registerChild?: (child: string) => () => void;
  childrens?: string[];
};

export default PopoverState;
