import { CSSObject } from 'styled-components';

/**
 * 1. Prevent Reach UI from injecting its own styles.
 *    https://ui.reach.tech/styling/
 */
const config: CSSObject = {
  '&:root': {
    '--reach-dialog': 1 /* [1] */,
  },
};

export default config;
