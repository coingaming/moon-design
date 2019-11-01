// https://github.com/styled-components/styled-components/issues/2528

import { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
