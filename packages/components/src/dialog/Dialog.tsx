import React from 'react';
import { DialogProps as ReachDialogProps } from '@reach/dialog';

import IconClose from '../private/icons/IconClose';

import { DialogToggle, DialogToggleText } from './private/toggle';
import { DialogPosition, DialogMaxWidth } from './private/types';
import {
  DialogContainer,
  DialogContent,
  DialogMain,
  DialogOverlay,
} from './private/layout';

export type DialogProps = ReachDialogProps & DialogPosition & DialogMaxWidth;

const Dialog: React.FC<DialogProps> = ({
  children,
  maxWidth,
  isOpen = false,
  onDismiss,
  position = 'CENTER',
}) => (
  <DialogOverlay isOpen={isOpen && isOpen} onDismiss={onDismiss && onDismiss}>
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
