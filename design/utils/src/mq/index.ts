import em from 'polished/lib/helpers/em';

export const mq = (bp: number) => `@media (min-width: ${em(bp)})`;
