import type Size from './Size';

export interface TagsInputRootProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'children' | 'ref'
  > {
  children?: React.ReactNode;
  label?: JSX.Element | string;
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
}
