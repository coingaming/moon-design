import React from 'react';
import styled from 'styled-components';

import { Button } from '@heathmont/moon-components';
import { mq, rem } from '@heathmont/moon-utils';

import IconClose from '../../../private/icons/IconErrorCircle';
import IconMenu from '../../../private/icons/IconMenu';
import IconSearch from '../../../private/icons/IconSearch';
import { COLOR_ACTIVE, BG_SEARCH_INPUT, COLOR_PLACEHOLDER, COLOR_TEXT, COLOR_BORDER_HOVER, inputConfig, zIndex } from './settings';

const { height, paddingX, transition } = inputConfig;

const searchInputActive = ':focus:not(:placeholder-shown)';
const searchInputActiveWithin = ':focus-within:not(:placeholder-shown)';

export const SearchClearIcon = styled(IconClose as any)(({ theme }) => ({
  zIndex: zIndex.searchIcon,
  color: COLOR_TEXT,
  position: 'absolute',
  fontSize: rem(14),
  top: '50%',
  right: rem(theme.space.default),
  transform: 'translateY(-50%)',
  [`${searchInputActiveWithin} &`]: {
    color: 'hotpink',
  },
}));

export const SearchInputIcon = styled(IconSearch as any)(({ theme }) => ({
  zIndex: zIndex.searchIcon,
  color: COLOR_TEXT,
  position: 'absolute',
  fontSize: rem(14),
  top: '50%',
  left: rem(theme.space.default),
  transform: 'translateY(-50%)',
}));

export const SearchMenuIcon = styled(IconMenu as any)(({ theme }) => ({
  zIndex: zIndex.searchIcon,
  color: COLOR_TEXT,
  position: 'absolute',
  fontSize: rem(14),
  top: '50%',
  right: rem(theme.space.default),
  transform: 'translateY(-50%)',
}));

export const SearchInput = styled.input<React.InputHTMLAttributes<HTMLInputElement>>(({ theme }) => {
  const fontSize = '14px';

  return {
    fontWeight: theme.fontWeight.normal,
    fontSize: rem(14),
    width: '100%',
    lineHeight: rem(height, fontSize),
    border: '2px solid transparent',
    position: 'relative',
    paddingTop: 0,
    paddingRight: rem(paddingX, fontSize),
    paddingBottom: 0,
    paddingLeft: rem(
      paddingX + theme.space.default + theme.space.small,
      fontSize,
    ),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    borderRadius: theme.radius.default,
    backgroundColor: BG_SEARCH_INPUT,
    color: COLOR_PLACEHOLDER,
    outlineColor: COLOR_ACTIVE,
    zIndex: zIndex.searchInput,
    transition: `${transition}, max-width ease`,
    transitionDuration: `${theme.transitionDuration.default}s`,
    '&::placeholder': {
      color: 'inherit',
    },
    '&:hover': {
      borderColor: COLOR_BORDER_HOVER,
    },
    '&:actove, &:focus': {
      borderColor: COLOR_ACTIVE,
      color: COLOR_TEXT,
    },
    [`&${searchInputActive}`]: {
      zIndex: zIndex.searchInputActive,
      maxWidth: '100%',
    },
  };
});

export const SearchInputActive = `${SearchInput}${searchInputActive}`;

export type SearchBoxProps = {
  size?: 'small' | 'medium';
};

export const SearchBox = styled.span<SearchBoxProps>(
  ({ theme }) => ({
    display: 'flex',
    position: 'relative',
    fontSize: rem(theme.space.default),
    overflow: 'visible',
    width: '100%',
  }),
  ({ size }) => ({
    height: size === 'small' ? rem(40) : rem(48),
  }),
);



export const SearchCloseButton = styled(Button)(({ theme }) => {
  const { fontSize } = theme.base;
  return ({
    fontWeight: theme.fontWeight.normal,
    fontSize: rem(fontSize),
    lineHeight: rem(height, fontSize),
    border: '2px solid transparent',
    color: COLOR_ACTIVE,
    position: 'relative',
    overflow: 'visible',
    padding: `0 ${rem(24)}`,
    marginLeft: rem(theme.space.small, fontSize),
    display: 'flex',
    flex: 0,
    [mq(theme.breakpoint.medium, 'min-width')]: {
      display: 'none',
    },
  })
});
