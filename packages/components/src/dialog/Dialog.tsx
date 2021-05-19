import React from 'react';
import { DialogProps as ReachDialogProps } from '@reach/dialog';

import IconClose from '../private/icons/IconClose';
import DialogOverlay from '../dialogOverlay/DialogOverlay';
import DialogContent from '../dialogContent/DialogContent';

import { DialogToggle, DialogToggleText } from './private/toggle';
import { DialogContainer, DialogMain } from './private/layout';

import type {
  DialogPosition,
  DialogMaxWidth,
} from '../dialogContent/DialogContent';

export type DialogProps = ReachDialogProps &
  DialogPosition &
  DialogMaxWidth & {
    disableScrollLock?: boolean;
  };

const Dialog: React.FC<DialogProps> = ({
  children,
  maxWidth,
  isOpen = false,
  onDismiss,
  position = 'CENTER',
  disableScrollLock = false,
}) => (
  <DialogOverlay
    isOpen={isOpen && isOpen}
    onDismiss={onDismiss && onDismiss}
    dangerouslyBypassScrollLock={disableScrollLock}
  >
    <DialogContent maxWidth={maxWidth} position={position}>
      <DialogContainer>
        <DialogToggle type="button" onClick={onDismiss && onDismiss}>
          <IconClose />
          <DialogToggleText>Close dialog</DialogToggleText>
        </DialogToggle>
        <DialogMain>{children}</DialogMain>
      </DialogContainer>
    </DialogContent>
  </DialogOverlay>
);

export default Dialog;
