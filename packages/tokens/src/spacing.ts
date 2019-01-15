import { base } from "./base";

interface Spacing {
  [key: string]: number /* defined in `px` */;
}

export const spacing: Spacing = {
  xsmall: base.spacing * 0.25,
  small: base.spacing * 0.5,
  default: base.spacing,
  medium: base.spacing * 1.5,
  large: base.spacing * 2,
  xlarge: base.spacing * 2.5
};
