import TextInputTypes from './TextInputTypes';

export default interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  inputSize?: 'md' | 'lg' | 'xl';
  type: TextInputTypes | string;
  label?: JSX.Element | string;
  placeholder?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  showPasswordText?: JSX.Element | string;
  backgroundColor?: string;
  isSharpLeftSide?: boolean;
  isSharpRightSide?: boolean;
  isSharpTopSide?: boolean;
  isSharpBottomSide?: boolean;
  isTopBottomBorderHidden?: boolean;
  isSideBorderHidden?: boolean;
  isFirst?: boolean;
}
