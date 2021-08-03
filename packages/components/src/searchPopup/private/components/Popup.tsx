import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import { FlexWrapper, ModalClose } from './Styles';

/**
 * Search Popup
 * The functional container for the search component.
 * We aren't using Design System form because we use focus-within logic here
 */
export const StyledPopup = styled.div(({ theme }) => ({
    background: 'goldenrod',
    borderRadius: '10px',
    padding: rem(10),
    fontSize: rem(theme.space.default),
    [`&.popup-open`]: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: '#fff',
        zIndex: theme.zIndex.dialog,
        padding: rem(10),
      },
}));

export type PopupProps = {
    body?: [JSX.Element],
    closeButtonText?: string,
    closePopup: () => void,
    isOpen: boolean,
    title?: string | JSX.Element,
} & React.InputHTMLAttributes<HTMLInputElement>;

const Popup: React.FC<PopupProps> = ({ body, closeButtonText = "Close", closePopup, isOpen, title }) => (
    <StyledPopup className={isOpen ? 'popup-open' : ''}>
        <FlexWrapper>
            {title}
            {isOpen ? <ModalClose onClick={closePopup}>{closeButtonText}</ModalClose> : null}
        </FlexWrapper>
        <FlexWrapper>
            {body}
        </FlexWrapper>
    </StyledPopup>
);

export default Popup;

