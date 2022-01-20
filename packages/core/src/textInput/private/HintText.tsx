import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const HintText = styled.p<{ isError?: boolean }>(
  ({ theme: { colorNew }, isError }) => ({
    display: 'inline-block',
    marginTop: rem(8),
    fontSize: rem(12),
    lineHeight: rem(16),
    color: isError ? colorNew.chiChi[100] : colorNew.trunks,
  })
);

HintText.defaultProps = {
  role: 'alert',
};

export default HintText;
