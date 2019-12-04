import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { focus, rem } from '@heathmont/sportsbet-utils';

import { CarouselInlineStyleProps } from './types';

/**
 * 1. Arbitrary number to meet with Figma designs, between small and x-small.
 * 2. Flip the indicator on the right, rather than use another SVG import.
 */
export const CarouselControl = styled.button<CarouselInlineStyleProps>(
  ({
    inlineStyle,
    theme: { color, border, boxShadow, opacity, radius, zIndex },
  }) => ({
    padding: rem(12) /* [1] */,
    verticalAlign: 'middle',
    border,
    boxShadow,
    borderColor: 'transparent',
    borderRadius: rem(radius.largest),
    backgroundColor: color.goku[100],
    color: color.bulma[100],
    fontSize: rem(14),
    lineHeight: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    transformOrigin: 'top center',
    zIndex: zIndex.carouselControl,
    '&:last-child': {
      left: 'auto',
      right: 0,
      svg: {
        transform: `rotate(180deg) ` /* [2] */,
      },
    },
    '&:disabled, &[disabled]': {
      cursor: 'not-allowed',
      opacity: opacity.disabled,
    },
    ...inlineStyle,
    ...focus(color.piccolo[100]),
  })
);

/**
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */
export const CarouselControlCaption = styled.span<any>(hideVisually);
