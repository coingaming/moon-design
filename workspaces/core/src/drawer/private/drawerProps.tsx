import { ReactElement } from "react";

export interface DrawerProps {
  isOpen?: boolean;
  title?: string | JSX.Element;
  viewportWidth?: number;
  viewportHeight?: number;
  content?: ReactElement;
  primaryButton?: ReactElement;
  secondaryButton?: ReactElement;
  tertiaryButton?: ReactElement;
  handleToggle?: (newValue: boolean) => any;
}
