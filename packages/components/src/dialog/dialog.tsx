import * as React from 'react';
import { IconClose } from '@heathmont/sportsbet-assets';
import { DialogProps as ReachDialogProps } from '@reach/dialog';

import { DialogToggle, DialogToggleText } from './private/toggle';
import { DialogFromTop, DialogMaxWidth, DialogScroll } from './private/types';
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
  DialogFromTop &
  DialogScroll &
  DialogMaxWidth;

export const Dialog: React.FC<DialogProps> = ({
  children,
  footer,
  maxWidth,
  isOpen = false,
  onDismiss,
  isFixedFromTop,
  useFullPageScroll,
}) => (
  <DialogOverlay
    isOpen={isOpen && isOpen}
    onDismiss={onDismiss && onDismiss}
    useFullPageScroll={useFullPageScroll}
  >
    <DialogContent maxWidth={maxWidth} isFixedFromTop={isFixedFromTop}>
      <DialogContainer>
        <DialogToggle type="button" onClick={onDismiss && onDismiss}>
          <IconClose />
          <DialogToggleText>Close dialog</DialogToggleText>
        </DialogToggle>
        <DialogMain useFullPageScroll={useFullPageScroll}>
          {children}
        </DialogMain>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContainer>
    </DialogContent>
  </DialogOverlay>
);
