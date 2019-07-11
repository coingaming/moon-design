import em from 'polished/lib/helpers/em';

export const mq = (
  bp: number,
  direction: 'min-width' | 'max-width' = 'min-width'
) => `@media (${direction}: ${em(bp)})`;
