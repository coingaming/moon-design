import { ControlsChevronRight } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const RightArrow = styled(ControlsChevronRight as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.colorNew.bulma,
  position: 'absolute',
  right: rem(2),
  top: 0,
  fontSize: rem(24),
}));

export default RightArrow;
