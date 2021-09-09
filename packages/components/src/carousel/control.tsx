import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { rem, mq } from '@heathmont/moon-utils';

/**
 * 1. Arbitrary number to meet with Figma designs, between small and x-small.
 * 2. Flip the indicator on the right, rather than use another SVG import.
 */
export const CarouselControl = styled.button<any>(
  ({
    theme: {
      color,
      border,
      boxShadow,
      opacity,
      radius,
      zIndex,
      space,
      breakpoint,
    },
  }) => ({
    [mq(breakpoint.small, 'max-width')]: {
      display: 'none',
    },
    padding: rem(space.small) /* [1] */,
    verticalAlign: 'middle',
    border,
    boxShadow,
    borderColor: color.beerus[100],
    borderRadius: rem(radius.largest),
    backgroundColor: color.gohan[100],
    color: color.trunks[100],
    fontSize: rem(8),
    lineHeight: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'absolute',
    left: '-14px',
    top: '50%',
    transform: 'translateY(-50%)',
    transformOrigin: 'top center',
    zIndex: zIndex.carouselControl,
    '&:last-child': {
      left: 'auto',
      right: '-14px',
      svg: {
        transform: 'rotate(180deg) ' /* [2] */,
      },
    },
    '&:hover': {
      color: color.piccolo[80],
    },
    '&:disabled, &[disabled]': {
      cursor: 'not-allowed',
      opacity: opacity.disabled,
    },
    // ...focus(color.piccolo[100]),
  })
);

/**
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */
export const CarouselControlCaption = styled.span<any>(hideVisually);

export default CarouselControlCaption;
