/* Converts a string to 'hyphenated-lowercase' */
export const hyphenate = (str: string) =>
  str.replace(/\W+/g, '-').toLowerCase();
