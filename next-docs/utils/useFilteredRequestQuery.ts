export type Patterns = {
  [K: string]: (path: string) => string;
}

/* Denies: spaces/semicolons,
  dollar/plus/asterisk symbols,
  greater and less symbols,
  any quotation marks,
  parentheses/braces.
  Returns: resulting string.
*/

export const filterStrippedTags: Patterns = {
  removeUnallowedSymbols: (path: string) => {
    const pattern = new RegExp('([\\s;\\"\\`\\\'\\[\\]\\{\\}<>\\$\\+\\*]+)', 'g');
    return path.replace(pattern, '');
  }
}

/* Allows letters, digits, dashes, dots, slashes.
  Denies: leading/trailing/multiple dots,
  leading/trailing/multiple slashes,
  dots-slashes combinations.
  Returns: resulting string.
*/

export const filterSafePath: Patterns = {
  trimRepeatedSymbols: (path: string) => {
    const pattern = new RegExp('([\\.]{2,})|([\\/]{2,})|([\\\\]{2,})', 'g');
    return path.replace(pattern, (match) => { return match[0]; })
  },
  removeDottedSlashes: (path: string) => {
    const pattern = new RegExp('(\\.\\\\)|(\\.\\/)|(\\\\\\.)|(\\/\\.)', 'g');
    return path.replace(pattern, '');
  },
  removeUnallowedSymbols: (path: string) => {
    const pattern = new RegExp('([^\\w\\d\\.\\/\\\\-]+)', 'g');
    return path.replace(pattern, '');
  },
  trimSymbols: (path: string) => {
    const pattern = new RegExp('(^[\\.\\\\\\/]+)|([\\.\\\\\\/]+)$', 'g');
    return path.replace(pattern, '');
  }
}

/* Allows letters, digits, dashes.
  Returns if matched: result string,
  otherwise: empty string;
*/
export const filterAllowedSymbolsOnly: Patterns = {
  ...filterSafePath,
  getPath: (path: string) => {
    const matched = path.match(new RegExp('^([\\w\\d-]+)$', 'gi'));
    return matched === null ? '' : matched[0];
  }
}

/* Allows alphanumeric symbols.
  Returns if matched: result string,
  otherwise: empty string;
*/
export const filterAlphaNumericOnly: Patterns = {
  ...filterSafePath,
  getPath: (path: string) => {
    const matched = path.match(new RegExp('^([\\w]+)$', 'gi'));
    return matched === null ? '' : matched[0];
  }
}

const useFilteredRequestQuery = (path: string, patterns: Patterns, defaultPath: string = '') => {
  let threatedPath = path;
  for (const pattern of Object.values(patterns)) {
    threatedPath = pattern(threatedPath);
  }

  return threatedPath.length
    ? threatedPath
    : defaultPath;
};

export default useFilteredRequestQuery;
