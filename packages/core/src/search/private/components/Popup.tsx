import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';

import { FlexWrapper, ModalClose } from './Styles';
import { popupConfig } from './settings';

export const StyledPopup = styled.div(
  ({ theme: { base, breakpoint, color, space, zIndex } }) => ({
    background: 'transparent',
    position: 'relative',
    padding: 0,
    borderRadius: rem(popupConfig.borderRadius),
    fontSize: rem(base.fontSize),
    lineHeight: rem(24),
    [':focus-within']: {
      zIndex: zIndex.dialog,
    },
    [mq(breakpoint.medium, 'max-width')]: {
      [':focus-within']: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: color.goten[100],
        padding: rem(space.default),
      },
    },
  })
);

export type PopupProps = {
  children?: JSX.Element;
  closeButton?: JSX.Element;
  closePopup: () => void;
  title: JSX.Element;
};

const Popup: React.FC<PopupProps> = ({
  children,
  closeButton,
  closePopup,
  title,
}) => {
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  return (
    <StyledPopup className="popup">
      <FlexWrapper>
        {title}
        {closeButton ? (
          <ModalClose onClick={closePopup}>{closeButton}</ModalClose>
        ) : null}
      </FlexWrapper>
      {children && <FlexWrapper>{children}</FlexWrapper>}
    </StyledPopup>
  );
};

export default Popup;
