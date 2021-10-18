import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { DialogProps as ReachDialogProps } from '@reach/dialog';

import IconClose from '../private/icons/IconClose';
import DialogOverlay from '../dialogOverlay/DialogOverlay';
import DialogContent from '../dialogContent/DialogContent';

import { DialogToggle, DialogToggleText } from './private/toggle';
import { DialogContainer, DialogMain } from './private/layout';
import { HeadingWrapper } from './private/headingWrapper';

import type {
  DialogPosition,
  DialogMaxWidth,
} from '../dialogContent/DialogContent';

export type DialogProps = ReachDialogProps &
  DialogPosition &
  DialogMaxWidth & {
    backgroundColor?: ColorProps;
    disableScrollLock?: boolean;
    heading?: React.ReactElement;
    hideCloseButton?: boolean;
    variant?: 'default' | 'new';
  };

const DialogToggleComponent: React.FC<DialogProps> = ({
  backgroundColor,
  heading,
  hideCloseButton,
  onDismiss,
}) => {
  if (hideCloseButton) {
    return null;
  }
  return (
    <DialogToggle
      type="button"
      onClick={onDismiss && onDismiss}
      heading={!!heading}
      backgroundColor={backgroundColor}
    >
      <IconClose />
      <DialogToggleText>Close dialog</DialogToggleText>
    </DialogToggle>
  );
};

const DialogHeaderComponent: React.FC<DialogProps> = ({
  onDismiss,
  heading,
  hideCloseButton,
}) => (
  <HeadingWrapper>
    {heading}
    <DialogToggleComponent
      onDismiss={onDismiss}
      heading={heading}
      hideCloseButton={hideCloseButton}
    />
  </HeadingWrapper>
);

const Dialog: React.FC<DialogProps> = ({
  backgroundColor,
  children,
  disableScrollLock = false,
  heading,
  hideCloseButton = false,
  isOpen = false,
  maxWidth,
  onDismiss,
  position = 'CENTER',
  variant,
}) => (
  <DialogOverlay
    isOpen={isOpen && isOpen}
    onDismiss={onDismiss && onDismiss}
    dangerouslyBypassScrollLock={disableScrollLock}
  >
    <DialogContent maxWidth={maxWidth} position={position}>
      <DialogContainer backgroundColor={backgroundColor} variant={variant}>
        {!heading && (
          <DialogToggleComponent
            backgroundColor={backgroundColor}
            hideCloseButton={hideCloseButton}
            onDismiss={onDismiss}
          />
        )}
        <DialogMain variant={variant}>
          {heading && (
            <DialogHeaderComponent
              onDismiss={onDismiss}
              heading={heading}
              hideCloseButton={hideCloseButton}
            />
          )}
          {children}
        </DialogMain>
      </DialogContainer>
    </DialogContent>
  </DialogOverlay>
);

export default Dialog;
