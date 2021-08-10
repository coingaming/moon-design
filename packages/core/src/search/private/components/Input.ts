import React from 'react';
import styled from 'styled-components';

import { Button } from '@heathmont/moon-components';
import { mq, rem } from '@heathmont/moon-utils';

import IconClose from '../../../private/icons/IconErrorCircle';
import IconMenu from '../../../private/icons/IconMenu';
import IconSearch from '../../../private/icons/IconSearch';
import { SearchInputSize } from './SearchResults';
import { inputConfig, zIndex } from './settings';

const { borderWidth, padding, transition } = inputConfig;

export type SearchBoxProps = {
  size?: SearchInputSize;
};

export const SearchClearIcon = styled(IconClose)<React.SVGProps<SVGSVGElement>>(
  ({ theme: { color, fontSize, space } }) => ({
    zIndex: zIndex.searchIcon,
    color: color.bulma[100],
    position: 'absolute',
    fontSize: rem(fontSize.body),
    top: '50%',
    right: rem(space.default),
    transform: 'translateY(-50%)',
    width: space.default,
    height: space.default,
  })
);

export const SearchInputIcon = styled(IconSearch)<
  React.SVGProps<SVGSVGElement> & { inputSize: SearchInputSize }
>(({ inputSize, theme: { color, fontSize, space } }) => ({
  position: 'absolute',
  top: '50%',
  left: rem(padding[inputSize] + borderWidth),
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(fontSize.body),
  color: color.bulma[100],
  pointerEvents: 'none',
  width: space.default,
  height: space.default,
}));

export const SearchMenuIcon = styled(IconMenu)<React.SVGProps<SVGSVGElement>>(
  ({ theme: { color, fontSize, space } }) => ({
    position: 'absolute',
    top: '50%',
    right: rem(space.default),
    color: color.bulma[100],
    fontSize: rem(fontSize.body),
    transform: 'translateY(-50%)',
    zIndex: zIndex.searchIcon,
    width: space.default,
    height: space.default,
  })
);

export const SearchInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement> & { inputSize: SearchInputSize }
>(
  ({
    inputSize,
    theme: { color, fontSize, fontWeight, radius, space, transitionDuration },
  }) => ({
    fontWeight: fontWeight.normal,
    fontSize: rem(fontSize.body),
    width: '100%',
    lineHeight: 1,
    border: `${rem(borderWidth)} solid transparent`,
    position: 'relative',
    paddingTop: 0,
    paddingRight: rem(padding[inputSize] + space.default),
    paddingBottom: 0,
    paddingLeft: rem(2 * padding[inputSize] + space.default),
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
  })
);

export const SearchBox = styled.span<SearchBoxProps>(
  ({ theme: { fontSize } }) => ({
    display: 'flex',
    position: 'relative',
    fontSize: rem(fontSize.body),
    overflow: 'visible',
    width: '100%',
  }),
  ({ size }) => ({
    height: size === 'small' ? rem(40) : rem(48),
  })
);

export const SearchCloseButton = styled(Button)(
  ({ theme: { base, breakpoint, color, fontWeight, space } }) => ({
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
