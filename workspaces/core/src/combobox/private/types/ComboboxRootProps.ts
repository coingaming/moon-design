import { BaseOptionType } from "../../../select/Select";
import Placement from "./Placement";

interface ComboboxRootProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'children' | 'ref'
  > {
  value?: BaseOptionType;
  displayValue?: (value: BaseOptionType) => string;
  label?: string;
  onChange(value: unknown): void;
  onQueryChange(value: string): void;
  onClear?: () => void;
  isError?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  className?: string;
  multiple?: boolean;
  position?: Placement;
  children?: React.ReactNode | ((data: { open?: boolean }) => React.ReactNode);
  placeholder?: string;
  ref?: React.Ref<React.ElementType>;
}

export default ComboboxRootProps;
