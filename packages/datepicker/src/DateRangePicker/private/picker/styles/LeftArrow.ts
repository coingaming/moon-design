import { ControlsChevronLeft } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const LeftArrow = styled(ControlsChevronLeft as any)(({ theme, isrtl }) => [
  {
    cursor: 'pointer',
    color: theme.colorNew.bulma,
    position: 'absolute',
    left: rem(2),
    top: rem(3),
    fontSize: rem(24),
    zIndex: 2,
  },
  isrtl && {
    left: 'auto',
    right: rem(2),
    transform: 'rotate(180deg)',
  },
]);

export default LeftArrow;
