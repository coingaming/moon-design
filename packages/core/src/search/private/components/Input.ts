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
  ({ theme: { colorNew, space } }) => ({
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
      color: colorNew.bulma,
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
    backgroundColor: colorNew.goku,
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
      backgroundColor: colorNew.gohan,
      borderColor: colorNew.beerus,
    },
    '&:active, &:focus': {
      backgroundColor: colorNew.gohan,
      borderColor: colorNew.piccolo,
      color: colorNew.bulma,
    },
    [mq(breakpoint.medium, 'max-width')]: {
      [':focus:not(:placeholder-shown)']: {
        borderColor: colorNew.piccolo,
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
