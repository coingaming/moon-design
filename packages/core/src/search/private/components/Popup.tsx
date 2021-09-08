import React, { useCallback, useEffect } from 'react';
import styled, { CSSObject } from 'styled-components';
import { Theme } from '@heathmont/moon-themes';
import { mq, rem } from '@heathmont/moon-utils';

import { FlexWrapper, ModalClose } from './Styles';
import { popupConfig } from './settings';

export const resultsInactive = ({ transitionDuration }: Theme): CSSObject => ({
  opacity: 0,
  visibility: 'hidden',
  transition: `visibility 0s linear ${transitionDuration.default}s, opacity ${transitionDuration.default}s`,
});

export const resultsActive = ({
  transitionDuration,
  zIndex,
}: Theme): CSSObject => ({
  opacity: 1,
  visibility: 'visible',
  transition: `visibility 0s linear 0s, opacity ${transitionDuration.default}s`,
  zIndex: zIndex.dialog,
});

export const StyledPopup = styled.div(
  ({ theme: { base, breakpoint, color, space, zIndex } }) => ({
    background: 'transparent',
    position: 'relative',
    padding: 0,
    borderRadius: rem(popupConfig.borderRadius),
    fontSize: rem(base.fontSize),
    lineHeight: rem(24),
    [mq(breakpoint.medium, 'max-width')]: {
      '&.active': {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: color.goten[100],
        padding: rem(space.default),
        zIndex: zIndex.dialog,
      },
    },
  }),
  ({ theme }) => ({
    [mq(theme.breakpoint.medium, 'min-width')]: {
      [':focus-within']: resultsActive(theme),
    },
  })
);

export type PopupProps = {
  children?: JSX.Element;
  closeButton?: JSX.Element;
  closePopup: () => void;
  isActive: boolean;
  title: JSX.Element;
};

const Popup: React.FC<PopupProps> = ({
  children,
  closeButton,
  closePopup,
  isActive,
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
    <StyledPopup className={`popup ${isActive ? 'active' : ''}`}>
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
