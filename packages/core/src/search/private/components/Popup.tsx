import React, { useCallback, useEffect, useRef } from 'react';
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
    ['&.popup-open']: {
      zIndex: zIndex.dialog,
    },
    [mq(breakpoint.medium, 'max-width')]: {
      ['&.popup-open']: {
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
  isOpen: boolean;
  title: JSX.Element;
};

const Popup: React.FC<PopupProps> = ({
  children,
  closeButton,
  closePopup,
  isOpen,
  title,
}) => {
  const ref = useRef(null);
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  }, []);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      if (ref.current && !(ref.current! as any).contains(e.target)) {
        closePopup();
      }
    },
    [ref.current]
  );

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  return (
    <StyledPopup className={isOpen ? 'popup-open' : ''} ref={ref}>
      <FlexWrapper>
        {title}
        {!!closeButton && isOpen ? (
          <ModalClose onClick={closePopup}>{closeButton}</ModalClose>
        ) : null}
      </FlexWrapper>
      {isOpen && children && <FlexWrapper>{children}</FlexWrapper>}
    </StyledPopup>
  );
};

export default Popup;
