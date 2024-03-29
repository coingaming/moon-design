import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const HintText = styled.span<{ isError?: boolean }>(
  ({ theme: { colorNew }, isError }) => ({
    display: 'block',
    fontSize: rem(12),
    lineHeight: rem(16),
    color: isError ? colorNew.chiChi[100] : colorNew.trunks,
    paddingTop: rem(8),
  })
);

export default HintText;
