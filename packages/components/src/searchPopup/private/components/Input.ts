import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import IconSearch from '../../../private/icons/IconSearch';

import { inputConfig, zIndex } from './settings';

const { height, paddingX, transition } = inputConfig;

const searchInputActive = ':focus:not(:placeholder-shown)';

export const SearchInputIcon = styled(IconSearch as any)(({ theme }) => ({
  zIndex: zIndex.searchIcon,
  position: 'absolute',
  fontSize: rem(theme.space.default),
  top: '50%',
  left: rem(theme.space.default),
  transform: 'translateY(-50%)',
}));

export const SearchInput = styled.input(({ theme }) => {
  const { fontSize } = theme.base;

  return {
    fontWeight: theme.fontWeight.normal,
    fontSize: rem(fontSize),
    width: '100%',
    lineHeight: rem(height, fontSize),
    border: `1px solid transparent`,
    outline: 'none',
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
    borderRadius: theme.radius.small,
    backgroundColor: theme.color.gohan[100],
    color: theme.color.trunks[100],
    zIndex: zIndex.searchInput,
    transition: `${transition}, max-width ease`,
    transitionDuration: `${theme.transitionDuration.default}s`,
    '&::placeholder': {
      color: 'inherit',
    },
    '&:hover, &:focus': {
      color: theme.color.bulma[100],
      [`+ ${SearchInputIcon}`]: {
        color: theme.color.piccolo[100],
      },
    },
    [`&${searchInputActive}, .popup-open &`]: {
      zIndex: zIndex.searchInputActive,
      maxWidth: '100%',
      borderColor: 'green',
    },
  };
});

export const SearchInputActive = `${SearchInput}${searchInputActive}`;
