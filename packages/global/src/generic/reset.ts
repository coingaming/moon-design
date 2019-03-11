import { CSSObject } from '@emotion/core';
import { rhythm } from '@heathmont/sportsbet-utils';

export const reset: CSSObject = {
  /**
   * Remove all browser-default margins from certain elements.
   */
  [`body,
    h1, h2, h3, h4, h5, h6,
    p, blockquote, pre,
    dl, dd, ol, ul,
    form, fieldset, legend,
    figure,
    table, th, td, caption,
    hr`]: {
    margin: 0,
    padding: 0,
  },
  /**
   * Remove trailing margins from nested lists and common block items
   */
  'li >': {
    'ul, ol, p, blockquote': {
      ...rhythm(0),
    },
  },
  /**
   * Set default <table>s behavior.
   */
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  /**
   * Correct display behavior of the 'hidden' attribute.
   */
  '[hidden]': {
    display: 'none !important',
  },
};
