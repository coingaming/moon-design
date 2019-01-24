import { base } from "./base";

type Spacing = {
  xsmall: number /* px */;
  small: number /* px */;
  default: number /* px */;
  medium: number /* px */;
  large: number /* px */;
  xlarge: number /* px */;
};

const spacing: Spacing = {
  xsmall: base.spacing * 0.25,
  small: base.spacing * 0.5,
  default: base.spacing,
  medium: base.spacing * 1.5,
  large: base.spacing * 2,
  xlarge: base.spacing * 2.5
};

export { Spacing, spacing };
