import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const HintText = styled.p<{ isError?: boolean }>(
  ({ theme: { color }, isError }) => ({
    display: 'inline-block',
    marginTop: rem(8),
    fontSize: rem(12),
    lineHeight: rem(16),
    color: isError ? color.chiChi[100] : color.trunks[100],
  })
);

HintText.defaultProps = {
  role: 'alert',
};

export default HintText;
