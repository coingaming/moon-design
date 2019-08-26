import polishedEm from 'polished/lib/helpers/em';

export const em = (value: string | number, base?: string | number) =>
  polishedEm(value, base);
