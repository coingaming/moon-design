// import original module declarations
import 'styled-components';
import { Theme } from '@heathmont/sportsbet-themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
