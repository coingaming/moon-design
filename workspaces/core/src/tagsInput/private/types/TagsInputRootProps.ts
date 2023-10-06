import Size from "./Size";
import Case from "./Case";

export interface TagsInputRootProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'children' | 'ref'
  > {
  children?: React.ReactNode;
  label?: string;
  selected: string[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  type?: string;
  size?: Size;
  onEnter?: (value: string) => void;
  onClear?: (index: number) => void;
  tagsCase?: Case;
  popper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
};
