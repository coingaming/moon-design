import type Placement from "./Placement";

type DropdownRootProps = {
  value: unknown;
  onChange(value: unknown): void;
  onClear?: () => void;
  isError?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  className?: string;
  multiple?: boolean;
  position?: Placement;
};

export default DropdownRootProps