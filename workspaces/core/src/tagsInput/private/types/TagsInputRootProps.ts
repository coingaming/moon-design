import Case from "./Case";
import Size from "./Size";

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
  isUppercase?: boolean;
};
