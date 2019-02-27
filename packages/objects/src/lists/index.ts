import { css } from '@emotion/core';

/**
 * Private
 */
const listStyleTypeNone = css({
  listStyleType: 'none',
  '&:before': {
    position: 'absolute',
    content: '"\\200B"' /* Add zero-width space to prevent VoiceOver disable */,
  },
});

/**
 * listPlain
 */
const listPlain = css({
  display: 'block',
  marginLeft: 0,
});

const listPlainItem = css([{ display: 'block' }, listStyleTypeNone]);

/**
 * listInline
 */
const listInline = css({
  display: 'inline-block',
  marginLeft: 0,
});

const listInlineItem = css([{ display: 'inline-block' }, listStyleTypeNone]);

/**
 * Exports
 */
export { listPlain, listPlainItem, listInline, listInlineItem };
