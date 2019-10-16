import * as React from 'react';
import { IconClose } from '@heathmont/sportsbet-icons';

import { DialogToggle, DialogToggleText } from './private/toggle';
import { DialogLongForm, DialogMaxWidth } from './private/types';
import {
  DialogContainer,
  DialogContent,
  DialogFooter,
  DialogMain,
  DialogOverlay,
} from './private/layout';

type DialogState = {
  showDialog: boolean;
};

type DialogSetState = (state: DialogState) => any;

export type DialogProps = {
  state: DialogState;
  setState?: DialogSetState;
  footer?: JSX.Element[] | JSX.Element;
} & DialogLongForm &
  DialogMaxWidth;

export const Dialog: React.FC<DialogProps> = ({
  children,
  footer,
  longForm,
  maxWidth,
  state,
  setState,
}) => (
  <DialogOverlay
    isOpen={state.showDialog}
    onDismiss={() => setState && setState({ showDialog: false })}
  >
    <DialogContent longForm={longForm} maxWidth={maxWidth}>
      <DialogContainer>
        <DialogToggle
          type="button"
          onClick={() => setState && setState({ showDialog: false })}
        >
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
  state: {
    showDialog: false,
  },
};
