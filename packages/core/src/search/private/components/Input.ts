import React from 'react';
import styled from 'styled-components';

import { Button } from '@heathmont/moon-components';
import { mq, rem } from '@heathmont/moon-utils';

import IconClose from '../../../private/icons/IconErrorCircle';
import IconMenu from '../../../private/icons/IconMenu';
import IconSearch from '../../../private/icons/IconSearch';
import { SearchInputSize } from './SearchResults';
import {
  inputConfig,
  zIndex,
} from './settings';

const { paddingX, transition } = inputConfig;

export type SearchBoxProps = {
  size?: SearchInputSize;
};

const searchInputActive = ':focus:not(:placeholder-shown)';

export const SearchClearIcon = styled(IconClose as any)(
  ({ theme: { color, space } }) => ({
    zIndex: zIndex.searchIcon,
    color: color.bulma[100],
    position: 'absolute',
    fontSize: rem(14),
    top: '50%',
    right: rem(space.default),
    transform: 'translateY(-50%)',
  })
);

export const SearchInputIcon = styled(IconSearch as any)(
  ({ theme: { color, space } }) => ({
    position: 'absolute',
    top: '50%',
    left: rem(space.default),
    transform: 'translateY(-50%)',
    zIndex: zIndex.searchIcon,
    fontSize: rem(14),
    color: color.bulma[100],
    pointerEvents: 'none',
  })
);

export const SearchMenuIcon = styled(IconMenu as any)(
  ({ theme: { color, space } }) => ({
    zIndex: zIndex.searchIcon,
    color: color.bulma[100],
    position: 'absolute',
    fontSize: rem(14),
    top: '50%',
    right: rem(space.default),
    transform: 'translateY(-50%)',
  })
);

export const SearchInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement>
>(({ theme: { color, fontWeight, radius, space, transitionDuration } }) => {
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
    backgroundColor: color.goku[100],
    color: color.trunks[100],
    outline: 0,
    zIndex: zIndex.searchInput,
    transition: `${transition}, max-width ease`,
    transitionDuration: `${transitionDuration.default}s`,
    '&::placeholder': {
      color: 'inherit',
    },
    '&:hover': {
      borderColor: color.beerus[100],
    },
    '&:active, &:focus': {
      borderColor: color.piccolo[100],
      color: color.bulma[100],
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
  ({ theme: { breakpoint, base, color, fontWeight, space } }) => ({
    fontWeight: fontWeight.normal,
    fontSize: rem(base.fontSize),
    lineHeight: rem(base.fontSize),
    border: '2px solid transparent',
    color: color.piccolo[100],
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
