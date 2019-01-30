import { base } from './base';

type Border = {
  radius: {
    small: number /* in `px` */;
    default: number /* in `px` */;
  };
  style: string;
  width: number /* in `px` */;
};

const border: Border = {
  radius: {
    small: base.spacing * 0.25,
    default: base.spacing * 0.5,
  },
  style: 'solid',
  width: 1,
};

export { Border, border };
