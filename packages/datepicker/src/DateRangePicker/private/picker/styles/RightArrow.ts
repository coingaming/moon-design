import { ControlsChevronRight } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const RightArrow = styled(ControlsChevronRight as any)(({ theme, isrtl }) => [
  {
    cursor: 'pointer',
    color: theme.colorNew.bulma,
    position: 'absolute',
    right: rem(2),
    top: rem(3),
    fontSize: rem(24),
  },
  isrtl && {
    right: 'auto',
    left: rem(2),
    transform: 'rotate(180deg)',
  },
]);

export default RightArrow;
