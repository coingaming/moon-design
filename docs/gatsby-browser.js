import { polyfill } from '@heathmont/moon-global';

import { wrapRootElement as wrap } from './src/wrap-root-element';

export const wrapRootElement = wrap;

export const onInitialClientRender = () => polyfill;
