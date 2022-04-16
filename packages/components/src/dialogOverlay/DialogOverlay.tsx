import { DialogOverlay as ReachDialogOverlay } from '@reach/dialog';
import rgba from 'polished/lib/color/rgba';
import styled from 'styled-components';

/**
 * For further info, see the Reach UI documentation:
 * https://ui.reach.tech/dialog/
 */
const DialogOverlay: any = styled<any>(ReachDialogOverlay)(
  ({ theme: { zIndex } }) => ({
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    overflow: 'auto',
    backgroundColor:  'rgba(0, 0, 0, 0.56)',
    zIndex: zIndex.dialog,
  })
);

export default DialogOverlay;
