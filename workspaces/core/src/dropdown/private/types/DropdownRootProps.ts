import type Placement from './Placement';

interface DropdownRootProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'children' | 'ref'
  > {
  value: unknown;
  onChange(value: unknown): void;
  onClear?: () => void;
  isError?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  className?: string;
  multiple?: boolean;
  position?: Placement;
  children?: React.ReactNode | ((data: { open?: boolean }) => React.ReactNode);
  ref?: React.Ref<HTMLElement>;
}

export default DropdownRootProps;
