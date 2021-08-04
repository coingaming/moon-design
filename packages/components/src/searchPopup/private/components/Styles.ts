import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-components';

import { inputConfig } from './settings';

const { height, paddingX } = inputConfig;

/**
 * Search Styles
 * The functional container for the search component.
 * We aren't using Design System form because we use focus-within logic here
 */
export const FlexWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

export const ModalClose = styled(Button)(({ theme }) => {
    const { fontSize } = theme.base;
    return {
        fontWeight: theme.fontWeight.normal,
        fontSize: rem(fontSize),
        lineHeight: rem(height, fontSize),
        border: 0,
        position: 'relative',
        overflow: 'visible',
        padding: `0 ${rem(paddingX, fontSize)}`,
        marginLeft: rem(theme.space.small, fontSize),
        display: 'flex',
        flex: 0,
        [mq(theme.breakpoint.medium, 'min-width')]: {
            display: 'none',
        },
    };
});
