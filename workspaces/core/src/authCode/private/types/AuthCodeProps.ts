import { ErrorPositions } from './MessageWrapperProps';

export interface AuthCodeProps {
  onSubmit?: (value: string) => any;
  onChange?: (value: string) => any;
  isRtl?: boolean;
  placeholder?: string;
  errorMessage?: string;
  errorPosition?: ErrorPositions | keyof typeof ErrorPositions;
  onlyDigits?: boolean;
  stretch?: boolean;
  length?: number;
  'data-testid'?: string;
}
