import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import rem from 'polished/lib/helpers/rem';
import { border, colors, opacity, zIndex } from '@heathmont/sportsbet-tokens';

import { CarouselInlineStyleProps } from './types';

/**
 * Settings
 */
const transformCenter = 'translateY(-50%)';

/**
 * 1. Arbitary number to meet with Figma designs, between small and x-small.
 * 2. Flip the indicator on the right, rather than use another SVG import.
 */
export const CarouselControl = styled.button<CarouselInlineStyleProps>(
  ({ inlineStyle }) => [
    {
      padding: rem(12) /* [1] */,
      verticalAlign: 'middle',
      borderColor: 'transparent',
      borderStyle: border.style,
      borderWidth: border.width,
      borderRadius: border.radius.largest,
      backgroundColor: colors.neutral[20],
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
      color: colors.neutral[10],
      fontSize: rem(14),
      lineHeight: 0,
      textDecoration: 'none',
      cursor: 'pointer',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: transformCenter,
      transformOrigin: 'top center',
      zIndex: zIndex.carouselControl,
      '&:last-child': {
        left: 'auto',
        right: 0,
        transform: `rotate(180deg) ${transformCenter}` /* [2] */,
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 ${rem(2)} ${rem(2)} ${colors.brand}`,
      },
      '&::-moz-focus-inner': {
        border: 0,
      },
      '&:disabled, &[disabled]': {
        cursor: 'not-allowed',
        opacity: opacity.disabled,
      },
    },
    inlineStyle,
  ]
);

export const CarouselControlCaption = styled.span(hideVisually);
