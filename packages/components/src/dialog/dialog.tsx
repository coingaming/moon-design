import * as React from 'react';
import { IconClose } from '@heathmont/sportsbet-assets';
import { DialogProps as ReachDialogProps } from '@reach/dialog';

import { DialogToggle, DialogToggleText } from './private/toggle';
import { DialogLongForm, DialogMaxWidth } from './private/types';
import {
  DialogContainer,
  DialogContent,
  DialogFooter,
  DialogMain,
  DialogOverlay,
} from './private/layout';

export type DialogProps = {
  footer?: JSX.Element[] | JSX.Element;
  isFixedFromTop?: boolean;
} & ReachDialogProps &
  DialogLongForm &
  DialogMaxWidth;

export const Dialog: React.FC<DialogProps> = ({
  children,
  footer,
  longForm,
  maxWidth,
  isOpen,
  onDismiss,
  isFixedFromTop,
}) => (
  <DialogOverlay isOpen={isOpen && isOpen} onDismiss={onDismiss && onDismiss}>
    <DialogContent
      longForm={longForm}
      maxWidth={maxWidth}
      isFixedFromTop={isFixedFromTop}
    >
      <DialogContainer>
        <DialogToggle type="button" onClick={onDismiss && onDismiss}>
          <IconClose />
          <DialogToggleText>Close dialog</DialogToggleText>
        </DialogToggle>
        <DialogMain longForm={longForm}>{children}</DialogMain>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContainer>
    </DialogContent>
  </DialogOverlay>
);

Dialog.defaultProps = {
  isOpen: false,
};
