import { ReactElement } from "react";

export enum  Size {
  THREEXSMALL = 'threexsmall',
  TWOXSMALL = 'twoxsmall',
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
  TWOXLARGE = 'twoxlarge',
  THREEXLARGE = 'threexlarge',
}


type SwitchProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  button?: boolean;
  isRTL?:boolean;
  offLabel?:string;
  onLabel?:string;
  theme?:boolean;
  size: Size;
};

export default SwitchProps;