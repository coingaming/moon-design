import * as React from 'react';
import { IconClose } from '@heathmont/sportsbet-assets';
import { DialogProps as ReachDialogProps } from '@reach/dialog';

import { DialogToggle, DialogToggleText } from './private/toggle';
import { DialogPosition, DialogMaxWidth } from './private/types';
import {
  DialogContainer,
  DialogContent,
  DialogFooter,
  DialogMain,
  DialogOverlay,
} from './private/layout';

export type DialogProps = {
  footer?: JSX.Element[] | JSX.Element;
} & ReachDialogProps &
  DialogPosition &
  DialogMaxWidth;

export const Dialog: React.FC<DialogProps> = ({
  children,
  footer,
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
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContainer>
    </DialogContent>
  </DialogOverlay>
);
