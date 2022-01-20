import { ControlsChevronLeft } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const LeftArrow = styled(ControlsChevronLeft as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.bulma[100],
  position: 'absolute',
  left: rem(2),
  top: 0,
  fontSize: rem(24),
  zIndex: 2,
}));

export default LeftArrow;
