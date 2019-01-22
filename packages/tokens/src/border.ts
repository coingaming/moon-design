import { base } from "./base";

type Border = {
  radius: {
    [key: string]: number /* in `px` */;
  };
  style: string;
  width: number /* in `px` */;
};

export const border: Border = {
  radius: {
    small: base.spacing * 0.25,
    default: base.spacing * 0.5
  },
  style: "solid",
  width: 1
};
