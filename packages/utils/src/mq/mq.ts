import em from '../em/em';

const mq = (bp: number, direction: 'min-width' | 'max-width' = 'min-width') =>
  `@media (${direction}: ${direction === 'max-width' ? em(bp - 1) : em(bp)})`;

export default mq;
