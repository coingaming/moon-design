/**
 * Styled Components' `css` prop gets special treatment and needs to be setup as
 * per t̶h̶e̶ d̶o̶c̶u̶m̶e̶n̶t̶a̶t̶i̶o̶n̶ some random GitHub issue:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-463640878
 */

import * as types from 'styled-components/cssprop';
import 'styled-components';
import { Theme } from '@heathmont/moon-themes';

/**
 * Tie up our theme with Styled Components
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
