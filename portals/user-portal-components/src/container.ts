import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import styled from '@emotion/styled';
import { mq, container } from '@heathmont/sportsbet-utils';

import {
  USER_PORTAL_CONTAINER_SIZE,
  USER_PORTAL_CONTAINER_FLUSH,
  USER_PORTAL_CONTAINER_PADDING,
} from './globals';

export const userPortalContainer: CSSObject = {
  [mq(USER_PORTAL_CONTAINER_SIZE)]: {
    ...container(USER_PORTAL_CONTAINER_SIZE, USER_PORTAL_CONTAINER_PADDING),
  },
};

export const userPortalContainerFlush: CSSObject = {
  [mq(USER_PORTAL_CONTAINER_SIZE)]: {
    ...container(USER_PORTAL_CONTAINER_FLUSH, 0),
  },
};

export const userPortalContainerFlushSpaced: CSSObject = {
  [mq(USER_PORTAL_CONTAINER_SIZE)]: {
    ...container(USER_PORTAL_CONTAINER_FLUSH, USER_PORTAL_CONTAINER_PADDING),
  },
};

export const UserPortalContainer = styled.div(userPortalContainer);

export const userPortalContainerInner: CSSObject = {
  [mq(USER_PORTAL_CONTAINER_SIZE, 'max-width')]: {
    paddingLeft: rem(USER_PORTAL_CONTAINER_PADDING),
    paddingRight: rem(USER_PORTAL_CONTAINER_PADDING),
  },
};

export const UserPortalContainerInner = styled.div(userPortalContainerInner);
