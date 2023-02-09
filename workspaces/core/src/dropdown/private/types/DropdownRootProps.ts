import type Placement from './Placement';

interface DropdownRootProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'children'
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
}

export default DropdownRootProps;
