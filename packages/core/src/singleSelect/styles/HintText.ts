import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const HintText = styled.span<{ isError?: boolean }>(
  ({ theme: { color }, isError }) => ({
    display: 'block',
    fontSize: rem(12),
    lineHeight: rem(16),
    color: isError ? color.chiChi[100] : color.trunks[100],
    paddingTop: rem(8),
  })
);

export default HintText;
