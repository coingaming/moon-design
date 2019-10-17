export const uuid = (): string =>
  Math.random()
    .toString(36)
    .substr(2, 9);
