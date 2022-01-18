// @ts-nocheck
import React from 'react';
import { Button } from '@heathmont/moon-components';
import {
  GenericClose,
  GenericMenu,
  GenericSearch,
} from '@heathmont/moon-icons';
import { mq, rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { inputConfig, zIndex } from './settings';

const { borderWidth, padding } = inputConfig;

export type SearchInputSize = 'small' | 'medium';

export const SearchClearButton = styled(Button)(
  ({ theme: { color, space } }) => ({
    position: 'absolute',
    top: 0,
    right: borderWidth,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `0 ${rem(space.small)}`,
    border: 'none',
    background: 'transparent',
    appearance: 'none',
    zIndex: zIndex.searchIcon,
    ':focus svg': {
      color: color.bulma[100],
    },
    '[dir=rtl] &': {
      right: 'auto',
      left: borderWidth,
    },
  })
);

export const SearchClearIcon = styled(GenericClose)<
  React.SVGProps<SVGSVGElement>
>(({ theme: { base, colorNew } }) => ({
  color: colorNew.trunks,
  fontSize: rem(base.lineHeight),
}));

export const SearchInputIcon = styled(GenericSearch)<
  React.SVGProps<SVGSVGElement> & { $size: SearchInputSize }
>(({ $size, theme: { base, colorNew } }) => ({
  position: 'absolute',
  top: '50%',
  left: rem(padding[$size] + borderWidth),
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(base.lineHeight),
  color: colorNew.trunks,
  pointerEvents: 'none',
  '[dir=rtl] &': {
    left: 'auto',
    right: rem(padding[$size] + borderWidth),
  },
}));

export const SearchMenuIcon = styled(GenericMenu)<
  React.SVGProps<SVGSVGElement>
>(({ theme: { base, colorNew, space } }) => ({
  position: 'absolute',
  top: '50%',
  right: rem(space.default),
  color: colorNew.trunks,
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(base.lineHeight),
  '[dir=rtl] &': {
    left: rem(space.default),
    right: 'auto',
  },
}));

export const SearchInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement> & {
    hasBorder: boolean;
    $size: SearchInputSize;
  }
>(
  ({
    $size,
    hasBorder,
    theme: {
      breakpoint,
      color,
      colorNew,
      fontSize,
      fontWeight,
      radius,
      space,
      transitionDuration,
    },
  }) => ({
    fontWeight: fontWeight.normal,
    fontSize: rem(fontSize.body),
    width: '100%',
    lineHeight: 1,
    position: 'relative',
    paddingTop: 0,
    paddingRight: rem(padding[$size] + space.default),
    paddingBottom: 0,
    paddingLeft: rem(2 * padding[$size] + space.default),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    backgroundColor: color.goku[100],
    color: colorNew.trunks,
    borderRadius: rem(radius.default),
    border: hasBorder ? `${rem(borderWidth)} solid transparent` : 'none',
    outline: 0,
    zIndex: zIndex.searchInput,
    transition: `${inputConfig.transition}`,
    transitionDuration: `${transitionDuration.default}s`,
    '[dir=rtl] &': {
      paddingLeft: rem(padding[$size] + space.default),
      paddingRight: rem(2 * padding[$size] + space.default),
    },
    '&::placeholder': {
      color: 'inherit',
    },
    '&:hover': {
      backgroundColor: color.gohan[100],
      borderColor: color.beerus[100],
    },
    '&:active, &:focus': {
      backgroundColor: color.gohan[100],
      borderColor: color.piccolo[100],
      color: color.bulma[100],
    },
    [mq(breakpoint.medium, 'max-width')]: {
      [':focus:not(:placeholder-shown)']: {
        borderColor: color.piccolo[100],
      },
    },
  })
);

export const SearchBox = styled.span<{
  $size: SearchInputSize;
}>(({ $size, theme: { fontSize } }) => ({
  display: 'flex',
  position: 'relative',
  fontSize: rem(fontSize.body),
  overflow: 'visible',
  width: '100%',
  height: rem(inputConfig.height[$size]),
}));
