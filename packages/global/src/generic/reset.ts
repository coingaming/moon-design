import { css } from "@emotion/core";

export const reset = css`
  /**
   * Remove all browser-default margins from certain elements.
   */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  figure,
  table,
  th,
  td,
  caption,
  hr {
    margin: 0;
    padding: 0;
  }

  /**
   * Remove trailing margins from nested lists.
   */
  li > ul,
  li > ol {
    margin-bottom: 0;
  }

  /**
   * Set default <table>s behavior.
   */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * Correct display behavior of the 'hidden' attribute.
   */
  [hidden] {
    display: none !important;
  }
`;
