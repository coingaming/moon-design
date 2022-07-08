import { ReactElement } from "react";

export interface DrawerProps {
  title?: string;
  content?: React.ReactElement;
  buttonOneLabel?: string;
  buttonTwoLabel?: string;
  buttonThreeLabel?: string;
}
