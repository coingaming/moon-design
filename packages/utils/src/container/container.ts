import { CSSObject } from 'styled-components';
import margin from 'polished/lib/shorthands/margin';
import padding from 'polished/lib/shorthands/padding';

import rem from '../rem/rem';

type ContainerSize = CSSObject['maxWidth'];
type PaddingSize = CSSObject['paddingLeft'];

const container = (
  size?: ContainerSize,
  paddingSize?: PaddingSize
): CSSObject => ({
  ...margin(null, 'auto'),
  ...padding(null, paddingSize ? rem(paddingSize) : null),
  maxWidth: size ? rem(size) : undefined,
});

export default container;
