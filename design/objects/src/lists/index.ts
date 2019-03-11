import { CSSObject } from '@emotion/core';

/**
 * Private
 */
const listStyleTypeNone: CSSObject = {
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
  ...listStyleTypeNone,
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
  ...listStyleTypeNone,
};

/**
 * Exports
 */
export { listPlain, listPlainItem, listInline, listInlineItem };
