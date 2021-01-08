import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import { DialogContent as ReachDialogContent } from '@reach/dialog';

interface DialogMaxWidth {
  maxWidth?: string;
}

interface DialogPosition {
  position?: 'TOP' | 'CENTER';
}

/**
 * 1. Arbitrary figure from design.
 */
const DialogContent = styled(ReachDialogContent)<
  DialogMaxWidth & DialogPosition
>(({ theme: { space } }) => [
  {
    margin: '0 auto',
    position: 'relative',
    maxWidth: rem(608) /* [1] */,
    padding: rem(space.default),
    outline: 'none',
  },
  ({ maxWidth }) => ({ maxWidth }),
  ({ position }) =>
    position === 'TOP'
      ? { margin: '8vh auto' }
      : { top: '50%', transform: 'translateY(-50%)' },
]);

export default DialogContent;
