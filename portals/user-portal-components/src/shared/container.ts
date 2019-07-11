import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import styled from '@emotion/styled';
import { mq, container } from '@heathmont/sportsbet-utils';

import {
  USER_PORTAL_CONTAINER_SIZE,
  USER_PORTAL_CONTAINER_SIZE_FLUSH,
  USER_PORTAL_CONTAINER_PADDING,
} from './globals';

// From the value of the container and upwards, add the max width and padding
export const userPortalContainer: CSSObject = {
  [mq(USER_PORTAL_CONTAINER_SIZE)]: {
    ...container(USER_PORTAL_CONTAINER_SIZE, USER_PORTAL_CONTAINER_PADDING),
  },
};

// From the value of the container and upwards, add the smaller max-width
// without padding
export const userPortalContainerFlush: CSSObject = {
  ...container(USER_PORTAL_CONTAINER_SIZE_FLUSH, 0),
};

export const UserPortalContainer = styled.div(userPortalContainer);

// From the container downwards, add padding
export const userPortalContainerInner: CSSObject = {
  [mq(USER_PORTAL_CONTAINER_SIZE, 'max-width')]: {
    paddingLeft: rem(USER_PORTAL_CONTAINER_PADDING),
    paddingRight: rem(USER_PORTAL_CONTAINER_PADDING),
  },
};

export const UserPortalContainerInner = styled.div(userPortalContainerInner);
