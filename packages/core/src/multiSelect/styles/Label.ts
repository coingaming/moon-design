import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

interface Props {
  variant?: 'default' | 'isEmpty';
}

const Label = styled.label<Props>(({ theme, variant }) => ({
  fontSize: variant === 'isEmpty' ? rem(16) : rem(12),
  lineHeight: rem(16),
  color: theme.color.trunks[100],
}));

export default Label;
