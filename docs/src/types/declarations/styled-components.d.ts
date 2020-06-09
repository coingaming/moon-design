// import original module declarations
import 'styled-components';
import { Theme } from '@heathmont/moon-themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
