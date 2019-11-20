/**
 * @TODO Revisit to allow for 4px intervals, proposed:
 * xxsmall:  base.space * 0.25,
 * xsmall:   base.space * 0.5,
 * small:    base.space * 0.75,
 * default:  base.space,
 * medium:   base.space * 1.25,
 * large:    base.space * 1.5,
 * xlarge:   base.space * 2,
 * xxlarge:  base.space * 2.25
 * xxxlarge: base.space * 2.5,
 */

export type Space = {
  xsmall: number /* px */;
  small: number /* px */;
  default: number /* px */;
  medium: number /* px */;
  large: number /* px */;
  xlarge: number /* px */;
};
