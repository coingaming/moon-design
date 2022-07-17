import { ReactElement } from "react";

export interface DrawerProps {
  title?: string;
  width?: number;
  height?: number;
  content?: ReactElement;
  primaryButton?: string;
  secondaryButton?: string;
  tertiaryButton?: string;
}
