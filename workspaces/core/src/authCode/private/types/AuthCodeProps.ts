import allowedCharactersValues from '../utils/allowedCharactersValues';

type AuthCodeProps = {
  allowedCharacters?: (typeof allowedCharactersValues)[number];
  ariaLabel?: string;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  isPassword?: boolean;
  length?: number;
  placeholder?: string;
  onChange: (res: string) => void;
  isValid?: boolean;
};

export default AuthCodeProps;
