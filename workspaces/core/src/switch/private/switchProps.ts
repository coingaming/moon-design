import { ReactElement } from "react";

export enum  Size {
  XSMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  MEDIUMBUTTONS ='medium',
  LARGE = 'large'
}


type SwitchProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  button?: {
    onLabel: string;
    offLabel: string;
  };
  isRTL?:boolean;
  theme?:boolean;
  size: Size;
};

export default SwitchProps;