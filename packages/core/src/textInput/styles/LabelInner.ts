import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const LabelInner = styled.label<{ isRtl?: boolean }>(
  ({
    theme: {
      colorNew,
      newTokens: { transition },
    },
    isRtl,
  }) => ({
    position: 'absolute',
    ...(isRtl ? { right: rem(16) } : { left: rem(16) }),
    fontSize: rem(12),
    lineHeight: rem(12),
    color: colorNew.trunks,
    top: rem(12),
    zIndex: 1,
    transition: `all ${transition.default}`,
  })
);

export default LabelInner;
