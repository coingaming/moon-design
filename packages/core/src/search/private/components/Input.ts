import React from 'react';
import styled from 'styled-components';

import { Button } from '@heathmont/moon-components';
import { mq, rem } from '@heathmont/moon-utils';

import IconClose from '../../../private/icons/IconErrorCircle';
import IconMenu from '../../../private/icons/IconMenu';
import IconSearch from '../../../private/icons/IconSearch';
import { SearchInputSize } from './SearchResults';
import {
  BG_SEARCH_INPUT,
  COLOR_ACTIVE,
  COLOR_BORDER_HOVER,
  COLOR_PLACEHOLDER,
  COLOR_TEXT,
  inputConfig,
  zIndex,
} from './settings';

const { paddingX, transition } = inputConfig;

export type SearchBoxProps = {
  size?: SearchInputSize;
};

const searchInputActive = ':focus:not(:placeholder-shown)';

export const SearchClearIcon = styled(IconClose as any)(
  ({ theme: { space } }) => ({
    zIndex: zIndex.searchIcon,
    color: COLOR_TEXT,
    position: 'absolute',
    fontSize: rem(14),
    top: '50%',
    right: rem(space.default),
    transform: 'translateY(-50%)',
  })
);

export const SearchInputIcon = styled(IconSearch as any)(
  ({ theme: { space } }) => ({
    position: 'absolute',
    top: '50%',
    left: rem(space.default),
    transform: 'translateY(-50%)',
    zIndex: zIndex.searchIcon,
    fontSize: rem(14),
    color: COLOR_TEXT,
    pointerEvents: 'none',
  })
);

export const SearchMenuIcon = styled(IconMenu as any)(
  ({ theme: { space } }) => ({
    zIndex: zIndex.searchIcon,
    color: COLOR_TEXT,
    position: 'absolute',
    fontSize: rem(14),
    top: '50%',
    right: rem(space.default),
    transform: 'translateY(-50%)',
  })
);

export const SearchInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement>
>(({ theme: { fontWeight, radius, space, transitionDuration } }) => {
  const fontSize = '14px';

  return {
    fontWeight: fontWeight.normal,
    fontSize: rem(14),
    width: '100%',
    lineHeight: rem(14),
    border: '2px solid transparent',
    position: 'relative',
    paddingTop: 0,
    paddingRight: rem(paddingX, fontSize),
    paddingBottom: 0,
    paddingLeft: rem(paddingX + space.default + space.small, fontSize),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    borderRadius: radius.default,
    backgroundColor: BG_SEARCH_INPUT,
    color: COLOR_PLACEHOLDER,
    outlineColor: COLOR_ACTIVE,
    zIndex: zIndex.searchInput,
    transition: `${transition}, max-width ease`,
    transitionDuration: `${transitionDuration.default}s`,
    '&::placeholder': {
      color: 'inherit',
    },
    '&:hover': {
      borderColor: COLOR_BORDER_HOVER,
    },
    '&:active, &:focus': {
      borderColor: COLOR_ACTIVE,
      color: COLOR_TEXT,
    },
  };
});

export const SearchBox = styled.span<SearchBoxProps>(
  ({ theme: { space } }) => ({
    display: 'flex',
    position: 'relative',
    fontSize: rem(space.default),
    overflow: 'visible',
    width: '100%',
  }),
  ({ size }) => ({
    height: size === 'small' ? rem(40) : rem(48),
  })
);

export const SearchCloseButton = styled(Button)(
  ({ theme: { breakpoint, base, fontWeight, space } }) => ({
    fontWeight: fontWeight.normal,
    fontSize: rem(base.fontSize),
    lineHeight: rem(base.fontSize),
    border: '2px solid transparent',
    color: COLOR_ACTIVE,
    position: 'relative',
    overflow: 'visible',
    padding: `0 ${rem(24)}`,
    marginLeft: rem(space.small, base.fontSize),
    display: 'flex',
    flex: 0,
    [mq(breakpoint.medium, 'min-width')]: {
      display: 'none',
    },
  })
);
