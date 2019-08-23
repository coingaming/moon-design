import { polyfill } from '@heathmont/sportsbet-global';

import { wrapRootElement as wrap } from './src/wrap-root-element';

export const wrapRootElement = wrap;

export const onInitialClientRender = () => polyfill;
