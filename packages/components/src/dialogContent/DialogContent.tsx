import { DialogContent as ReachDialogContent } from '@reach/dialog';
import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';

export interface DialogMaxWidth {
  maxWidth?: string;
}

export interface DialogPosition {
  position?: 'TOP' | 'CENTER';
}

/**
 * 1. Arbitrary figure from design.
 */
const DialogContent: React.FC<any> = styled(ReachDialogContent)
  .withConfig({
    shouldForwardProp: (prop) => !['maxWidth'].includes(prop),
  })
  .attrs({
    'aria-labelledby': 'Dialog content',
  })<DialogMaxWidth & DialogPosition>(() => [
  {
    background: 'transparent',
    margin: '0 auto',
    position: 'relative',
    maxHeight: '100vh',
    maxWidth: rem(608) /* [1] */,
    padding: 0,
    outline: 'none',
  },
  ({ maxWidth }) => ({ maxWidth }),
  ({ position }) =>
    position === 'TOP'
      ? { margin: '8vh auto' }
      : { top: '50%', transform: 'translateY(-50%)' },
]);

export default DialogContent;
