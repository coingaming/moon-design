import type VariantProps from './VariantProps';

type CheckboxProps = {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  variant?: VariantProps;
  checked?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dir?: 'ltr' | 'rtl' | 'auto';
  readOnly?: boolean;
};

export default CheckboxProps;
