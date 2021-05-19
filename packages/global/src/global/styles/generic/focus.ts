import { CSSObject } from 'styled-components';

const focus: CSSObject = {
  /**
   * Prevents an unwanted focus outline from appearing around elements that
   * might still respond to pointer events.
   * https://github.com/chris-pearce/backpack.css
   */
  '[tabindex=\'-1\']:focus': {
    outline: 'none',
  },
  /**
   * Removes the outline in cases where the UA determines via heuristics that
   * the focus should not be visible. This is mainly for ensuring that a focus
   * indicator (a "focus ring") does not render for mouse users.
   * https://github.com/chris-pearce/backpack.css
   */
  '*:focus:not(:focus-visible)': {
    outline: 'none',
  },
  /* If the browser doesn't support `:focus-visible`, use the polyfil */
  '.js-focus-visible *:focus:not(.focus-visible)': {
    outline: 'none',
  },
};

export default focus;
