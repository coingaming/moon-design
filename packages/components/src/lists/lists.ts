import { CSSObject } from 'styled-components';

/**
 * Util
 */
const listItemStyleTypeNone: CSSObject = {
  listStyleType: 'none',
  '&:before': {
    position: 'absolute',
    content: '"\\200B"' /* Add zero-width space to prevent VoiceOver disable */,
  },
};

/**
 * listPlain
 */
const listPlain: CSSObject = {
  display: 'block',
  marginLeft: 0,
};

const listPlainItem: CSSObject = {
  display: 'block',
  ...listItemStyleTypeNone,
};

/**
 * listInline
 */
const listInline: CSSObject = {
  display: 'inline-block',
  marginLeft: 0,
};

const listInlineItem: CSSObject = {
  display: 'inline-block',
  ...listItemStyleTypeNone,
};

/**
 * Exports
 */
export {
  listItemStyleTypeNone,
  listPlain,
  listPlainItem,
  listInline,
  listInlineItem,
};
