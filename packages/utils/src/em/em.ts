import polishedEm from 'polished/lib/helpers/em';

const em = (value: string | number, base?: string | number) =>
  polishedEm(value, base);

export default em;
