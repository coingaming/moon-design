import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { DialogOverlay as ReachDialogOverlay } from '@reach/dialog';

/**
 * For further info, see the Reach UI documentation:
 * https://ui.reach.tech/dialog/
 */
const DialogOverlay: any = styled<any>(ReachDialogOverlay)(
  ({ theme: { color, zIndex } }) => ({
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    overflow: 'auto',
    backgroundColor: color.gohan[100] && rgba(color.gohan[100], 0.75),
    zIndex: zIndex.dialog,
  }),
);

export default DialogOverlay;
