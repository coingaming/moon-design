import { rem, mq } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';

type Props = {
  isRtl?: boolean;
};

/**
 * 1. Arbitrary number to meet with Figma designs, between small and x-small.
 * 2. Flip the indicator on the right, rather than use another SVG import.
 */
export const CarouselControl = styled.button<Props>(
  ({
    isRtl,
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
    ...(isRtl ? { right: rem(-0.875) } : { left: rem(-0.875) }),
    top: '50%',
    transform: 'translateY(-50%)',
    transformOrigin: 'top center',
    zIndex: zIndex.carouselControl,
    '&:last-child': {
      ...(isRtl
        ? {
            left: rem(-0.875),
            right: 'auto',
          }
        : {
            left: 'auto',
            right: rem(-0.875),
          }),
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
