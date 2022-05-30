import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SelectorContainer = styled.div<{ isRtl?: boolean }>(
  ({ theme: { newTokens, colorNew }, isRtl }) => [
    {
      zIndex: 100,
      height: rem(300),
      overflow: 'scroll',
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: colorNew.gohan,
      borderRadius: newTokens.borderRadius.surface.medium,
      boxShadow: newTokens.boxShadow.large,
      padding: `${rem(6)} ${rem(8)}`,
    },
    isRtl && {
      right: 'auto',
      left: 0,
    },
  ]
);

export default SelectorContainer;
//yjyj
