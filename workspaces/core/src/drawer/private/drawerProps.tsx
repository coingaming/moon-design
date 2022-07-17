import { ReactElement } from "react";

export interface DrawerProps {
  isOpen?: boolean;
  title?: string;
  width?: number;
  height?: number;
  content?: ReactElement;
  primaryButton?: string;
  secondaryButton?: string;
  tertiaryButton?: string;
  handleToggle?: (newValue: boolean) => any
}
