import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface Props {
  variant?: 'default' | 'isEmpty';
}

const Label = styled.label<Props>(({ theme, variant }) => ({
  fontSize: variant === 'isEmpty' ? rem(16) : rem(12),
  lineHeight: rem(16),
  color: theme.colorNew.trunks,
}));

export default Label;
