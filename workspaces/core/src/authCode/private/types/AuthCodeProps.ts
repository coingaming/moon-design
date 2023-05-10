export const allowedCharactersValues = ['alpha', 'numeric', 'alphanumeric'] as const;

export type AuthCodeProps = {
  allowedCharacters?: typeof allowedCharactersValues[number];
  ariaLabel?: string;
  autoFocus?: boolean;
  containerClassName?: string;
  stretch?: boolean;
  expandable?: boolean;
  disabled?: boolean;
  inputSize?: 'sm' | 'md' | 'lg' | 'xl' | string;
  inputClassName?: string;
  isPassword?: boolean;
  length?: number;
  placeholder?: string;
  onChange: (res: string) => void;
  errorMessage?: string;
};
